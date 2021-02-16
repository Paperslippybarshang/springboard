// Write the code necessary to do the following:
document.querySelector('section')
// 1.Select the section with an id of container without using querySelector.
document.getElementById('container');
// 2.Select the section with an id of container using querySelector.
document.querySelector('#container');
// 3.Select all of the list items with a class of “second”.
document.querySelectorAll('.second');
// 4.Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol').querySelector('.third');
// 5.Give the section with an id of container the text “Hello!”.
document.querySelector('#container').innerHTML += "Hello!"
// 6.Add the class main to the div with a class of footer.
document.querySelector('.footer').classList.add('main')
// 7.Remove the class main on the div with a class of footer.
document.querySelector('.main').classList.remove('main')
// 8.Create a new li element.
const listElement = document.createElement('li');
// 9.Give the li the text “four”.
listElement.innerText = "four"
// 10.Append the li to the ul element.
const unorderedList = document.querySelector('ul');
unorderedList.append(listElement);
// 11.Loop over all of the lis inside the ol tag and give them a background color of “green”.
const orderedList = document.querySelector('ol');
const listItems = orderedList.querySelectorAll('li')
for (x of listItems) {
  x.style.backgroundColor = 'green'
}
// 12.Remove the div with a class of footer
document.querySelector('.footer').remove()