class NavMenu extends HTMLElement {

    constructor() {

        super();

        const template = document.createElement('template');

        template.innerHTML = `

        <link rel="stylesheet" href="main.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div id="nav-div" class="div">
            <i id="nav-button-mobile" class="fa fa-bars" style="color:white;font-size:34px;" aria-hidden="true"></i>
            <ul id="nav-ul">
                <li><a href="index.html">Home</a></li>
                <li><a href="about_me.html">About me</a></li>
                <li><a href="technical_writing.html">Technical writing</a></li>
                <li><a href="ux_writing.html">UX writing</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
            </ul>
        </div>
        
        <div id="nav-div-mobile" class="div">
            <ul id="nav-ul-mobile">
            </ul>
        </div>
    `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        let navDivMobile = this.shadowRoot.getElementById("nav-div-mobile");
        let navButtonMobile = this.shadowRoot.getElementById("nav-button-mobile");
        let navList = this.shadowRoot.getElementById("nav-ul");
        let navListMobile = this.shadowRoot.getElementById("nav-ul-mobile");

        navListMobile.innerHTML = navList.innerHTML;

        // navButtonMobile.addEventListener("click", function () {

        //     if (navDivMobile.style.opacity === "1" && navDivMobile.style.visibility === "visible" /*&& navDivMobile.style.display === "block"*/) {
        //         navDivMobile.style.opacity = "0";
        //         navDivMobile.style.visibility = "hidden"
        //         // navDivMobile.style.display = "none";
        //     } else {
        //         navDivMobile.style.opacity = "1";
        //         navDivMobile.style.visibility = "visible"
        //         // navDivMobile.style.display = "block";
        //     }

        // });

        navButtonMobile.addEventListener("click", function () {
            if (navDivMobile.style.display === "block") {
                navDivMobile.style.display = "none";
            } else {
                navDivMobile.style.display = "block";
            }
        });

    }
}

// Register the custom element
customElements.define('nav-menu', NavMenu);
