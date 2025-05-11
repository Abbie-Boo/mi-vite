export function setupCounter(element) {
  let counter = 3.2;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter.toFixed(1)}`;
  };
  element.addEventListener('click', () => setCounter(counter + 0.1));
  setCounter(3.2);
}
