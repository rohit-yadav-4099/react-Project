import React from "react";
<script src="https://kit.fontawesome.com/1165876da6.js" crossOrigin="anonymous"></script>

function Footer(){
    return(
        <div>
            <footer>
                <div className="footerContainer">
                    <div className="footercontact">
                        <h1>Contact Us</h1>
                        <div className="navcontact">
                        <p>Email: ry707178@gmail.com</p>
                        <p>Phone: +917800962194</p>
                        <p>Address: Jaunpur UP</p>
                        </div>
                    </div>
                    <div className="footerLink">
                    </div>
                    <div className="footerSocilMedia">
                        <h1>Follow Us</h1>
                        <div className="navSocialmedia">
                            <a href="https://www.facebook.com/profile.php?id=100016012260785" target="_blank" rel="noopener noreferrer">
                                <img className="navsicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="Not Found" />
                            </a>

                            <a href="https://github.com/rohit-yadav-4099" target="_blank" rel="noopener noreferrer">
                                <img className="navsicon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='Not Found' />
                            </a>

                            <a href="https://www.instagram.com/rohit_yadav_4099/" target="_blank" rel="noopener noreferrer">
                                <img className='navsicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found' />
                            </a>

                            <a href="https://www.linkedin.com/in/rohit-yadav-21404124b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bzmc3vt9IR4ug2%2FdBZVF5gQ%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img className="navsicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer
