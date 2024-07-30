var screenshots = document.querySelectorAll(".gridScreenshotContainer");

var currentEnlarged;

// screenshots.forEach(element => { element.addEventListener("click", EnlargeImage(element)); });
for (let index = 0; index < screenshots.length; index++) 
{
    const element = screenshots[index];
    element.addEventListener("click", function(){EnlargeImage(element)});
    // element.classList.toggle("preview");
}


function EnlargeImage(screenshot) 
{
    if(screen.width <= 968)
    {
        return;
    }

    if(currentEnlarged != null && currentEnlarged != screenshot)
    {
        currentEnlarged.classList.toggle("enlarge");
    }

    screenshot.classList.toggle("enlarge");

    if(currentEnlarged == screenshot)
        currentEnlarged = null;
    else
        currentEnlarged = screenshot;
    //screenshot.classList.toggle("preview");
}