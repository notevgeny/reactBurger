import { useState } from 'react';
import style from './count.module.css';

export const Count = (props) => {

  const [count, setCount] = useState(props.count);

  const plusOne = () => {  
    setCount(count + 1);
  }

  const minusOne = () => {
    if (count > 1){
      setCount(count - 1);
    }
  }

  return (
    <div className={style.count}>
      <button 
        className={style.minus}
        onClick={minusOne}
        disabled={count === 1}
      >-</button>
      <p className={style.amount}>{count}</p>
      <button 
        className={style.plus}
        onClick={plusOne}
      >+</button>
    </div>
  );
};