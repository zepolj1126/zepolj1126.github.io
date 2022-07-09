class htmlHeadContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <link rel="stylesheet" type="text/css" href="lsd-styles.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        `
    }
}

customElements.define("html-head-content", htmlHeadContent);

class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <a class="navbar-brand mx-3" href="index.html">
                <img src="lsd-logo-300ppi.png" alt="" class="header-logo">
            </a>

            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="lsd-projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="lsd-about-us.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="lsd-about-us.html">Client Portal</a>
                    </li>
                </ul>
            </div> -->

        </div>
    </nav>
    
        `
    }
}

customElements.define("my-header", myHeader);



class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="container-fluid footer py-4">

        <!-- <div class="row justify-content-center mb-3">
            <div class="col-lg-8">
               <b>Site Links</b>
            </div>
        </div>

        <div class="row justify-content-center mb-1">
            <div class="col-lg-4">
                <a class="site-links" href="index.html">Home</a>
             </div>
            <div class="col-lg-4">
               <a class="site-links" href="lsd-projects.html">Projects</a>
            </div>
            
        </div>

        <div class="row justify-content-center mb-3">
            <div class="col-lg-4">
                <a class="site-links" href="lsd-about-us.html">About Us</a>
             </div>
            <div class="col-lg-4">
                <a class="site-links" href="#">Client Portal</a>
             </div>
        </div>

        <hr> -->

        <div class="row justify-content-center mb-4" style="display:flex;align-items:center;">
            <div class="col-lg-4 mb-3">
                <a href="index.html"><img class="footer-logo" src="text-logo-charcoal.png" alt=""></a>
            </div>
            <div class="col-lg-4">
                <div class="footer-text">555-555-5555</div>
                <div class="footer-text">example@example.com</div>
                <div class="footer-text">123 Example St.</div>
                <div class="footer-text">Example City, EX 12345</div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8" style="display:flex;align-items:center;">
                <span style="margin-right:10px;"><b>Follow Us</b></span> <a href="#" class="fa fa-instagram"></a> <a href="#" class="fa fa-facebook"></a> <a href="#" class="fa fa-linkedin"></a>
             </div>
        </div>

    </div>
    
        `
    }
}

customElements.define("my-footer", myFooter);
