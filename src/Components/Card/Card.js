import {useState} from 'react';
import "./Card.css";


export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)
        setOcultar(false) 
    }

    const ocularInfo=()=>{
        setOcultar(true) 
    }

    return(
        <div className="container">
             <img className='img-fluid text-center' src={info.image} alt={info.name}/>
             <div className="personajes" >
                  <h2>{info.name}</h2>
                  <button onClick={mostrar} className={ocultar === true ?"btn btn-success":"d-none"}>Show More..</button> 
             </div>
              {ocultar ===false?
                 <div className="personajes2 container justify-content-center text-center ">
                     <button className="btn btn-primary btn-sm" onClick={ocularInfo}>X</button>
                     <ul className="list-group-item col-3">
                         <li className="list-group-item text-light">Character Status {info.status}</li>
                         <li className="list-group-item">Species {info.species}</li>
                         <li className="list-group-item">Origin {info.origin.name}</li>
                         <li className="list-group-item">Gender {info.gender}</li>
                     </ul>
                 </div>:''      
                }
        </div>
    )
}
