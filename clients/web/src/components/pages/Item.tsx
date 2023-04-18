
import React from "react";

type ItemProps = {
    id: number;
    sku: string;
    name: string;
    desc: string;
    price: number;
    image: string;
    onRemove: any;
    onCounter: any;
};

export const Item = (props: ItemProps) => {

    const [quantity, setQuantity] = React.useState<number>(1);

    React.useEffect(() => {
        props.onCounter(props.price);
        // eslint-disable-next-line
    }, []);

    return (<div className="item">
        <img alt={props.name} src={props.image} />
        <div className="info">
            <span className="name">{props.name}</span>
            <span className="desc">{props.desc}</span>
            <div className="counter">
                <i className="fa-solid fa-plus" onClick={() => {
                    setQuantity(0 + quantity + 1);
                    props.onCounter(props.price);
                }} />
                <span>{quantity}</span>
                <i className="fa-solid fa-minus" onClick={() => {
                    setQuantity(0 + quantity - 1);
                    props.onCounter(-props.price);
                }} />
            </div>
        </div>
        <div className="sub-total">
            <span className="price">₦{props.price * quantity}</span>
            <span className="remove" onClick={() => props.onRemove(props.id)}>Remove</span>
        </div>
    </div>);
}

