import age from './module.js';
import './style.css'

import img from './images/chemic.png'

const a = document.createElement("img")
a.src = img;
document.body.appendChild(a);

console.log(img);

console.log('index.js', age);