import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { UserLayout } from "../../components/layout/UserLayout";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import img from "../../assests/image3.jpg";
import { updateUserAction } from "../../action/userAction";
export const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userInfo);
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(user);
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnUpdate = () => {
    const obj = {
      _id: form._id,
      fName: form.fName,
      lName: form.lName,
      email: form.email,
      address: form.address,
    };
    dispatch(updateUserAction(obj));
  };
  return (
    <UserLayout>
      <Container
        sx={{
          minHeight: "65vh",
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
          flexDirection: {
            xs: "column",

            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            width: {},
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexGrow: 1,
            minHeight: "55vh",
          }}
        >
          <div
            className="image-container"
            style={{
              borderRadius: "50%",
              height: "250px",
              width: "250px",
            }}
          >
            <img
              src={img}
              style={{ objectFit: "cover", borderRadius: "50%" }}
              height={"100%"}
              width={"100%"}
            />
          </div>
          <div>
            <Button variant="contained" color="info">
              Add new photo
            </Button>
          </div>
          <div className="d-flex gap-2 flex-column gap-3">
            <span className="d-flex gap-4">
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                Name:
              </Typography>
              <Typography variant="info">
                {user.fName.toUpperCase()} {user.lName.toUpperCase()}
              </Typography>
            </span>
            <span className="d-flex gap-4">
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                Phone:
              </Typography>
              <Typography variant="info">{user.phone.toUpperCase()}</Typography>
            </span>
            <span className="d-flex gap-4">
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                Email:
              </Typography>
              <Typography variant="info">{user.email}</Typography>
            </span>
            <span className="d-flex gap-4">
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                Address:
              </Typography>
              <Typography variant="info">{user.address}</Typography>
            </span>
          </div>
        </Box>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            flexGrow: 5,
            minHeight: "55vh",
            py: 5,
            gap: 2,
            width: "100%",
          }}
        >
          <FormControl>
            <div className="d-flex gap-2 justify-content-between">
              <TextField
                name="fName"
                onChange={handleChange}
                label="First Name"
                value={form.fName}
                size="small"
                type="text"
                fullWidth
              />
              <TextField
                name="lName"
                onChange={handleChange}
                value={form.lName}
                label="Last Name"
                size="small"
                type="text"
                fullWidth
              />
            </div>
            <div className="d-flex gap-2 justify-content-between mt-3">
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                label="Phone"
                size="small"
                fullWidth
                type="phone"
              />
            </div>
            <div className="d-flex gap-2 justify-content-between mt-3">
              <TextField
                name="email"
                value={form.email}
                onChange={handleChange}
                label="Email"
                size="small"
                fullWidth
              />
            </div>
            <div className="d-flex gap-2 justify-content-between mt-3">
              <TextField
                name="address"
                value={form.address}
                onChange={handleChange}
                label="Address"
                size="small"
                fullWidth
              />
            </div>
            <div className="mt-2 text-center">
              <Button variant="contained" onClick={handleOnUpdate}>
                Update
              </Button>
            </div>
          </FormControl>
        </Box>
      </Container>
    </UserLayout>
  );
};
