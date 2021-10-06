import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import Form from './Form';

const EditTodo = (props) => {

  const { editHandler } = props;
  let { id } = useParams();
  let history = useHistory();

  const onSubmit = (event, textValue) => {
    event.preventDefault();
    editHandler({ key: +id, text: textValue })
    history.push("/");
  }

  return (
    <>
      <Form
        inputType="text"
        onSubmit={onSubmit}
        placeholderValue="Edit Your Todo"
        buttonTitle="Edit Todo"
        buttonType="submit"
        cardHeader="Edit a Todo"
      />
    </>
  )
}

export default EditTodo;
