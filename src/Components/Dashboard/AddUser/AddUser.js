import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

const AddUser = () => {
  const [user, setUser] = useState();

  const handleOnBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUserData = { ...user };
    newUserData[name] = value;
    setUser(newUserData);
    console.log(user);
    e.preventDefault();
  };

  const handleOnSubmit = () => {
    axios.post("http://localhost:3003/users", user);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "User Added",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Form onSubmit={handleOnSubmit} className="w-50 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="name"
            type="text"
            placeholder="User Name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="email"
            type="text"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="age"
            type="text"
            placeholder="Age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone No</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="phone"
            type="text"
            placeholder="Phone"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
