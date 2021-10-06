import React, { useState } from 'react'

const Form = (props) => {
  const {
    onSubmit,
    buttonTitle,
    placeholderValue,
    inputType
  } = props;

  const [textValue, setTextValue] = useState("");
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Todo</div>
      <div className="card-body">
        <form onSubmit={(event) => onSubmit(event, textValue)}>
          <div className="form-group">
            <input
              type={inputType}
              className="form-control"
              placeholder={placeholderValue}
              value={textValue}
              onChange={(event) => setTextValue(event.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form;
