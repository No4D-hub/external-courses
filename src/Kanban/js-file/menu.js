let userPanel = document.querySelector('.user-menu__panel');
let isOpened = false;

function openMenu() {
    isOpened = true;
    let menu = document.createElement('ul');

    menu.className = 'menu';
    document.querySelector('.user-menu').append(menu);

    let menuItems = ['Menu', 'My profile', 'My tasks', 'Settings', 'Log Out'];
    let menuLinks = ['profileLink', 'tasksLink', 'settingsLink', 'logOutLink'];

    for (let i = 0; i < menuItems.length; i++ ) {
            let menuItem = document.createElement('li');

            menuItem.className = 'menu__item';
            menu.append(menuItem);

            let itemContent = document.createElement('a');

            itemContent.className = 'menu__item-link';
            menuItem.append(itemContent);
            itemContent.innerHTML = menuItems[i];
            if (i === 0) {
                itemContent.id = 'menuTitle'
            } else {
                itemContent.href = menuLinks[i-1];
            }
    }
    menu.style.animation = 'showmenu 0.5s ease-in-out forwards'
    replaceArrow();
}

function closeMenu() {
    let menu = document.querySelector('.menu');

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