// lastchild,lastelementchild, createchild, firstelementchild, 
// firstchild, nextsibling, nextelementsibling, 
// nextelementsibling, previoussibling, previouselementsibling
// createelement, setAttribute, createtextnode, appendchild
var parent = document.querySelector('#items');

console.log(parent.parentNode);

console.log(parent.parentElement);

console.log(parent.parentNode.parentNode);

console.log(parent.parentNode.parentNode.parentNode);

console.log(parent.childNodes);

console.log(parent.children);

console.log(parent.children[3]);

console.log(parent.firstChild);

console.log(parent.firstElementChild);

console.log(parent.lastChild);

console.log(parent.lastElementChild);

console.log(parent.nextSibling);

console.log(parent.nextElementSibling);

console.log(parent.previousSibling);

console.log(parent.previousElementSibling);

var newdiv = document.createElement('div');

newdiv.setAttribute('title', 'hello div');

var text = document.createTextNode('Hello world');

newdiv.appendChild(text);

console.log(newdiv);
