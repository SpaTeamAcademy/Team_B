function addItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === "") {
      alert("Bitte gib etwas ein :)")
    } 
    else {
      var deleteBtn = document.createElement("span");
      deleteBtn.innerHTML = "\u00D7";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", function () {
          this.parentElement.remove();
      });

      li.appendChild(deleteBtn);
      document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";
}