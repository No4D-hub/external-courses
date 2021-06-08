function debounce(func, wait) {
  let timeout;

  return function executedFunction() {
    const later = function() {
      timeout = null;
    };

    const callNow = !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, arguments);
  };
};
  
let searchButton = document.querySelector('.input__button');
let input = document.querySelector('.input__field');
let output = document.querySelector('.output__queries');
let firstDebounce = true;
  
function printSearch() {
  let queryText = input.value;
    
  if (queryText !== '') {
    output.innerHTML += queryText + '<br>';
  }
  
  return undefined;
}
  
let query = debounce(printSearch, 2000);
  
searchButton.onclick = query;