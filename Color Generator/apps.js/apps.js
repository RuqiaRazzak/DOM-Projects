var colorcode =document.getElementById('color-code');
var  generatecolor=document.getElementById('generate-color');
generatecolor.onclick = () =>{
    let letters = '0123456789ABCDEFabcdef';
let color = '#';
for (let i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 22)];
}
document.body.style.backgroundColor = color;
colorcode.style.backgroundColor=color;
colorcode.textContent=color;
colorcode.style.color='white';
colorcode.style.transform = 'rotate(10deg) scale(1.1)';
setTimeout(() => {
   colorcode.style.transform = 'rotate(0deg) scale(1)';
  }, 300);
}


