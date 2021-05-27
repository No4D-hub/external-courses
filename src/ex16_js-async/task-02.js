function debounce(callback, time) {
    let timeLeft = time;
  
    function delayCallback() {
      if (timeLeft < time) {
        return undefined;
      } 
      callback.apply(this, arguments);
      timeLeft = 0;
      setTimeout(() => {timeLeft = time}, time);
  
      return undefined;
    }
  
    return delayCallback;
  }
  
  let searchButton = document.querySelector('.input__button');
  let input = document.querySelector('.input__field');
  let output = document.querySelector('.output__queries');
  
  function printSearch() {
    let queryText = input.value;
    
    if (queryText !== '') {
      output.innerHTML += queryText + '<br>';
    }
  
    return undefined;
  }
  
  let query = debounce(printSearch, 2000);
  
  searchButton.onclick = query;