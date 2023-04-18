
import React from "react";

type ItemProps = {
    sku: string;
    name: string;
    desc: string;
    price: number;
    image: string;
    onRemove: any;
};

export const Item = (props: ItemProps) => {

    const [quantity, setQuantity] = React.useState<number>(1);

    return (<div className="item">
        <img alt={props.name} src={props.image} />
        <div className="info">
            <span className="name">{props.name}</span>
            <span className="desc">{props.desc}</span>
            <div className="counter">
                <i className="fa-solid fa-plus" onClick={() => setQuantity(0+quantity+1)}/>
                <span>{quantity}</span>
                <i className="fa-solid fa-minus" onClick={() => setQuantity(0+quantity-1)} />
            </div>
        </div>
        <div className="sub-total">
            <span className="price">₦{props.price * quantity}</span>
            <span className="remove" onClick={props.onRemove}>Remove</span>
        </div>
    </div>);
}

