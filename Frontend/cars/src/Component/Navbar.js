//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Navbar() {
    let usertype = sessionStorage.getItem("utype")
    //let usertype = localStorage.getItem('utype')
    let username = sessionStorage.getItem("username")

    if (usertype === 'Admin') {
        return (
            <>
             <nav>
            <Link to ="/Adminafterlogin">ADMIN HOME | </Link>  
            <Link to="/admindeleteuser">DELETE USER |</Link>
            <Link to ="/Adminlogout">LOGOUT</Link>
            </nav>
            <hr/>
            </>
           
        )

    }
    else if (usertype==='USER'){
        return(
            <>
            <nav>
            <Link to ="/Userafterlogin">USER HOME | </Link>
            <Link to ="#">PROFILE UPDATE| </Link>
            <Link to ="/userlogout">LOGOUT | </Link>
            </nav>
            <hr />
            <h3 style={{ color: 'brown' }}>WELCOME {username}</h3>
            </>
        
        )
    }
    else{
        return (
            <>
            <div >
            <nav aling='center' > 
                <Link to ="/"> HOME |</Link> 
                <Link to ="/aboutus"> ABOUT US | </Link>   
                <Link to ="/login">USER LOGIN |  </Link>
                <Link to ="/userreg"> USER REGISTRATION |  </Link>
                <Link to ="/contactus">CONTACT US | </Link>
                <Link to ="/adminlog">ADMIN LOGIN |</Link>
            </nav>
            </div>
            </>
        )
        
        
    }
}




    


//STEP 3 -- EXPORT TO USE IT
export default Navbar