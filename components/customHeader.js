
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
                        <a href="index.html#aboutMe" class="nav-link">About Me </a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#gamesSection" class="nav-link">Games </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/filip-j%C3%A4rlesj%C3%B6-4a30692b3/" class="nav-link">LinkedIn <img src="Media/iconmonstr-linkedin-3.svg" alt="LinkedIn" class="nav-item-image"></img></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/Flippers17" class="nav-link">GitHub <img src="github-mark/github-mark.svg" alt="GitHub" class="nav-item-image"></img></a>
                    </li>
                    <li class="nav-item">
                        <a href="mailto: filip.jarlesjo@gmail.com" class="nav-link">filip.jarlesjo@gmail.com <img src="Media/email-svgrepo-com.svg" alt="Gmail" class="nav-item-image"></img></a>
                    </li>
                    <li class="nav-item">
                        <a href="Media/CV Filip Järlesjö.pdf" class="nav-link">CV</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        
    <   /header>
        `
    }
}



customElements.define('custom-header', CustomHeader);