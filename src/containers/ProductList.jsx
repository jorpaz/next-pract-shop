import React from 'react';
import ProductItem from '../components/ProductItem';

//? Hooks
import useGetProducts from '../hooks/useGetProducts';

//? Styles
import '@styles/ProductList.scss';
import Header from '../components/Header';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<>
			<Header />
			<section className="main-container">
				<div className="ProductList">
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			</section>
		</>
	);
}

export default ProductList;
