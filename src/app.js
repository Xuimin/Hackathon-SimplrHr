import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import Leave from './modules/Leave';
import Onboarding from './modules/Onboarding';
import ELeave from './modules/Leave/e_index';
import Apply from './modules/Leave/apply';
import AddLeaveType from './modules/Leave/add_leave_type';
import AddTask from './modules/Onboarding/add_task';
import Profile from './modules/Profile';
import Performance from './modules/Performance';
import ViewEmployee from './modules/Profile/view_employees';

const App = () => {
    return (
    <MantineProvider>
        <NotificationsProvider position='top-right' limit={3}>
            <ModalsProvider>
                <BrowserRouter>
                    <Routes>
                        {
                            localStorage.getItem('name') == null ?
                            <>
                                <Route exact path="/login" element={<LoginPage />} />
                                <Route exact path="/signup" element={<SignUpPage />} />
                            </>
                            :
                            <>
                            </>
                        }

                        <Route exact path="/employer/leave" element={<ELeave />} />
                        <Route exact path="/employer/profile" element={<ViewEmployee />} />
                        <Route exact path="/leave" element={<Leave />} />
                        <Route exact path="/leave/apply" element={<Apply />} />
                        <Route exact path="/leave/add" element={<AddLeaveType />} />
                        <Route exact path="/onboarding" element={<Onboarding />} />
                        <Route exact path="/onboarding/add" element={<AddTask />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path="/performance" element={<Performance />} />
                    </Routes>
                </BrowserRouter>
            </ModalsProvider>
        </NotificationsProvider>
    </MantineProvider>
    );
}

export default App;
