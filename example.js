//file input button

//text area element


//button has a callback that saves the area text entry to a variable

//get total number of sentences
//get total number of words
//get total number of syllables


var inputText;
var area;

var editDiv;
var editDivText;

function buttonPressed() {
	inputText = area.value();
	createP(inputText);

	var delim = ".:;?!@#$%^&*}";
	allWords = splitTokens(inputText, delim);
	create(allWords.length);

	var sentDelim = ".?!";

	//first argument - the string to split
	//second argument - the delimiter (how to split)
	//returned value = an array made up of the split strings

	var allWords = splitTokens(inputText, delim);
	createP(allWords.length);

}

function setup(){
	area = createElement('textarea', "stuff starting in the text area");
	area.size(500,500);
	var button = createButton ('PUSH TO SAVE');
	button.mousePressed(buttonPressed);

	//editDiv = select('editText');
	//editDiv.changed(funtion()){

	}



}