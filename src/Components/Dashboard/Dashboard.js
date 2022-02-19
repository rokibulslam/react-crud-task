import React from 'react';
import AddUser from './AddUser/AddUser';
import AllUsers from './AllUsers/AllUsers';

const Dashboard = () => {
    return (
        <div>
            <AddUser></AddUser>
            <AllUsers></AllUsers>
        </div>
    );
};

export default Dashboard;