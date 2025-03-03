import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, to, className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className='buttoncontainer'>
      <button className={`button ${className}`} type='button' onClick={() => navigate(to)}>
        {text}
      </button>
    </div>
  );
};

export default Button;