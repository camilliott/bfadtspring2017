var button;
var textspace;
var savedText;

function setup() {
  noCanvas();
  textspace = createElement('textspace', 'Jumble up the manifesto');
  textspace.size(300,400);
  createElement('br');
  button = createButton('CLICK ME');
  button.mousePressed(saveText);
}

function saveText() {
  savedText = textspace.value();
  createP("ORIGINAL TEXT: " + savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, 'leftist, revolution, feminist, industrial, technology, system');
  var length = textArr.length;

  // create a new array to hold the result of the reshuffling
  var jumbledArr = [];

  // loop through the array, pick a random index, add it to the new array, and remove it from the old array
  for (var i = 0; i < length; i++) {
    var whichIndex = int(random(textArr.length));
    jumbledArr.push(textArr[whichIndex]);
    textArr.splice(whichIndex, 1);
  }

  // join the new jumbled array into a single string, separated by spaces
  var newString = join(jumbledArr, ' ');
  createP("NEW TEXT: " + newString);
}