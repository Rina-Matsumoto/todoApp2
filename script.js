// input要素とul要素を取得してくる
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
  if(inputBox.value === ''){
    alert("You must light somethig!");
  }else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
}