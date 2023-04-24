import React from "react";
import NavPart from "./NavPart";


const changeNav = () => {

    document.getElementById('newHamburger').classList.toggle('icon');
    document.getElementById('newNavPages').classList.toggle('change');
}



const NewNav = () => {

    return (
        <React.StrictMode>
        
            <NavPart  changeNav={changeNav} />
        </React.StrictMode>
    )
}

export default NewNav;