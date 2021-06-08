let userPanel = document.querySelector('.user-menu__panel');
let isOpened = false;

function openMenu() {
    isOpened = true;
    let menuBlock = document.createElement('div')
    let menuHeading = document.createElement('div')
    menuBlock.className = 'menu__block'
    menuHeading.className = 'menu__header'
    menuHeading.innerHTML = 'Menu'
    let menuList = document.createElement('ul');
    menuList.className = 'menu__list';
    document.querySelector('.user-menu').append(menuBlock);
    menuBlock.append(menuHeading)
    menuBlock.append(menuList)
    let menuItems = ['My profile', 'My tasks', 'Settings', 'Log Out'];
    let menuLinks = ['profileLink', 'tasksLink', 'settingsLink', 'logOutLink'];

    for (let i = 0; i < menuItems.length; i++ ) {
            let menuItem = document.createElement('li');

            menuItem.className = 'menu__item';
            menuList.append(menuItem);

            let itemContent = document.createElement('a');

            itemContent.className = 'menu__item-link';
            menuItem.append(itemContent);
            itemContent.innerHTML = menuItems[i];
            itemContent.href = menuLinks[i];
    }
    menuBlock.style.animation = 'showmenu 0.5s ease-in-out forwards'
    replaceArrow();
}

function closeMenu() {
    let menu = document.querySelector('.menu__block');

    menu.remove();
    isOpened = false;
    replaceArrow();
}

function replaceArrow() {
    let arrow = document.querySelector('.user-menu__arrow-icon_rotate');

    arrow.src = isOpened?'svg-file/arrow-up.svg':'svg-file/arrow-down.svg';
}

function menuMain() {
    if (!isOpened) {
        openMenu(); 
    } else { 
        closeMenu();
    }
}

userPanel.onclick = menuMain; 