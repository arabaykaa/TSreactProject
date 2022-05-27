import React from "react";
import { Link } from "react-router-dom";
import c from "./Registration.module.css";
import { useForm } from "react-hook-form";

export default function Registration() {
  return (
    <div className={c.mainContainer}>
      <div className={c.borderBG}>
        <form className={c.container}>
          <h4 className={c.loginTxt}>Registration</h4>
          <div className={c.nameContainer}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={c.inputnames}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              className={c.inputnames}
            />
          </div>
          <label className={c.labeltxt}>Email</label>
          <input type="email" name="email" className={c.inputs} />
          <label className={c.labeltxt}>Password</label>
          <input type="password" name="password" className={c.inputs} />
          <div className={c.btnContainer}>
            {/* <Link to="/LogInForm" className={c.backLink}>
              Back
            </Link> */}
            <a href="/">Back</a>
            <input type="submit" value="Submit" className={c.submitBtn} />
          </div>
        </form>
      </div>
    </div>
  );
}
