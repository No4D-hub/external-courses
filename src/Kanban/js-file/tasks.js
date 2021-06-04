let dataMock = [
    {
        title: 'Backlog',
        issues: [],
    },
    {
        title: 'Ready',
        issues: [],
    },
    {
        title: 'In Progress',
        issues: [],
    },
    {
        title: 'Finished',
        issues: [],
    }
];

let localStorageDataMock = JSON.parse(localStorage.getItem('datamock'));

let main = document.querySelector('.main');
let blockId = ['backlog', 'ready', 'inProgress', 'finished'];

function createTaskBlock(title) {
    let taskBlock = document.createElement('div');
    taskBlock.className = 'taskBlock';
    main.append(taskBlock);

    let header = document.createElement('div');
    header.className = 'taskBlock__header';
    header.innerHTML = title;
    taskBlock.append(header);

    let taskList = document.createElement('ul');
    taskList.className = 'taskBlock__list';
    taskBlock.append(taskList);

    let addCard = document.createElement('button');
    addCard.className = 'taskBlock__addbutton';
    addCard.innerHTML = '+Add card';
    taskBlock.append(addCard);
}

function createBlocks() {
    for (let i = 0; i < dataMock.length; i++) {
        createTaskBlock(dataMock[i].title);
    }

    let blocks = document.querySelectorAll('.taskBlock');

    for (let i = 0; i < dataMock.length; i++) {
        blocks[i].style.height = '150px';
        blocks[i].id = blockId[i];
    }
}

function addToList(currentBlockId, issue) {
    let taskBlock = document.getElementById(`${currentBlockId}`);
    let taskList = taskBlock.querySelector('.taskBlock__list');
    let taskItem = document.createElement('li');

    taskItem.className = 'taskBlock__taskItem';
    taskItem.innerHTML = issue.name;
    taskList.append(taskItem);
    taskBlock.style.height = increaseHeight(taskBlock);

    (dataMock[blockId.indexOf(`${currentBlockId}`)].issues).push(issue);
    localStorage.setItem('datamock', JSON.stringify(dataMock));
    changeButtonSetting();
}

function removeIssueFromArray(currentBlockId, issue) {
    (dataMock[blockId.indexOf(`${currentBlockId}`) - 1].issues).splice(issue.id - 1, 1);
    localStorage.setItem('datamock', JSON.stringify(dataMock));

    let previousTaskBlock = document.getElementById(blockId[blockId.indexOf(`${currentBlockId}`) - 1]);
    let taskList = previousTaskBlock.querySelector('.taskBlock__list');
    let taskItem = taskList.querySelectorAll('.taskBlock__taskItem');

    taskList.removeChild(taskItem[(issue.id) - 1]);
    previousTaskBlock.style.height = decreaseHeight(previousTaskBlock);
}

function addToBacklog() {
    let backlog = document.querySelector('.taskBlock');
    let backlogList = backlog.querySelector('.taskBlock__list');
    let taskInput = document.createElement('input');

    taskInput.className = ('taskBlock__input');
    backlogList.append(taskInput);

    height = backlog.style.height;
    height = +(backlog.style.height.substr(0, backlog.style.height.length - 2));
    if (height > 700) taskInput.style.width = '383px';
    height += 50;
    backlog.style.height = height + 'px';
    taskInput.focus();

    function removeInput() {
        if (taskInput.value !== "") {
            issue = {
                id: dataMock[0].issues.length + 1,
                name: taskInput.value
            };
            backlogList.removeChild(taskInput);
            backlog.style.height = decreaseHeight(backlog);
            addToList(blockId[0], issue);
        }
    }

    taskInput.addEventListener('blur', removeInput);
}

function changeButtonSetting() {
    let buttons = document.getElementsByTagName('button');

    for (let i = 2; i < buttons.length; i++) {
        //Пришлось использовать костыль, так как до сих пор не понимаю, откуда появляется 5-ая кнопка и куда она исчезает, если воспользоваться консолью
        if (dataMock[i - 2].issues.length > 0) {
            buttons[i].removeAttribute('disabled', 'true');
            buttons[i].className = ('taskBlock__addbutton');
        } else if (dataMock[i - 2].issues.length === 0) {
            buttons[i].setAttribute('disabled', 'true');
            buttons[i].className = ('taskBlock__addbutton_disabled');
        }
    }
}

function addDropdown() {
    localStorage.setItem('datamock', JSON.stringify(dataMock));

    let currentBlockId = this.parentElement.id;
    let dropDown = document.createElement('select');
    let taskBlock = document.getElementById(`${this.parentElement.id}`);

    dropDown.className = ('taskBlock__dropdown');
    taskBlock.append(dropDown);
    dropDown = taskBlock.querySelector('.taskBlock__dropdown');
    dropDown.focus();

    let option = document.createElement('option');

    option.className = ('taskBlock__dropdownOption');
    option.innerHTML = "select task";
    dropDown.append(option);
    for (let i = 0; i < dataMock[(blockId.indexOf(currentBlockId)) - 1].issues.length; i++) {
        let option = document.createElement('option');

        option.className = ('taskBlock__dropdownOption');
        option.value = dataMock[(blockId.indexOf(currentBlockId)) - 1].issues[i].id;
        option.innerHTML = dataMock[(blockId.indexOf(currentBlockId)) - 1].issues[i].name;
        dropDown.append(option);
    }

    taskBlock.style.height = increaseHeight(taskBlock);

    dropDown.addEventListener("change", moveSelectedIssue);
    dropDown.addEventListener("change", closeDropdown);

    function moveSelectedIssue() {
        if (dropDown.selectedIndex !== 0) {
            let issue = {
                id: dropDown.selectedIndex,
                name: dropDown.options[dropDown.selectedIndex].innerHTML
            };
            addToList(`${currentBlockId}`, issue);
            removeIssueFromArray(`${currentBlockId}`, issue);
            changeButtonSetting();
        }
    }
}

function closeDropdown() {
    let taskBlock = document.getElementById(`${this.parentElement.id}`);
    let dropDown = taskBlock.querySelector('.taskBlock__dropdown');

    taskBlock.removeChild(dropDown);
    taskBlock.style.height = decreaseHeight(taskBlock);
}

function increaseHeight(block) {
    height = block.style.height;
    height = +(block.style.height.substr(0, block.style.height.length - 2));
    height += 50;
    height = height + 'px'; 

    return height;
}

function decreaseHeight(block) {
    height = block.style.height;
    height = +(block.style.height.substr(0, block.style.height.length - 2));
    height -= 50;
    height = height + 'px';  

    return height;
}

createBlocks();
changeButtonSetting();

let buttons = main.getElementsByTagName('button');
let addbutton = buttons[0];

addbutton.onclick = addToBacklog;
for (let i = 1; i < buttons.length; i++) {
    buttons[i].addEventListener('click', addDropdown);
} 