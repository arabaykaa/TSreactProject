import React from "react";
import { Link } from "react-router-dom";
import c from "./Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  ex: string;
  exRequired: string;
};

export default function LogIn() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(data);

  return (
    <>
      <div className={c.mainContainer}>
        <div className={c.borderBG}>
          <form className={c.container} onSubmit={handleSubmit(onSubmit)}>
            <h4 className={c.loginTxt}>Log in</h4>
            <label className={c.labeltxt}>Email</label>
            <input type="email" name="email" id="email" className={c.inputs} />
            <label className={c.labeltxt}>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={c.inputs}
            />
            <div className={c.btnContainer}>
              <Link to="/Registration" className={c.registrationLink}>
                Create account
              </Link>
              <input
                type="submit"
                value="Submit"
                className={c.submitBtn}
                disabled={!isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
