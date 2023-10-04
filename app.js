let data = [];

let todoToRender = document.getElementById('todo-list');
let deleteBtn = document.getElementById('delete-btn');
const todoForm = document.getElementById('todo-form');

function deleteTodo(event) {
  const button = event.target;
  const index = button.getAttribute('data-id');
  data.splice(index, 1);
  renderData();
}

function updateTodo(event) {
  const button = event.target;
  const index = button.getAttribute('data-id');
  const updateForm = document.getElementById('update-form');

  updateForm.classList.remove('hidden');
  todoForm.classList.add('hidden');
  const title = document.getElementById('update-title');
  const description = document.getElementById('update-description');

  const findItem = data[index];
  title.value = findItem.title;
  description.value = findItem.description;

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const itemData = {
      title: title.value,
      description: description.value,
      id: findItem.id,
    };

    data.splice(index, 1, itemData);

    renderData();

    updateForm.classList.add('hidden');
    todoForm.classList.remove('hidden');
  });
}

function renderData() {
  todoToRender.innerHTML = '';

  const div = document.createElement('div');
  data.forEach((item, index) => {
    const template = `<div class='border p-2 flex justify-between mb-3' >
    <div >
      <h1>${item.title}</h1>
      <p class='text-gray-300'>${item.description}</p>
    </div>
    <div>
    <button class='bg-blue-800 p-1 text-white rounded' id='edit-btn' data-id="${index}" >Edit</button>
    <button class='bg-red-800 p-1 text-white rounded' id='delete-btn' data-id="${index}" >Delete</button>
    </div>
  </div>`;

    div.innerHTML += template;
  });

  todoToRender.append(div);

  const deleteButtons = document.querySelectorAll('#delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteTodo);
  });

  const editBtn = document.querySelectorAll('#edit-btn');
  editBtn.forEach((button) => {
    button.addEventListener('click', updateTodo);
  });
}

function onSubmit(e, value) {
  e.preventDefault();

  if (value === 'update') {
    renderData();
    return;
  }

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  let inputData;

  if (title !== '' && description !== '') {
    inputData = {
      id: data.length + 1,
      title: title,
      description: description,
    };

    data.push(inputData);

    renderData();
  } else {
    alert('Please fill in all fields');
  }
}

todoForm.addEventListener('submit', onSubmit);

