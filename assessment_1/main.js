const inputURL = document.querySelector('.form__imgURL');
const inputTxtTop = document.querySelector('.form__text__top');
const inputTxtBottom = document.querySelector('.form__text__bottom');
const memeContainer = document.querySelector('.section');
const addBtn = document.querySelector('.form__submit__button')



const onAdd = () => {
  // 1. Return input value 
  const imgURL = inputURL.value.trim();
  const textTop = inputTxtTop.value.trim().toUpperCase();
  const textBottom = inputTxtBottom.value.trim().toUpperCase();
  if (imgURL === '' || textTop === '' || textBottom === '') {
    inputURL.focus();
    inputTxtTop.focus();
    inputTxtBottom.focus();
    return;
  }
  // 2. Create Image item
  const meme = createMeme(imgURL, textTop, textBottom);
  // // 3. append the item to the container
  memeContainer.append(meme);
  // 4. Reset the item

  inputURL.value = '';
  inputTxtTop.value = '';
  inputTxtBottom.value = '';

};

addBtn.addEventListener('click', event => {
  event.preventDefault()
  onAdd();
})


const createMeme = (imgURL, textTop, textBottom) => {
  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img__container');
  
  const img = document.createElement('img');
  img.setAttribute('class', 'img__url');
  img.src = imgURL;

  const txtTop = document.createElement('span');
  txtTop.setAttribute('class', 'img__text__top');
  txtTop.innerHTML = textTop;

  const txtBottom = document.createElement('span');
  txtBottom.setAttribute('class', 'img__text__bottom');
  txtBottom.innerHTML = textBottom;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'img__delete'); 
  deleteBtn.innerHTML = 'X';
  deleteBtn.addEventListener('click', () => {
    memeContainer.removeChild(imgContainer);
  })
  
  imgContainer.append(img);
  imgContainer.append(txtTop);
  imgContainer.append(txtBottom);
  imgContainer.append(deleteBtn);
  return imgContainer;
  

}