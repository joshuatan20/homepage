import './style.css'

const container = document.querySelector('.container');

let colorArray=['#6BFFB8','#78C0E0','50B2C0','CE84AD']





setInterval(()=>{

  let color = Math.floor(Math.random() * colorArray.length) 
  let left= Math.random() * window.innerWidth;
  let top = Math.random() * window.innerHeight;

  let div = document.createElement('div');
div.className = 'circle';
div.style.top = top + 'px';
div.style.left= left  +'px';
div.style.backgroundColor = colorArray[color]
container.appendChild(div);
},100);