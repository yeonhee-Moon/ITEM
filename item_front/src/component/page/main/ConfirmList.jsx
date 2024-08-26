//get blob main으로 돌아가기버튼
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';


function ConfirmList (props){
  const {condition}= props;
  // const [image, setImage] = useState(null);
  const [imageInfo, setImageInfo] = useState({
    text: '',
    imageSrc: '',
  });
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('paramName');

  useEffect(() => {
    const fetchImageInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/item/confirmlist/${id}`, {
          responseType: 'json',
      
        });
        // setImageInfo(response.data);
        // setLoading(false);

   
        const imageUrl = `data:image/jpg;base64,${response.data.image}`; 
        // 이미지 데이터를 Base64로 인코딩
        // const base64Image = Buffer.from(response.data.imageData, 'binary').toString('base64');
        // const imageUrl = `data:image/jpeg;base64,${base64Image}`; // 이미지 타입에 맞게 설정

        setImageInfo({
          text: response.data.descript,
          imageSrc: imageUrl,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching image info:', error);
      }
    };

    fetchImageInfo();
  }, [condition]);

  
  if (loading) return <div>Loading...</div>;
  // if (!imageInfo.text) return <div>No data found</div>;

  // const handleImageFetch = () => {
  //   axios.get(`http://localhost:3000/item/comfirmlist/${id}`, { responseType: 'blob' })
  //     .then(response => {
  //       // 이미지 데이터를 Blob 형태로 받아옴
  //       const blob = new Blob([response.data]);
  //       // Blob을 이미지로 표시하기 위해 URL.createObjectURL 사용
  //       const imageUrl = URL.createObjectURL(blob);
  //       setImage(imageUrl);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching image:', error);
  //     });
  // };



  ///// const handleImageChange = (event) => {
  /////   const selectedImage = event.target.files[0];
  /////   setImage(selectedImage);
  ///// };

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append('image', image);

  //   axios.post('http://localhost:3000/item/comfirmlist', formData)
  //     .then(response => {
  //       console.log('Image uploaded successfully:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error uploading image:', error);
  //     });
  // };

    return (
  
      <div>
      <h1>ConfirmList</h1>  
 
      {imageInfo.text ? (
       <div>
       <img src={imageInfo.imageSrc} alt="Image" />
       <p>{imageInfo.text}</p>
       </div>
      ) : (
        <div>No data found</div>
      )}
      </div>
        
    )
  };
  
  export default ConfirmList;