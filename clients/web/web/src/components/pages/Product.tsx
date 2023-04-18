

type ProductProps = {
    sku: string;
    name: string;
    desc: string;
    price: string;
    image: string;
    onClick: any
};

export const Product = (props: ProductProps) => {
    return (<div className="product">
        <img alt={props.name} src={props.image} />
        <div className="info">
            <div className="price">₦ {props.price}</div>
            <div className="name">{props.name}</div>
            <div className="desc">{props.desc}</div>
            <button className="textonly" onClick={props.onClick}>Add To Cart</button>
        </div>
    </div>);
}

