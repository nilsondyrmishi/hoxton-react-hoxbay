import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import ProductDetails from "./ProductDetails";

function ProductsPage(props){
    const params = useParams()

    const [product, setProduct] = useState(null);

    function getProductFromServer() {
        fetch(`http://localhost:3000/products/${params.id}`)
            .then(res => res.json())
            .then(productFromServer => setProduct(productFromServer))
    }
    useEffect(getProductFromServer, []);

    if (product === null) {
        return <main>Loading....</main>
    }
    if (product.title === undefined) {
        return <main>Product not found!</main>
    }
    return <main>
        <ProductDetails product={product}
                        basket={props.basket}
                        setBasket={props.setBasket}
                        updateQuantity={props.updateQuantity} />
    </main >
}
export default ProductsPage
