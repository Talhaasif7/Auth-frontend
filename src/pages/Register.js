import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { Title } = Typography;

const Register = () => {
    const { register } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const onFinish = async (values) => {
        setLoading(true);
        await register(values.email, values.password, values.name);
        setLoading(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Register</Title>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button type="link" onClick={() => navigate('/')}>
                        Already have an account? Log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;
