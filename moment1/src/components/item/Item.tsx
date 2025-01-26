import './Item.css';

interface ItemProps {
    itemTitel: string;
    itemText: string;
    itemBoolean: boolean;
    itemInfo : boolean;
}




function Item(prop: ItemProps)
{

//sätter om den är läst eller inte. samt kontrollerar om det är en info ruta eller itne
let readornot = prop.itemBoolean ? 'green' : 'red';
let colortext = prop.itemInfo ? 'black' : 'white';
readornot = prop.itemInfo ? 'white' : readornot;



    return (
        <div className = "item-container" style={{background: readornot, color: colortext}}>
            <h2>{prop.itemTitel}</h2>
            <p> {prop.itemText}</p>
        </div>
    );
}

export default Item;