import React, { useState } from "react";
import './form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="form-wrap">
        <div className="form-wrap-left">
          <p>제목</p>
          <input type="text"></input>
          <p>내용</p>
          <input type="text"></input>
        </div>
        <div>
          <button>추가하기</button>
        </div>
      </div>
    </div>
  )
}

export default Form;