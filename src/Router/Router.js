import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "../Components/Home/Home";
import Characters from '../Components/Characters/Characters';
import Contact from '../Components/Contact/Contact';

export default function Router(){
    return(
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Characters' element={<Characters/>}/>
             <Route path='/Contact' element={<Contact/>}/>
         </Routes>     
     </BrowserRouter>

    )


}