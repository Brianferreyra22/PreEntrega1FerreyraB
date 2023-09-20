import Button from "react-bootstrap/Button";

const ItemListContainer = (props) => {
console.log(props) 
    return(
        <div>
            <h1>{props.greetEng}</h1>
            <Button variant="success">Agregar</Button>
        </div>
    );
};

export default ItemListContainer;