

export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/drzojrfyk/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-task");
  formData.append("file", file );

  try {
    const res = await fetch(cloudUrl, {        
        method: "POST",
        body: formData
    });

    if (res.ok) {       
      const cloudResp = await res.json();
      return cloudResp.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    throw error;
  }
};
