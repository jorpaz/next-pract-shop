import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';

//?Styles
import '@styles/MyOrder.scss';
import styles from '@styles/MyOrder.module.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

	return (
      <aside className={styles.MyOrder}>
        <div className="title-container">
          <img src={arrow} alt="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content seccion-scroll">
          {state.cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={index} />
          ))}
          <div className="order-summary-container">
            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
              PAGAR
            </button>
          </div>
        </div>
      </aside>
	);
}

export default MyOrder;
