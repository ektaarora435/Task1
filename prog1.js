const items = document.querySelectorAll('.item');
const container2 = document.querySelector('.container2');
const resetButton = document.getElementById('resetButton');
const message = document.getElementById('message');

let draggedItem = null;

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

resetButton.addEventListener('click', reset);

function dragStart() {
  draggedItem = this;
  setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
  draggedItem.classList.remove('invisible');
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('highlight');
}

function dragLeave() {
  this.classList.remove('highlight');
}

function drop() {
  this.classList.remove('highlight');
  this.appendChild(draggedItem);
  showMessage('Item dropped successfully!');
}

function reset() {
  container2.innerHTML = '';
  items.forEach(item => {
    document.querySelector('.container1').appendChild(item);
  });
  showMessage('');
}

function showMessage(text) {
  message.textContent = text;
}