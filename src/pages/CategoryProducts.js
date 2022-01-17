import { useParams } from 'react-router-dom'
import Items from "./Items";

function CategoryProducts (props) {
    const params = useParams()

    let categoryProducts = props.products.filter(product => product.categoryId === Number(params.id))

    // fetch products for this category

    return <section className="products-container main-wrapper">
        <ul className="products-container__list">
            {categoryProducts.map(product => <Items key={product.id}
                                                    product={product}
            />)}
        </ul>
    </section>
}

export default CategoryProducts
