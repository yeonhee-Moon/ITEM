//get blob main으로 돌아가기버튼
import React, { useState } from 'react';
import axios from 'axios';

const ConfirmList = () => {
  const [image, setImage] = useState(null);

  const handleImageFetch = () => {
    axios.get('http://your-java-backend-api/getImage', { responseType: 'blob' })
      .then(response => {
        // 이미지 데이터를 Blob 형태로 받아옴
        const blob = new Blob([response.data]);
        // Blob을 이미지로 표시하기 위해 URL.createObjectURL 사용
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://your-java-backend-api/upload', formData)
      .then(response => {
        console.log('Image uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };

    return (
  
      <div>
      <h1>ConfirmList</h1>  
      <div>
      <button onClick={handleImageFetch}>Fetch Image</button>
      {image && <img src={image} alt="Fetched Image" />}
      </div>

      <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      </div>
      </div>
    )
  };
  
  export default ConfirmList;