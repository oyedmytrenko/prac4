let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'img/firefox.png') {
    myImage.setAttribute('src', 'img/firefox2.png');
  } else {
    myImage.setAttribute('src', 'img/firefox.png');
  }
}