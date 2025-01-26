import './App.css'

import Header from './components/Header/Header';
import Item from './components/item/Item';



function App() {


  //texter tagna från wiki samt imdb
  const items = [ 
    { itemTitel: 'Harry Potter', itemText: 'This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. ', itemBoolean: false },
    { itemTitel: 'Game Of Thrones', itemText: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea', itemBoolean: true },
    { itemTitel: 'Shantaram', itemText: 'Shantaram is a 2003 novel by Gregory David Roberts, in which a convicted Australian bank robber and heroin addict escapes from Pentridge Prison and flees to India. The novel is commended by many for its vivid portrayal of life in Bombay in the 1980s.', itemBoolean: false },
 
  ]

  return (

    
    
    <main>
        <Header titel="Böcker" />
     
        <Item itemTitel="info" itemText="Detta är bäcker som är bra. icke lästa böcker är röda medans lästa är gröna" itemBoolean={false} itemInfo = {true} />


        <div className="itemContainer">
          {items.map((item,index) => (
            <Item key={index} itemTitel={item.itemTitel} itemText={item.itemText} itemBoolean = {item.itemBoolean} itemInfo = {false}/>
           ))}

           
        </div>

      </main>


  )
}

export default App
