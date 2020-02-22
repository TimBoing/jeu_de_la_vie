const myFunc = () => {
  const myButton = document.getElementById('start-game');
  const cells = document.querySelectorAll('td');

  const toggleThem = () => {
    cells.forEach((cell) => {
      cell.classList.toggle('alive');
    });
  }


  myButton.addEventListener(('click'), (event) => {
    alert("yo");
  });

  document.addEventListener("DOMContentLoaded", () => {
    setInterval(toggleThem, 1000); // Every 1 second, the `refresh` function is called.
  });

}

export { myFunc };
