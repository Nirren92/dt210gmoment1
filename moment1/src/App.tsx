import './App.css'

import Header from './components/Header/Header';
import Item from './components/item/Item';



function App() {


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
