import React from "react";
import ReactDOM from "react-dom/client";

export default function Delete() {
  // Handler function for form submission
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1> Signup form </h1>
      <form onSubmit={handleSubmitForm} method="POST">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@copy.com"
        />
        <br />
        <label htmlFor="passw"> Password: </label>
        <input id="passw" type="password" name="password" />
        <br />
        <button> Submit </button>
        <br />
        <button type="checkbox" name="igredient-type" value={type1}>
          Type 1
        </button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Delete />);
