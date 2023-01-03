import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../../redux/slicers/auth";

import "./Login.scss";

function Login({ active, setActive }) {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "stitch@test.com",
      password: "ohana",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert("Failed to login");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div
        className={active ? "modal-active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          class="auth-body d-md-flex align-items-center justify-content-between"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="box-1 mt-md-0 mt-5">
            <h5 class="logo sign-in-logo">REVIEW HUNTER</h5>

            <img src="/img/login-img.jpg" alt="auth page" />
          </div>
          <div class=" box-2 d-flex flex-column h-100">
            <div>
              <p class="h-1">Log in</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="d-flex flex-column align-items-center">
                  <div class="form-group">
                    <label for="LoginFormEmail"></label>
                    <input
                      type="email"
                      class="form-control"
                      id="LoginFormEmail"
                      placeholder="Email"
                      error={Boolean(errors.email?.message)}
                      style={{
                        borderColor: errors.email && "red",
                      }}
                      {...register("email", { required: "Enter your email" })}
                    />
                  </div>

                  <div class="form-group">
                    <label for="LoginFormPassword"></label>
                    <input
                      type="password"
                      class="form-control"
                      id="LoginFormPassword"
                      placeholder="Password"
                      error={Boolean(errors.password?.message)}
                      style={{
                        borderColor: errors.password && "red",
                      }}
                      {...register("password", {
                        required: "Enter your password",
                      })}
                    />
                  </div>

                  <div>
                    <button
                      disabled={!isValid}
                      type="submit"
                      class="btn btn-dark mt-5"
                    >
                      Log in<span class="fas fa-chevron-right"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <span class="fas fa-times" onClick={() => setActive(false)}></span>
        </div>
      </div>
    </>
  );
}

export default Login;
