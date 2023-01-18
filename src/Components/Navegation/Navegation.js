import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation(){
    return(
 
      <nav>
               <h1 className="titulo2">Rick & Morty</h1>        
                <ul>
                
                  <button><Link className="link" to="/">Home</Link></button>
                  <button ><Link className="link" to="/characters">Characters</Link></button>
                  <button ><Link className="link" to="/contact">Contact</Link></button>
                </ul>
                
      </nav>
    )
}