import React from "react"
import Rectangle from './base images/Rectangle.png'
import Menu from "./Menu"
import "./Style.css"

const Base = ({
    className = "bg-white text-dark p-4",
    children
}) =>{
    return(
        <div>
            <div className ="row" >

                <div className="col-1" style={{
                position: "relative",
                width: "558px",
                height: "195px",
                left: "-20px",
                top: "-13px"
            }} >
                    <img src = {Rectangle} alt="Nanban-marketplace-logo" />
                </div>
                
            
                <div  className="col-10" style={{
                    family: "Montserrat",
                    style: "normal",
                    weight: "normal",
                    size: "20px",
                    height: "24px",
                    align: "center",
                }}>
                <Menu />
                </div>
            </div>

            <div className = {className}>{children}</div>
           

        </div>
        
    )
}

export default Base
