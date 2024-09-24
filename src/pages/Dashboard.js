import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, Typography } from 'antd';

const { Title } = Typography;

const Dashboard = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2}>Welcome, {user?.name || 'Guest'}</Title>
                <Button type="primary" onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Dashboard;
