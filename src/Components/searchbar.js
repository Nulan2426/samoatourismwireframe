import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Style from "../Styling/searchbar.module.css"
import Samoa5 from "../Assets/samoa5.jpg"
import { VscSearch } from "react-icons/vsc"




export default function Searchbar() {
    
    const [searchInput, setSearchInput] = useState("");

    const Villages = [

        { name: "Apia", image: "Apia" },
        { name: "Lalomanu", image: "Lalomanu" },
        { name: "Solosolo", image: "Solosolo" },
        { name: "Vailima", image: "Vailima" },
        { name: "Lepea", image: "Lepea" },
  

    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        Villages.filter((Villages) => {
            return Villages.name.match(searchInput);
        });
    }
    return (
        <div>
            <div className={Style.searchbarmain}> 
                
                <div className={Style.searchbar}><input 
                    type="text" 
                    placeholder="       Search villages here . . ."
                    onChange={handleChange}
                    value={searchInput} />
                    <button><VscSearch/></button>
                </div>

                <h1 className={Style.explore}>Explore what Samoa has to offer!</h1>
                <div className={Style.backgroundsearch} />
            <table className={Style.villagelist}>
                <tr>
                    <th>Villages</th>
                    <th>image</th>
                </tr>
                {Villages.map((villages, index) => {
                    <tr>
                        <td>{villages.name}</td>
                        <td>{villages.image}</td>
                    </tr>
                })}
            </table>
            
           
                
            </div>
        </div>

    )
};