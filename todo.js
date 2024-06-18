const div = document.getElementById("div");

const addTodo = (event) => {
  if (event.key === "Enter") {
    console.log("Anda pencet Enter");
    const username = event.target.value;
    const pBAru = document.createElement("p");
    const textP = document.createTextNode(username);
    pBAru.appendChild(textP);

    div.appendChild(pBAru);
  }
};
