import React,{useState} from 'react'
import './Header.css'
import {FiX,FiMenu } from "react-icons/fi";


function Header() {

    const [click,setClick] = useState(false);
    const handleClick =()=>setClick(!click);
    
    const closeMobileMenu =() =>setClick(false);

  return (

   <div className="header">
      <div >
        <div className="header-container">
            <div className="logo">
                <a href="#">UBan </a>
            </div>
            <ul className={click ? "menu active" : "menu"}>
                    <li className="menu-link"onClick={closeMobileMenu}>
                        <a href="#">Home </a>
                    </li>
                    <li className="menu-link"onClick={closeMobileMenu}>
                        <a href="#">Article </a>
                    </li>
                    <li className="menu-link"onClick={closeMobileMenu}>
                        <a href="#">Feature </a>
                    </li>

                    <li className="menu-link"onClick={closeMobileMenu}>
                        <a href="#">About</a>
                    </li>

                    <li className="menu-link"onClick={closeMobileMenu}>
                        <a href="#">Contract</a>
                    </li>
                    
            </ul>

            
                <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        ) 
                    }
                </div>
        </div>
        
        </div>  


       
   </div>
   
  )
}

export default Header