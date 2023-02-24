import style from './catalogProductModal.module.css'

const CatalogProductModal = () => {
  console.log(item)
  return (
    <div className="modal modal_product">
    <div className="modal__main mproduct">
      <div className="mproduct__container">
        <h2 className="mproduct__title">Мясная бомба</h2>

        <div className="mproduct__content">
          <img src="img/photo-5.jpg" alt="Мясная бомба" className="mproduct__image" />

          <p className="mproduct__description">Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>

          <div className="mproduct__ingredients ingredients">
            <h3 className="ingredients__title">Состав:</h3>

            <ul className="ingredients__list">
              <li className="ingredients__item">Пшеничная булочка</li>
              <li className="ingredients__item">Котлета из говядины</li>
              <li className="ingredients__item">Красный лук</li>
              <li className="ingredients__item">Листья салата</li>
              <li className="ingredients__item">Соус сорчичный</li>
            </ul>

            <p className="ingredients__calories">520г, ккал 430</p>
          </div>

        </div>
        <div className="mproduct__footer">
          <div className="mproduct__add">
            <button className="mproduct__btn">Добавить</button>

            <div className="mproduct__count count">
              <button className="count__minus">-</button>
              <p className="count__amount">1</p>
              <button className="count__plus">+</button>
            </div>
          </div>

          <p className="mproduct__price">239
            <span className="currency">₽</span>
          </p>
        </div>

      </div>

      <button className="modal__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
          <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default CatalogProductModal;