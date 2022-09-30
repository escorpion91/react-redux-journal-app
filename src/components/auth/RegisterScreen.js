import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register Screen</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm"
          name="password2"
          className="auth__input"
        />
        <button className="btn btn_primary btn-block mb-5" type="submit">
          Register
        </button>
        <hr />
        <Link className="link" to="/auth/login">
          Already registered
        </Link>
      </form>
    </>
  );
};
