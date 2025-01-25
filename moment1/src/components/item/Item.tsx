import './Item.css';

function Item(prop: {itemTitel:string; itemText:string;itemBoolean:boolean} )
{
    return (
        <div className = "item-container">
            <h2>{prop.itemTitel}</h2>
            <p> {prop.itemText}</p>
        </div>
    );
}

export default Item;