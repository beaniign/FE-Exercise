import './style.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Gallery from './Gallery';


/* Resources
http://jsonplaceholder.typicode.com/
https://www.digitalocean.com/community/tutorials/react-axios-react
https://betterprogramming.pub/creating-a-simple-app-with-react-js-f6aa88998952
https://www.youtube.com/watch?v=o7c_RRUTQHo&t=600s&ab_channel=QuentinWattTutorials
https://codepen.io/adityajanuardi/pen/YzydaVj
https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript
*/

let counter = 0;
const max = 4999;

function getRndNum(max) {                                // returns a random number between 0 and 4999          
  return Math.floor(Math.random() * max);
}

function cacheImages(gallery) {                          // explicit caching function - may not be necessary
  if (!cacheImages.list) {
    cacheImages.list = [];
  }
  let list = cacheImages.list;
  for (let i = 0; i < gallery.length; i++) {
      let img = new Image();
      list.push(img);
      img.src = gallery[i];
  }
}

function randomize(gallery, rerender, setRerender, counter) {
  let temp = gallery[counter];
  let rnd = getRndNum(max);
  gallery[counter] = gallery[rnd];
  gallery[rnd] = temp;
  counter++;
  if(counter > max) {                                    // base case - when all 5000 entries of the array has been randomized
    setRerender(!rerender);                              //             rerender the components
    counter = 0;                                         //             reset counter to 0 for next button press
  } else {
    randomize(gallery, rerender, setRerender, counter);  // recursive call
  }
}

function App() {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [rerender, setRerender] = useState(false);
  const [gallery, setImage] = useState(null)             // by default image will be null
  
  useEffect(() => {                                      // makes API call and fetches images
    axios.get(url)
    .then(response => {
      setImage(response.data);
    })
  }, [url])


  if(gallery){                                           // if guard so we don't do anything with null
    cacheImages(gallery);
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