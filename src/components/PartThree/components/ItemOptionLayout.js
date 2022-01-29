import React from 'react';

import SelectProduct from 'components/PartThree/components/SelectContainer/SelectProduct';
import 'utils/styles/SelectProduct.scss';

const ItemOptionLayout = () => {
  const [optionInven, setOptionInven] = useState([]);

  const addOptionInven = () => {
    setOptionInven(optionInven.concat(<SelectProduct />));
  };
  return (
    <section className="item-layout">
      <div className="item-set-container">
        <div className="image-container">
          <form method="POST">
            <label className="input-image-btn" htmlFor="input-image">

              + 이미지 첨부
            </label>
            <input type='file' id='input-image' accept='image/*' alt='' />
          </form>
        </div>
        <ul>
          <SelectProduct />
          {optionInven.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <div>
          <footer>
            <button className="add-option-btn" onClick={addOptionInven}>
              &#43;&#32; 옵션 추가
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ItemOptionLayout;
