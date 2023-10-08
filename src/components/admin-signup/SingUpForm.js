import { Button, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { useState } from "react";
import { postUserAction } from "../../action/userAction";
import { CustomToggleButton } from "../Toggle/ToggleButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const SingUpForm = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");

  const [form, setForm] = useState();
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Sumit",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Mahat",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",
      placeholder: "04123456",
      type: "number",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "222 george st Sydeny",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: inputType,
      minLength: "6",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: inputType,
      minLength: "6",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== form.password)
      toast.warning("Password Does not Match");
    const isSuccess = await postUserAction(rest);
    if (isSuccess) navigate("/");
  };
  return (
    <div className="container w-80  d-flex m-auto justify-content-center">
      <Form
        className="m-5 p-5 border shadow-lg  w-60 rounded-4"
        onSubmit={handleOnSubmit}
      >
        <h1>
          {/* <BiSolidUserDetail /> */}
          Create New Account
        </h1>
        {inputs.map((item, index) => (
          <CustomeInput key={index} {...item} onChange={handleOnChange} />
        ))}
        <CustomToggleButton
          ToggleButton={"toggleButton"}
          inputType={inputType}
          setInputType={setInputType}
        />
        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};
