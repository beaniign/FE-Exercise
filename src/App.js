import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// import { useParams } from 'react-router-dom'

/* Resources
http://jsonplaceholder.typicode.com/
http://jsonplaceholder.typicode.com/guide/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://betterprogramming.pub/creating-a-simple-app-with-react-js-f6aa88998952
https://thewebdev.info/2021/11/14/how-to-fetch-image-from-api-with-react/
https://stackoverflow.com/questions/62776866/how-to-show-image-from-api-in-javascript
https://developer.mozilla.org/en-US/docs/Web/API/Response/json
https://www.youtube.com/watch?v=o7c_RRUTQHo&t=600s&ab_channel=QuentinWattTutorials
https://codepen.io/adityajanuardi/pen/YzydaVj
https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
https://stackoverflow.com/questions/42854494/how-do-i-retrieve-images-from-json-into-react
*/

// ================================ 1 image ==================================
// function App() {
//   const url = `https://jsonplaceholder.typicode.com/photos/2`;
//   const [img, setImage] = useState(null) // by default image will be null
  

//   useEffect(() => {
//     axios.get(url)
//     .then(response => {
//       setImage(response.data);
//     })
//   }, [url])

//   if(img){
//     return (
//       <div>
//         <h1>{img.title}</h1>
//         <img src = {img.url}></img>
//       </div>
//     );
//   }

//     return (
//       <div></div>
//     )
  
// }

// export default App

// =============================== multiple images =========================================



function App() {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [gallery, setImage] = useState(null) // by default image will be null

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setImage(response.data);
    })
  }, [url])

  let itemData;

  // if(gallery) {
  //   for(let i = 0; i < 5000; i++){
  //     <div class="container">
  //       <h1>{gallery[i]['title']}</h1>
  //       <img src = {gallery[i]['url']}></img>
  //     </div>
  //   }
  // }
  // if(gallery) {
  //   for(let i = 0; i < 5000; i++){
  //     <div class="container">
  //       <h1>{gallery[i]['title']}</h1>
  //       <img src = {gallery[i]['url']}></img>
  //     </div>
  //   }
  // }

  if(gallery){

    return (
      <div className = "container">
        {gallery.map((photo) => (
          <img src={photo.url} alt={photo.title} loading="lazy"/> 
          ))}
        
      </div>
    )

  }
    
  return (
    <div></div>
  )
  
}

export default App