import { useNavigate } from 'react-router-dom';
import React from 'react';

function EndButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/result');
  };

  return (
    <>
      <style>
        {`
          .end-button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }

          .end-button:hover {
            background-color: #45a049;
          }
        `}
      </style>

      <button className="end-button" onClick={handleClick}>
        End
      </button>
    </>
  );
}

export default EndButton;
