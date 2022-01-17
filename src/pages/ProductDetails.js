import {Link} from 'react-router-dom'

function ProductDetails(props) {

    function addProduct(product) {
        const newBasket = JSON.parse(JSON.stringify(props.basket));
        const foundBasket = newBasket.find(prod => prod.id === product.id)


        if (foundBasket) {
            props.updateQuantity(product, foundBasket.quantity + 1)
        } else {
            const itemToAdd = { ...product, quantity: 1 }
            newBasket.push(itemToAdd);
            props.setBasket(newBasket)
        }


    }

    return <section className="product-detail main-wrapper">
        <img
            src={props.product.image}
            alt={props.product.title}
        />

        <div className="product-detail__side" style={{ borderColor: 'var(--yellow)' }} >
            <h2>{props.product.title}</h2>
            <p>
                {props.product.description}
            </p>
            <p>£{props.product.price}</p>
            <Link to='/basket'><button onClick={function () {
                addProduct(props.product);
            }}>Add to basket</button></Link>

        </div>
    </section>
}
export default ProductDetails
