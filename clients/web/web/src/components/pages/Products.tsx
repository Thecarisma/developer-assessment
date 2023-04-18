
import React from "react";
import { Item } from "./Item";
import { useQuery, gql } from "@apollo/client";
import { Product, ProductProps } from "./Product";

const PRODUCT_QUERIES = gql`
{
    allProducts {
      id
      sku
      name
      image
      price
      description
    }
}  
`;

type ProductsProps = {};

export const Products = (props: ProductsProps) => {

    const { data, loading, error } = useQuery(PRODUCT_QUERIES);
    const [totalPrice, setTotalPrice] = React.useState<number>(0);
    const [showCart, setShowCart] = React.useState<boolean>(false);
    const [cartItems, setCartItems] = React.useState<ProductProps[]>([]);

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
                    <i className="fa-solid fa-shopping-cart" onClick={() => setShowCart(!showCart)} />
                    <div>
                        <span>Howdy, Partner</span>
                    </div>
                </div>
            </div>
            <div className="title">Products</div>
            <div className="products-listing">
                {!loading && !error ? data.allProducts.map((product: any) => (
                    <Product
                        id={product.id}
                        sku={product.sku}
                        price={product.price}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        onClick={() => addItemToCart(product)} />
                )): null}
            </div>
        </div>

        {showCart ? <div className="dialog" onClick={toggleDialog}>
            <div className="content">
                <span className="title">Cart</span>
                <div className="items">
                    {cartItems.map((product: ProductProps) => {
                        return (<Item
                            id={product.id}
                            sku={product.sku}
                            price={product.price}
                            name={product.name}
                            desc={product.description}
                            image={product.image}
                            onCounter={updatePrice}
                            onRemove={removeProduct} />);
                    })}
                    <div className="sub-total">
                        <div>
                            <span>Total:</span>
                            <span className="total">₦{totalPrice}</span>
                        </div>
                        <button onClick={() => setShowCart(!showCart)}>Checkout</button>
                    </div>
                </div>
            </div>
        </div> : null}
    </div>);

    function addItemToCart(product: ProductProps) {
        const index = cartItems.findIndex(x => x.id === product.id);
        if (index === -1) {
            setCartItems([ ...cartItems, product]);
        }
        setShowCart(!showCart);
    }

    function removeProduct(id: number) {
        const index = cartItems.findIndex(x => x.id === id);
        cartItems.splice(index, 1);
        setCartItems(cartItems);
        setTotalPrice(cartItems.reduce((acc: number, p: ProductProps): number => acc+p.price, 0));
        setShowCart(!showCart);
    }

    function toggleDialog(e: any) {
        //if (showCart) setShowCart(false);
        //e.stopPropagation();
    }

    function updatePrice(value: number) {
        setTotalPrice(totalPrice+value);
    }

};
