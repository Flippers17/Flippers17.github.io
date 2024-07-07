var screenshots = document.querySelectorAll(".gridScreenshotContainer");

// screenshots.forEach(element => { element.addEventListener("click", EnlargeImage(element)); });
for (let index = 0; index < screenshots.length; index++) 
{
    const element = screenshots[index];
    element.addEventListener("click", function(){EnlargeImage(element)});
    // element.classList.toggle("preview");
}


function EnlargeImage(screenshot) 
{
    screenshot.classList.toggle("enlarge");
    //screenshot.classList.toggle("preview");
}