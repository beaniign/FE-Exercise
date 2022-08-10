import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
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
  // const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/photos`;
  const [gallery, setImage] = useState(null) // by default image will be null
  

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setImage(response.data);
    })
  }, [url])

  if(gallery){
    return (
      <div>
        <h1>{gallery[0]['title']}</h1>
        <img src = {gallery[0]['url']}></img>
        <h1>{gallery[1]['title']}</h1>
        <img src = {gallery[1]['url']}></img>
        <h1>{gallery[2]['title']}</h1>
        <img src = {gallery[2]['url']}></img>
      </div>
    );
  }
    
  return (
    <div></div>
  )
  
}

export default App