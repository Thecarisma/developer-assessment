import { Item } from "./Item";
import { Product } from "./Product";


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
                {<Product
                    sku="sku"
                    price="300"
                    name="Paracetamol"
                    desc="Paracetamol (acetaminophen) is a pain reliever and a fever reducer"
                    image="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"
                    onClick={() => { }} />}
            </div>
        </div>

        <div className="dialog">
            <div className="content">
                <span className="title">Cart</span>
                <div className="items">
                    {<Item
                        sku="sku"
                        price={300}
                        name="Paracetamol"
                        desc="Paracetamol (acetaminophen) is a pain reliever and a fever reducer"
                        image="https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg"
                        onRemove={() => { }} />}
                    <div className="sub-total">
                        <div>
                            <span>Total: 2</span>
                            <span className="total">₦600</span>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
