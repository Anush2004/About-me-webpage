function myFunction(randomnumber) {
    if (randomnumber % 6 == 0) {
        document.body.style.backgroundColor = "lightcyan";
    }
    if (randomnumber % 6 == 1) {
        document.body.style.backgroundColor = "lightgreen";
    }
    if (randomnumber % 6 == 2) {
        document.body.style.backgroundColor = "lightblue";
    }
    if (randomnumber % 6 == 3) {
        document.body.style.backgroundColor = "lightyellow";
    }
    if (randomnumber % 6 == 4) {
        document.body.style.backgroundColor = "orange";
    }
    if (randomnumber % 6 == 5) {
        document.body.style.backgroundColor = "white";
    }
}
var mytag = document.getElementById("font");

function changefontsize(size) {
    for (let i = 1; i <= 8; ++i) {
        var mytag = document.getElementById("font" + (i).toString());
        mytag.style.fontSize = size;
    }
}
function loaded() {
    i = 0;
    while (localStorage.getItem(i)) {
      const node = document.createElement('li');
      const firstname = localStorage.getItem(i);
      const textnode = document.createTextNode(firstname);
      node.appendChild(textnode);
      document.getElementById('demo').appendChild(node);
      i++;
    }
  }
  
  function addEntry() {
  
    i = 0;
    while (localStorage.getItem(i)) {
      i++;
    }
  
    localStorage.setItem(i, document.getElementById("user_input").value);
  
    const node = document.createElement('li');
    const firstname = localStorage.getItem(i);
    const textnode = document.createTextNode(firstname);
    node.appendChild(textnode);
    document.getElementById('demo').appendChild(node);
  
  }
  
  function clearStorage() {
    localStorage.clear();
    document.location.reload(true);
  }