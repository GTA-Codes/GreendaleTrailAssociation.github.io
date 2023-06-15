
//create divs:
let count = 0;
for(count; count < 200; count++){
    // console.log(count)

    let wrapper = document.querySelector('.bubble-wrapper');
    //create a div
    let newBubble = document.createElement('div');
    //add the appropriate classes
    newBubble.classList.add('bubble');
    //set the style attribute;
    newBubble.style.setProperty ("--size", 2 + Math.random()*4 +"rem" );
    newBubble.style.setProperty ("--distance", 6 + Math.random()*4 +"rem" );
    newBubble.style.setProperty ("--position", -5 + Math.random()*110 +"%" );
    newBubble.style.setProperty ("--time", 2 + Math.random()*2 +"s" );
    newBubble.style.setProperty ("--delay", -1 * (2 + Math.random()*2 )+"s" );
//add the new bubble to the section
    wrapper.appendChild(newBubble);

    
}

// console.log(document.querySelector('.bubbles'))