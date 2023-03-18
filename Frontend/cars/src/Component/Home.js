//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Home() {
    return (
        <div className="body"> 
            <Navbar />
        </div>
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Home