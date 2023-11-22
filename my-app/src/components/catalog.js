import React from 'react';

const Catalog = () => {
    return (
      <div className="catalog">
      <div className="catalog__row">
        <div className="catalog__item-container">
          <div className="catalog__item">
            <div className="canalog__item-image">
              <img src="./i.webp" alt="" />
            </div>
            <a href="" className="catalog-item__title">Porsche Cayen</a>
            <div className="catalog-item__price">10 000</div>
            <button className="catalog-item__button">В корзину</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Catalog;