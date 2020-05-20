const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete button center',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
	// Checkbox Container.
	let cont = document.createElement('div');
	cont.className = classNames.TODO_ITEM;

	// Checkbox.
	let input = document.createElement('input');
	input.type = 'checkbox';
	input.className = classNames.TODO_CHECKBOX;
	input.setAttribute('onclick', 'UpdateCounts()');

	// Label Text
	let boxes = document.getElementsByClassName(classNames.TODO_TEXT);
	let lastItemIndex = boxes.item(boxes.length - 1);
	let labelText = lastItemIndex
		? Number(lastItemIndex.innerText.split(': ')[1]) + 1
		: 1;

	// Label.
	let label = document.createElement('label');
	label.innerText = `TODO: ${labelText}`;
	label.className = classNames.TODO_TEXT;

	// Label.
	let del = document.createElement('button');
	del.innerText = `X`;
	del.className = classNames.TODO_DELETE;
	del.setAttribute('onclick', 'DeleteTodo()');

	// Add checkbox and label to the container.
	cont.appendChild(input);
	cont.appendChild(label);
	cont.appendChild(del);

	// add checkbox-container to the list.
	list.appendChild(cont);
	UpdateCounts();
}

function UpdateCounts() {
	itemCountSpan.innerText = list.children.length;
	uncheckedCountSpan.innerText = Unchecked();
}

function Unchecked() {
	const boxes = document.getElementsByClassName(classNames.TODO_CHECKBOX);
	let unchkd = 0;
	if (boxes.length > 0) {
		for (let i = 0; i < boxes.length; i++) {
			!boxes[i].checked && unchkd++;
		}
	}
	return unchkd;
}

function DeleteTodo(e) {
	event.target.parentNode.remove();
	UpdateCounts();
}
