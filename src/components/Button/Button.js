import React, { Component } from 'react';
import style from './Button.module.css';

export class Button extends Component {
  render() {
    const { text, type, disabled, onClick, onBlur } = this.props;
    return (
      <button
        className={style.btn}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onBlur={onBlur}
      >
        {text}
      </button>
    );
  }
}

export default Button;
