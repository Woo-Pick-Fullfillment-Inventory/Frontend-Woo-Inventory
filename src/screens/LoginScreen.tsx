import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import { Text } from 'react-native-paper';
import { RootState } from '../redux/store';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    const handleLogin = () => {
        const userData = { /* data from form later */ };
        dispatch(login(userData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Text>This is login page</Text>
    );
};

export default LoginScreen;
