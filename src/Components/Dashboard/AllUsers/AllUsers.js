import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Spinner, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading]=useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3003/users")
          .then((res) => res.json())
            .then((data) => setUsers(data))
        .finally(()=>setIsLoading(false))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3003/users/${id}`)
            
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Deleted",
                  showConfirmButton: false,
                  timer: 2000,
                });
    }
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Manage User</th>
            </tr>
          </thead>
          {isLoading && (
            <div>
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </div>
          )}
          {users?.map((user) => (
            <tbody key={user.id}>
              <tr>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                <td>{user?.age}</td>
                <td>
                  <DropdownButton
                    size="sm"
                    variant="secondary"
                    title="Manage Order"
                  >
                    <Dropdown.Item href="#/action-1">
                      <NavLink
                        style={{
                          color: "white",
                          border: "0px",
                          backgroundColor: "green",
                          borderRadius: "3px",
                        }}
                        to={`/update/${user.id}`}
                      >
                        Update User
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-3">
                      <button
                        style={{
                          color: "white",
                          border: "0px",
                          backgroundColor: "red",
                          borderRadius: "3px",
                        }}
                        onClick={() => handleDelete(user.id)}
                      >
                        Reject Order
                      </button>
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default AllUsers;