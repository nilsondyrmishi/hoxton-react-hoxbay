import ItemOfBucket from "./ItemOfBucket";
function Basket (props) {

    // fetch basket


    function Total() {
        let total = 0;
        for (const bucketItem of props.basket) {
            total += bucketItem.quantity * bucketItem.price;
        }
        return total.toFixed(2)
    }
    return (
        <section className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {props.basket.map(basketItem =>
                        <ItemOfBucket
                            key={basketItem.id}
                            basketItem={basketItem}
                            basket={props.basket}
                            setBasket={props.setBasket}
                            updateQuantity={props.updateQuantity}
                        />
                )}

                {/* <!--  --> */}
            </ul>

            <h3>Your total: £{Total()}</h3>
        </section>
    )
}

export default Basket
