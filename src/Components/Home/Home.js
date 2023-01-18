import "./Home.css";
import {useState} from 'react'
import { Link } from "react-router-dom";


export default  function Home() {
    

    return( 
        
        <header>
            <div className="home">
            <main>
            <h1>Poyecto- Rick & Morty</h1>
            <div className="botones">
               <Link to='/Characters'><button>Characters</button></Link>
               <Link to='/Contact'><button>Contact</button></Link>
            </div>
            </main>
            </div>
           
        </header>
    )
}


    