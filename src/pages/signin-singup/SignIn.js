import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../action/userAction";
import { toast } from "react-toastify";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form?.email && form?.password) {
      const user = await dispatch(loginAction(form));
      if (user) {
        navigate("/");
      }

      return user;
    }
    toast.info("Email and Password Required");
  };
  return (
    <div>
      <Header />
      <main className="main ">
        <Container className="w-100  d-flex m-auto justify-content-center mt-5 align-items-center">
          <Form
            className="shadow rounded mt-3 p-3"
            onSubmit={handleOnSubmit}
            style={{ width: "350px" }}
          >
            <p className="form-title">Sign in to your account</p>
            <div className="mt-3">
              <TextField
                sx={{ m: 1, width: "35ch" }}
                name="email"
                type="email"
                variant="outlined"
                label="Email *"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleOnChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <div className="d-grid m-2">
              <Button type="submit">Sign in</Button>
            </div>

            <div className="d-flex gap-5 p-2 ">
              <p className="signup-link">
                No account?
                <Link to="/signup">Sign up</Link>
              </p>
              <p className="text-end">
                <Link to="/reset-password">Forgot Password?</Link>
              </p>
            </div>
          </Form>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
