import React from "react";

const Footer = ()=>{
    return(
        <React.StrictMode>
        <footer>
            <div id="footCards">
                <div className="footCard">
                    <h1>Earthly</h1>
                </div>
                <div className="footCard">
                    <h1>Explore</h1>
                    <ul>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Github Profile</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Products</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Projects</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Project Scoring</a></li>
                    </ul>
                </div>
                <div className="footCard">
                    <h1>Connect</h1>
                    <ul>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Contact Us</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Customers</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Events</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Why Earthly?</a></li>
                    </ul>
                </div>
                <div className="footCard">
                    <h1>Resources</h1>
                    <ul>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Carbon Accounting</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Carbon Offsetting</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">FAQ</a></li>
                        <li> <a href="https://github.com/PranjalKesarwani" target="_blank" rel="noreferrer">Blog</a></li>
                    </ul>
                </div>
              
            </div>
            <hr />
            <div id="socialMedia">
                <a href="https://www.linkedin.com/in/pranjal-kesarwani-4684ab204/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/pranjal-kesarwani-4684ab204/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/pranjal-kesarwani-4684ab204/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.linkedin.com/in/pranjal-kesarwani-4684ab204/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
        </React.StrictMode>
    )
}

export default Footer;