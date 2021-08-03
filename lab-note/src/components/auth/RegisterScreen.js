import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import useForm from "../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWhitEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Angelica",
    email: "cerezo319@hotmail.com",
    password: "123456",
  });

  const { name, email, password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWhitEmailPasswordName(name, email, password));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("nombre Requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email no valido"));
      return false;
    } else if (password.length <= 5) {
      dispatch(setError("constraseña minimo de 6 caracteres"));
      return false;
    }
    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && (<div className="auth__alert-error">{msgError}</div>)}
        <input
          type="name"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already Registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
