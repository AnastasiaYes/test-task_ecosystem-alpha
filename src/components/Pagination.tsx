import {useSelector} from "react-redux";
import {ProductsStateType} from "../store/types/productTypes.ts";
import {updateFilter} from "../store/actions/productActions.ts";
import {store} from "../store/store.ts";

function Pagination(props: {productsTotal: number}) {
    const { filter } = useSelector((state: {products: ProductsStateType }) => state.products);

    const totalPages = Math.ceil(props.productsTotal / filter.itemsPerPage);
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const goToPage = (e: React.MouseEvent<HTMLAnchorElement>, page: number) => {
        e.preventDefault();
        store.dispatch(updateFilter(
            filter.liked,
            filter.search,
            page,
            filter.itemsPerPage,
        ));
    }

    const goToFirstPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        store.dispatch(
            updateFilter(
                filter.liked,
                filter.search,
                1,
                filter.itemsPerPage,
        )
    )
    };

    const goToLastPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        store.dispatch(
        updateFilter(
            filter.liked,
            filter.search,
            totalPages,
            filter.itemsPerPage,
        )
        )
    };

    return(
        <div className="pagination">
            <a
                className='pagination_link'
                href="#"
                onClick={goToFirstPage}
            >
                «
            </a>
            {pages.map((page) => (
                    <a
                        key={page}
                        className={`pagination_link ${page === filter.currentPage ? 'pagination_link-active' : ''}`}
                        href="#"
                        onClick={(e) => goToPage(e, page)}
                    >
                        {page}
                    </a>
                ))}
            <a
                className='pagination_link'
                href="#"
                onClick={goToLastPage}
            >
                »
            </a>
        </div>
    )
}

export  default Pagination;