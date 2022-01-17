import { Link } from 'react-router-dom'

function SingleCategory (props) {

    return (
        <li className={`category_${props.category.id}`}>

            <Link to={`/categories/${props.category.id}`}>
                {props.category.name}</Link>
        </li>
    )
}

export default SingleCategory
