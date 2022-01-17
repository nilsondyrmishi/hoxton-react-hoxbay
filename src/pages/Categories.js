
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import SingleCategory from "./SingleCategory";

function Categories() {
    const [categories, setCategories] = useState([]);

    function getCategoryFromServer() {
        fetch(`http://localhost:3000/categories`)
            .then(res => res.json())
            .then(SingleCategory => setCategories(SingleCategory))
    }
    useEffect(getCategoryFromServer, []);
    return <main>
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">

                {categories.map(category =>
                    <SingleCategory
                    key={category.id}
                    category={category} />)}


            </ul>
        </section>
    </main>
}
export default Categories
