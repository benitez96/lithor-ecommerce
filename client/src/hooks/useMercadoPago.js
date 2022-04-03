import { useEffect, useState, useRef } from "react";
import useScript from "./useScript";
import { formConfig } from "../components/mercadoPago/formConfig";
import {useSelector} from "react-redux";

export default function useMercadoPago() {
  const [resultPayment, setResultPayment] = useState(undefined);
  
  const { products: items, totalAmount } = useSelector(state => state.cart)


  const { MercadoPago } = useScript(
    "https://sdk.mercadopago.com/js/v2",
    "MercadoPago"
  );

  const shipping = useRef()
  // const [shipping, setShipping] = useState({});
  console.log('shipping', shipping.current)

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(import.meta.env.VITE_PUBLIC_KEY_MP);
      const cardForm = mp.cardForm({
        amount: totalAmount.toString(),
        autoMount: true,
        form: formConfig,
        callbacks: {
          onFormMounted: (error) => {
            if (error)
              return console.warn(
                "Form Mounted handling error: ",
                error
              );
          },

          onSubmit: (event) => {
            event.preventDefault();
            setResultPayment('loading')

            console.log('items', items)
            console.log('shipping', shipping.current)

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();


            fetch(
              `${ import.meta.env.VITE_URL_PAYMENT_MP }/process_payment`,
              {
                // entry point backend
                method: "POST",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Request-Method":
                  "GET, POST, DELETE, PUT, OPTIONS",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  token,
                  issuer_id,
                  payment_method_id,
                  transaction_amount: amount,
                  installments: Number(installments),
                  items,
                  description: "Compra en LithorShop",
                  shipping_data: shipping.current,
                  payer: {
                    email,
                    identification: {
                      type: identificationType,
                      number: identificationNumber,
                    },
                  },
                }),
              }
            )
              .then((res) => res.json())
              .then((data) => setResultPayment(data))
              .catch((err) => {
                setResultPayment(err);
              });
          },
        },
      });
    }
  }, [MercadoPago]);

  return { resultPayment, shipping };
}
