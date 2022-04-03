
export const uploadImage = async( file: File ): Promise<string> => {

  const CLOUDINARY_URL: string = import.meta.env.VITE_CLOUDINARY_URL?.toString() || '';
  const API_KEY: string = import.meta.env.VITE_APIKEY?.toString() || '';

  console.log('CLOUDINARY_URL', CLOUDINARY_URL);

  const form_data = new FormData();

  form_data.append('upload_preset', 'react-lithor');
  form_data.append('file', file);
  form_data.append('api_key', API_KEY);

  try {

    const res = await fetch(
      CLOUDINARY_URL,
      {
        method: 'POST',
        body: form_data
      }
    )
    console.log('res', res);
    if (res.ok){
      const { secure_url } = await res.json();
      return secure_url;

    }else{
      throw await res.json();
    }
    
  } catch (error) {
    console.log(error);
    return 'Error uploading image';
  }




}
