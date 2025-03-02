//get blob main으로 돌아가기버튼
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';


function ConfirmList (props){
  const {condition}= props;
  const [imageInfo, setImageInfo] = useState({
    text: '',
    imageSrc: null,
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
       
        const imageUrl = `data:image/jpg;base64,${response.data.image}`; 
       
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
  

    return (
  
      <div>
      <h1>ConfirmList</h1>  
 
      <h3>Description: {imageInfo.text}</h3>
      {(imageInfo.imageSrc !== 'data:image/jpg;base64,null') && (imageInfo.imageSrc !== null) ? (
        <img
          src={imageInfo.imageSrc}
          alt="Uploaded"
          style={{ width: '300px', height: 'auto' }}
        />
      ) : (
        <p>No image available</p> // 이미지가 없을 때 표시할 내용
      )}
      </div>
        
    )
  };
  
  export default ConfirmList;