# Kanban board <br>
## How to open <br>
Just open **index.html** in your browser. <br>
**Important: index.html and src folder should be located in the same directory.** <br>
## How to use <br>
Click to +Add card in Backlog to create your first task. Then it will be available for adding in the next block. You can move tasks choosing them in dropdown menu. <br>
## Project structure <br>
**index.html** defines document structure and has links to .css, .svg files and scripts for working with tasks and menu. <br>
* src/css-file/**kanban** imports styles for components such as header, footer, menu, etc. which are located in /css-file <br>
  * src/css-file/**footer.css**, src/css-file/**header.css** - styles for footer and header <br>
  * src/css-file/**main.css** - styles for <main></main> area (currently defines backround color, position of child elements and animation for appending some elements) <br>
  * src/css-file/**menu.css** - styles for dropdown menu which is appending after click on +Add card in blocks exept Backlog <br>

* src/**svg-file** - directory for svg files <br>
* src/**js-file** - here all scripts are located <br>
  * src/js-file/**menu.js** - script for opening and closing user menu <br>
  * src/js-file/**tasks.js** - performs all work with blocks, has functions for working with blocks and tasks (creating and moving) <br>