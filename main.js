const textArea = document.querySelector('#textarea');
const countBtn = document.querySelector('#count-btn');
const result = document.querySelector('#result');
const clearBtn = document.querySelector('#clear-btn')

countBtn.addEventListener('click', wordCounter);

clearBtn.addEventListener('click', clearTextArea);

function wordCounter (e){
 const textAreaLength = textArea.value.
 split(" ").filter(word => word.match(/[a-z0-9]/gi)).length;
 if (textArea.value === ""){
   alert('You have not written anything yet');
 }else{
   
 if (textAreaLength === 1){
 result.textContent = `${textAreaLength} word`;
}
 else{
   result.textContent = `${textAreaLength} words`;
 }
  countBtn.setAttribute('style','display: none');
 clearBtn.setAttribute('style','display: block');
}
 e.preventDefault();
}

function clearTextArea (e) {
  textArea.value = "";
   clearBtn.setAttribute('style','display: none');
   countBtn.setAttribute('style','display: block');

  e.preventDefault();
}
