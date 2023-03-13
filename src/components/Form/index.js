import React from 'react';
import FormRow from './FormRow';
import Button from '../Button';
import { formData, textareaData } from './formData';
import style from './Form.module.css';
import Textarea from './Textarea';

const initialState = {
  name: '',
  surname: '',
  date: '',
  phone: '',
  url: '',
  aboutMyself: '',
  technologies: '',
  projectDescription: '',
};
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }
  reset() {
    this.setState({ ...initialState });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({ ...initialState });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <h2 className={style.heading}>Создание анкеты</h2>
        {formData.map((input) => {
          const { type, name, id, labelText, placeholder } = input;
          return (
            <FormRow
              type={type}
              key={id}
              name={name}
              labelText={labelText}
              value={this.state[name]}
              handleChange={this.handleChange}
              placeholder={placeholder}
            />
          );
        })}
        {textareaData.map((el) => {
          const { name, id, textareaId, labelText, placeholder } = el;
          return (
            <Textarea
              key={id}
              value={this.state[name]}
              name={name}
              id={textareaId}
              labelText={labelText}
              rows={7}
              handleChange={this.handleChange}
              placeholder={placeholder}
            />
          );
        })}
        <div className={style.btns}>
          <Button type="submit" text="Отправить" />
          <Button type="button" text="Отменить" onClick={this.reset} />
        </div>
      </form>
    );
  }
}

export default Form;
