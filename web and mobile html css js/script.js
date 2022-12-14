window.addEventListener("load", function ()
{
    // Get button element references.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement  = document.getElementById("click-button");

    // Counter value.
    let counter = 0;

    // Click button function. 
    let clickButtonFunction = function ()
    {
        //Increment counter. 
        counter++;

        //update click counter value.
        clickCounterElement.innerHTML = counter;
    };

    // Attach click button. 
    clickButtonElement.addEventListener("click", clickButtonFunction);
});