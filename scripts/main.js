let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/bmw.jpg') {
    myImage.setAttribute ('src','images/mers.jpg');
  } else {
    myImage.setAttribute ('src','images/bmw.jpg');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Вітаю, ' + myName;
  }
}

if (!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Вітаю, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

