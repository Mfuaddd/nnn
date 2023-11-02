const svgCollision = document.getElementById("svg-collision")
const line = document.getElementById("line")
console.log(svgCollision,line); 
line.addEventListener('animationend', function(){line.classList.remove('animated');})
svgCollision.addEventListener('mouseover',function(){line.classList.add('animated');})