import {useState}from 'react';
import {Fragment} from "react";
import './Contact.css';
import Navegation from '../Navegation/Navegation';

export default function Contact(){

    let[inputNombre,setImputNombre]=useState('')
    const registrerData=(event)=>{
        setImputNombre(event.target.value)
    }
    const mostrar=()=>{
        if (inputNombre.lenght <5){
            console.log("your name is so shortly")
        }
    }
    return(
        <Fragment>           
            <Navegation/>
          <div className="container position-absolute top-50 start-50 translate-middle p- m-5"> 
                    <h1 >Contacto</h1>
                    <h2 >Déjanos tus datos para que podamos ponernos en contacto contigo</h2>
                <form className='row g-3 p-10 m-5'>
                    <div className='col-6'>
                         <label htmlFor="nombre" className="form-label">Nombre</label>
                         <input type= "text" className="form-control" id="nombre" value={setImputNombre}onChange={registrerData}onBlur={mostrar}/>
                      </div>
                      <div className="col-6">
                          <label htmlFor="correo" className="form-label">Email</label>
                          <input type="email" className="form-control" id="correo" />
                      </div>
                      <div className="col-12">
                          <label htmlFor="mensaje" className="form-label">Mensaje</label>
                          <textarea id="mensaje" className="form-control"></textarea>
                       </div>               
                       <div className="col-12">
                         <button type="enviar" className= "inicio">Iniciar sesión</button>                
                       </div>
                </form>   
           </div> 
       </Fragment>       
    )
}


