import React from "react";

const Form = props => (
  <form onSubmit={props.param}>
      <input type="text" name="search" placeholder="Name competition" />
      <button className="search">Вывод соревнования</button>
  </form>
);

export default Form;