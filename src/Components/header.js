import React from "react";
import Style from "../Styling/header.module.css"
import samoa1 from "../Assets/samoa1.png"



function Header () {
        return (
            
            
                <div className={Style.header}>

                <div className={Style.leftside}>
                    <div className={Style.samoa1}><img src={samoa1} alt='samoa tourism image' />
                      
                    </div>

                    <div className={Style.rightside}>
                        <ul className={Style.btn}>
                            <li className={Style.nav}>Villages</li>
                            <li className={Style.nav}>Hotels</li>
                            <li className={Style.nav}>Contact</li>
                            <li className={Style.login}>Login</li>
                        </ul>

                        </div>
                </div>
                </div>


    )
};

export default Header;