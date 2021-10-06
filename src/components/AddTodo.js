import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form";

const AddTodo = (props) => {
  const { submitHandler } = props;
  let history = useHistory();

  const onSubmit = (event, textValue) => {
    event.preventDefault();
    submitHandler(textValue);
    history.push("/");
  }

  return (
    <>
      <Form
        inputType="text"
        onSubmit={onSubmit}
        placeholderValue="Enter Your Todo"
        buttonTitle="Add Todo"
        buttonType="submit"
        cardHeader="Add a Todo"
      />
    </>
  )
}

export default AddTodo;
