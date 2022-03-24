/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 30;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-18';
  canvas.appendChild(div);
  count++;
};

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let darkModeTrue = false;

// let classColor;

let brush = document.querySelector(".current-brush");

let colors = document.querySelector('.paint-colors');

let canvas = document.querySelector('.canvas');

let squares = document.querySelectorAll('.canvas div');

let mouseDown = false;

let darkModeButton = document.querySelector('button');

let body = document.querySelector('body');

let paletteIcon = document.querySelector('.palette-icon');

let paintColors = document.querySelector('.paint-colors');

let currentBrush = document.querySelector('.current-brush')


/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

colors.addEventListener('click', function(event){
  console.log(event.target.classList)
  swapColor(brush, event.target);
});

for (let i = 0; i < squares.length; i++){
  let square = squares[i];
  square.addEventListener('click', function(){
    if (mouseDown === false){
      swapColor(square, brush);
    }
  })

  square.addEventListener('mouseenter', function(){
    if (mouseDown === true){
      swapColor(square, brush);
    }
  });
};

document.addEventListener('mousedown', function(){
  mouseDown = true;
});

document.addEventListener('mouseup', function(){
  mouseDown = false;
});

darkModeButton.addEventListener('click', function(){
  if (darkModeTrue === false){
    darkModeTrue = true;
    console.log('dark mode baby')
  } else {
    darkModeTrue = false;
    console.log('light mode')
  }
  darkModeButton.classList.toggle('buttonDarkMode');
  body.classList.toggle('bodyDarkMode')
  paletteIcon.classList.toggle('palette-iconDarkMode')
  if (darkModeTrue === false){
    console.log('Now In Light Mode')
    swapColorWithColor(currentBrush, 'color-18')
  } else {
    console.log('Now In Dark Mode')
    swapColorWithColor(currentBrush, 'color-18DarkMode');
  }
  for (let i = 0; i < paintColors.children.length; i++){
    let color = paintColors.children[i];
    let newColor;
    if (darkModeTrue === true){
      newColor = `color-${i+1}DarkMode`;
    } else {
      newColor = `color-${i+1}`;
    }
    swapColorWithColor(color, newColor)
  }
});

/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.


// Helper function

function swapColor(domToReplace, domColor){
  let classColor = domToReplace.classList.item(1);
  domToReplace.classList.remove(classColor);
  classColor = domColor.classList.item(1);
  domToReplace.classList.add(classColor);
}

function swapColorWithColor(domToReplace, color){
  let classColor = domToReplace.classList.item(1);
  domToReplace.classList.remove(classColor);
  domToReplace.classList.add(color);
}