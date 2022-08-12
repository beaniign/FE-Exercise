import './style.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Gallery from './Gallery';


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
https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240
*/

let counter = 0;
const max = 5000;

function getRndNum(max) {
  return Math.floor(Math.random() * max);
}

function randomize(gallery, rerender, setRerender, counter) {
  let temp = gallery[counter];
  let rnd = getRndNum(max);
  gallery[counter] = gallery[rnd];
  gallery[rnd] = temp;
  counter++;
  if(counter === max) {        // base case - when all 5000 entries of the array has been randomized
    setRerender(!rerender);    //             rerender the components
    counter = 0;               //             reset counter to 0 for next button press
  } else {
    randomize(gallery, rerender, setRerender, counter);  // recursive call
  }
}

function App() {
  const [rerender, setRerender] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [gallery, setImage] = useState(null) // by default image will be null
  
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setImage(response.data);
    })
  }, [url])


  if(gallery){
    return (
      <div className = "container"> 
      <Gallery input = { gallery } />
      <button onClick= {() => randomize(gallery, rerender, setRerender, counter) }>Randomize</button>
      </div>
    )
  }
    
  return (
    <div></div>
  )
  
}

export default App