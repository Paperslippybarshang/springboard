

const body = document.querySelector('body');
body.style.backgroundColor = `black`;


document.addEventListener('mousemove', event => {
  let r = (event.clientX * 255 / window.innerWidth);
  let b = (event.clientY * 255 / window.innerHeight);
  console.log(`${event.clientX} ${event.clientY}`)
  console.log(`${r} ${b}`)
  let color = `rgb(${r}, 0, ${b})`
  body.style.backgroundColor = color;
})

