

export type ProductProps = {
    sku: string;
    name: string;
    price: number;
    image: string;
    description: string;

    onClick: any;
};

export const Product = (props: ProductProps) => {
    return (<div className="product">
        <img alt={props.name} src={props.image} />
        <div className="info">
            <div className="price">₦ {props.price}</div>
            <div className="name">{props.name}</div>
            <div className="desc">{props.description}</div>
            <button className="textonly" onClick={props.onClick}>Add To Cart</button>
        </div>
    </div>);
}

