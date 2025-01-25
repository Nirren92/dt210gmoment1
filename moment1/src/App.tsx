import './App.css'
import Greeting from './components/greatings'
import Header from './components/Header/Header';
import Item from './components/item/Item';
import { useState } from 'react'



function App() {
const [name, setname] = useState("Niklas");
const [item, setItem] = useState("asd");



  return (

    
    
    <main>
        <Header titel="Hemsida" />
     

        <div className="itemContainer">
          <Item itemTitel={'asd'} itemText={'dasssssssssssssssssssssssss'} itemBoolean={false}/>
        </div>

      </main>


  )
}

export default App
