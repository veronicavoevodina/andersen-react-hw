import React, { Component } from 'react';
import style from './Button.module.css';

export class Button extends Component {
  render() {
    const { text, type, disabled, onClick } = this.props;
    return (
      <button
        className={style.btn}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
