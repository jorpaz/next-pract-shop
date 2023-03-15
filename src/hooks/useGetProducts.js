import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() { // Se define una función async
            try {
                const response = await axios(API);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts(); // Se llama a la función async
    }, [API]);

    return products;
};

export default useGetProducts;
