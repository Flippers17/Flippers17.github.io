
class CustomHeader extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `
        <header>
            
            <nav class="navbar">
                <a href="index.html" class="nav-logo"><h3>Filip Järlesjö</h3></a>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/filip-j%C3%A4rlesj%C3%B6-4a30692b3/" class="nav-link">LinkedIn <img src="iconmonstr-linkedin-3.svg" alt="LinkedIn" class="nav-item-image"></img></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/Flippers17" class="nav-link">GitHub <img src="github-mark/github-mark.svg" alt="GitHub" class="nav-item-image"></img></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">option 3</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
            
        </header>
        `
    }
}



customElements.define('custom-header', CustomHeader);