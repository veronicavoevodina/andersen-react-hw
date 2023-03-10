import React, { Component } from 'react';
import style from './Form.module.css';

export class Textarea extends Component {
  render() {
    const { value, handleChange, rows, id, name, labelText, placeholder } =
      this.props;
    return (
      <div className={style.row}>
        <label htmlFor={id}>{labelText}</label>
        <textarea
          className={style.textarea}
          value={value}
          onChange={handleChange}
          maxLength={350}
          rows={rows}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Textarea;
