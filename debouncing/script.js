// debounce function
function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

// fetching the data
function fetchData(query) {
  document.getElementById(
    "results"
  ).innerHTML = `fecthing Results for : ${query}`;
  console.log("API Call => ", query);
}

// call api and print pages
const debounceFetch = debounce(fetchData, 500);

// attach the id and addEventListener
document.getElementById("searchIn").addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query) {
    debounceFetch(query);
  } else {
    document.getElementById("results");
  }
});
