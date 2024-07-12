
class CustomFooter extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `
        <footer class="contactInfoSection">
            <h1 class="contactHeadline">Contact information</h1>
            <div class="contactLinks">
                <a href="https://www.linkedin.com/in/filip-j%C3%A4rlesj%C3%B6-4a30692b3/">
                    <p class="socialsLinkText">LinkedIn</p>
                    <img src="Media/iconmonstr-linkedin-3.svg" alt="linkedIn" class="socialsImage"></a>
                <a href="https://github.com/Flippers17">
                    <p class="socialsLinkText">GitHub</p>
                    <img src="github-mark/github-mark.svg" alt="" class="socialsImage">
                </a>
                <a href="mailto: filip.jarlesjo@gmail.com">
                    <p class="socialsLinkText">filip.jarlesjo@gmail.com</p>
                    <img src="Media/email-svgrepo-com.svg" alt="Mail:" class="socialsImage">
                </a>
                <a href="Media/CV Filip Järlesjö.pdf">
                    <p class="socialsLinkText">CV</p>
                    
                </a>
                    
            </div>
        </footer>
        `
    }
}



customElements.define('custom-footer', CustomFooter);