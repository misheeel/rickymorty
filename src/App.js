import React from "react";
import Header from "./components/Header";
import Personajes from "./components/Personajes";
import rickandmorty from './rickandmorty.json';
import Footer from "./components/Footer";


//importo el componente que quiero de su archivo

  function App() {
    return (

      <React.Fragment>
     
      <div>
         
          <div id= "Header"> 
              <Header/>
          </div>
      
      

          <div className="Cartas">
          
      {
              rickandmorty.map(function(item, idx){
                return(
                    <div id='card' key={idx}>
                        <Personajes Datos={item} />
                    </div>
                   )
                })
      }
          </div>

          <div id= "Header"> 
              <Footer/>
          </div>

      </div>

</React.Fragment>
    

  );
}

export default App; 


