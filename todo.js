const div = document.getElementById("div");

const addTodo = (event) => {
  if (event.key === "Enter") {
    // console.log("Anda pencet Enter");
    const username = event.target.value;
    const liBAru = document.createElement("li");
    const textP = document.createTextNode(username);
    liBAru.appendChild(textP);

    div.appendChild(liBAru);
  }
};
