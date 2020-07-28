import React from "react"
import {Link,withRouter} from "react-router-dom"

const currentTab = (history,path) =>{
    if(history.location.pathname === path){
        return "#2ecc72"
    }
    else{
        return  "#0C0B0B"
    }
}

const Menu = ({history}) =>{
    
    return(
        <div>
        <ul className =" nav nav-pills " >
            <li className = "nav-items">
                <Link to ="/" className =" nav-link mx-4" style={{ color:currentTab(history, "/"),
                                                        position: "relative",
                                                        width: "85px",
                                                        height: "32px",
                                                        left: "500px",
                                                        top: "40px"}}>
                                                            
                Home</Link>
                </li>
            <li className = "nav-items">
                <Link to ="/features" className =" nav-link  mx-4"style={{  color:currentTab(history, "/features"),
                                                            position: "relative",
                                                            width: "90px",
                                                            height: "32px",
                                                            left: "500px",
                                                            top: "40px"
               }}>Features</Link>
                </li>
            <li className = "nav-items">
                <Link to="/photographs" className =" nav-link mx-4"style={    {color:currentTab(history, "/photographs"),
                                                            position: "relative",
                                                            width: "141px",
                                                            height: "32px",
                                                            left: "500px",
                                                            top: "40px"
                }}>Photographs</Link>
                </li>
            <li className = "nav-items">
                <Link to="/faq" className =" nav-link mx-4"style={    {color:currentTab(history, "/faq"),
                                                            position: "relative",
                                                            width: "90px",
                                                            height: "32px",
                                                            left: "480px",
                                                            top: "40px"
                }}>FAQ</Link>
                </li>
            <li className = "nav-items">
                <Link to="/about" className =" nav-link mx-4"style={    {color:currentTab(history, "/about"),
                                                            position: "relative",
                                                            width: "85px",
                                                            height: "32px",
                                                            left: "450px",
                                                            top: "40px"
                }}>About</Link>
                </li>
        </ul>
        </div>

    )
}

export default withRouter(Menu)