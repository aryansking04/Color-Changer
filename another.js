const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const head1 = document.querySelector('h1');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
      head1.style.color = 'black'
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
      head1.style.color = 'White'
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
      head1.style.color = 'black'
    } else if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
    } else if (e.target.id === "aqua") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
    } else if (e.target.id === "brown") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
    } else if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
    } else if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
      head1.style.color = 'White'
    } else if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
      head1.innerHTML = `Now color is ${e.target.id}`;
      head1.style.color = 'blue'
    }
  });
});
