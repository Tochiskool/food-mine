import React from "react";
import { useRouteError } from "react-router-dom";
import "./style.css";
const ErrorHanling = () => {
  const error = useRouteError();
  return (
    <header className='errorbody'>
      <h1>Oops a 404 Error Occured</h1>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </header>
  );
};

export default ErrorHanling;
