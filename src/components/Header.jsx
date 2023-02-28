import React, { useState, useContext } from "react";

//?Context
import AppContext from '@context/AppContext';

//??Containers
import MyOrder from '@containers/MyOrder';

//? Components
import Menu from "@components/Menu";

//?Styles
import styles from '@styles/Header.module.scss';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import usuarioLogo from "@icons/usuario.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <img src={menu} alt="menu" className={styles.menu} />
      <div className="navbar-left">
        <img src={logo} alt="logo" className={styles['nav-logo']} />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            <img src={usuarioLogo} alt="usuario" />
          </li>
          <li className={styles['navbar-shopping-cart']}
              onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      { toggle && <Menu /> }
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
