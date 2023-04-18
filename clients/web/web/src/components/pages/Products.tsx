

type ProductsProps = {};

export const Products = (props: ProductsProps) => {
    return (<div className="products">
        <div className="sidebar">
            <span className="title">Lifestores Healthcare</span>
            <ul className="menu">
                <li className="inactive">Categories</li>
                <li className="active">Products</li>
                <li className="inactive">Pharmacy</li>
                <li className="inactive">Stores</li>
            </ul>
        </div>
        <div className="main-view">
            <div className="top-bar">
                <div className="form-group iconed" style={{ width: "30%" }}>
                    <input placeholder="Search" />
                    <i className="fa-solid fa-search" />
                </div>
                <div className="control">
                    <i className="fa-solid fa-user inactive" />
                    <i className="fa-solid fa-shopping-cart" />
                    <div>
                        <span>Howdy, Partner</span>
                    </div>
                </div>
            </div>
            <div className="title">Products</div>
            <div className="products-listing">
                <div className="product">
                    <img alt="paracetamol" src="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"/>
                    <div className="info">
                        <div className="price">NGN 300</div>
                        <div className="name">Paracetamol</div>
                        <div className="desc">Paracetamol (acetaminophen) is a pain reliever and a fever reducer</div>
                        <button className="textonly" onClick={() => {}}>Add To Cart</button>
                    </div>
                </div>
                <div className="product">
                    <img alt="paracetamol" src="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"/>
                    <div className="info">
                        <div className="price">NGN 300</div>
                        <div className="name">Paracetamol</div>
                        <div className="desc">Paracetamol (acetaminophen) is a pain reliever and a fever reducer</div>
                        <button className="textonly" onClick={() => {}}>Add To Cart</button>
                    </div>
                </div>
                <div className="product">
                    <img alt="paracetamol" src="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"/>
                    <div className="info">
                        <div className="price">NGN 300</div>
                        <div className="name">Paracetamol</div>
                        <div className="desc">Paracetamol (acetaminophen) is a pain reliever and a fever reducer</div>
                        <button className="textonly" onClick={() => {}}>Add To Cart</button>
                    </div>
                </div>
                <div className="product">
                    <img alt="paracetamol" src="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"/>
                    <div className="info">
                        <div className="price">NGN 300</div>
                        <div className="name">Paracetamol</div>
                        <div className="desc">Paracetamol (acetaminophen) is a pain reliever and a fever reducer</div>
                        <button className="textonly" onClick={() => {}}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
