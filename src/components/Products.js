import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../app/slices/CartSlice';

function Products() {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setProducts(res.products));
    }, [])

    const dispatch = useDispatch();

    return (
        <>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Products</h6>
                {
                products.map((product) => {
                    return <div className="d-flex text-muted pt-3">
                        <img src={product.thumbnail} className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" role="img"/>

                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">{product.title}</strong>
                            {product.description}
                        </p>
                        <Button size='sm' onClick={() => dispatch(add(product))}>Add</Button>
                    </div>
                })
                }
            </div>
        </>
    )
}

export default Products