import Items from "./Items";

function Products (props) {
    // fetch products
    return (
        <main>
    <section className="products-container main-wrapper">
        <ul className="products-container__list">
        {props.products.map(product =>
                <Items
                    product={product}
                    key={product.id}
                />)}


    {/* <!-- More items here --> */}
</ul>
</section>
</main>
    )
}

export default Products
