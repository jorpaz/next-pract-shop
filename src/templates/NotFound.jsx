import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <div id="clouds">
        <div className="cloud x1" />
        <div className="cloud x1_5" />
        <div className="cloud x2" />
        <div className="cloud x3" />
        <div className="cloud x4" />
        <div className="cloud x5" />
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">ESTA PAGINA</div>
        <div className="_2">NO FUE ENCONTRADA</div>
        <a className="btn" href="/">
          IR AL INICIO
        </a>
      </div>
    </div>
  );
};

export default NotFound;
