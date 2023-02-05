import React from "react";
import Style from "../Styling/infocards.module.css"
import Samoa1 from "../Assets/samoa3.jpg"


export default function InfoCard() {

        return (
    
            <div>
                <div className={Style.thecontainer}>

                    <div className={Style.card}>
                        <img src={Samoa1} alt='image samoa1' />
                        <h2>Lalomanu</h2>
                        <h3>White sandy beach on Upolu's eastern end</h3>
                        
                </div>
                
                    <div className={Style.card}>
                        <img src={Samoa1} alt='image samoa1' />
                        <h2>Lalomanu</h2>
                        <h3>White sandy beach on Upolu's eastern end</h3>

                </div>
                
                    <div className={Style.card}>
                        <img src={Samoa1} alt='image samoa1' />
                        <h2>Lalomanu</h2>
                        <h3>White sandy beach on Upolu's eastern end</h3>

                    </div>
                    
            </div>
        </div>
        )
    }