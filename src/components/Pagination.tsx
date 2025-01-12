import {useSelector} from "react-redux";
import {ProductsStateType} from "../store/types/productTypes.ts";

function Pagination() {
    const { products, filter } = useSelector((state: {products: ProductsStateType }) => state.products);

    const totalPages = Math.ceil(products.length / filter.itemsPerPage);
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return(
        <div className="pagination">
            <a
                className='pagination_link'
                href="#"
                onClick={(e) => {e.preventDefault();}}
            >
                «
            </a>
            {pages.map((page) => (
                    <a key={page} className={`pagination_link ${page === filter.currentPage ? 'pagination_link-active' : ''}`} href="#">{page}</a>
                ))}
            <a
                className='pagination_link'
                href="#"
                onClick={(e) => {e.preventDefault();}}
            >
                »
            </a>
        </div>
    )
}

export  default Pagination;