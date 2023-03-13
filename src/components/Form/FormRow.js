import React, { Component } from 'react';
import style from './Form.module.css';

export class FormRow extends Component {
  render() {
    const { name, type, value, labelText, handleChange, placeholder } =
      this.props;
    return (
      <div className={style.row}>
        <label htmlFor={name} className={style.label}>
          {labelText || name}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className={style.input}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default FormRow;
