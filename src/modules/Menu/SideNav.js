import React from 'react'
import { useNavigate } from 'react-router-dom';

let SideNav = () => {
    const navigate = useNavigate();

    return (
        <div class="wrapper">
            <div class="sidebar">
                <h2 className='my-5'>Simplr Hr</h2>
                <hr className='top' />
                { localStorage.getItem('name') != null ? (
                    <>
                        <ul className='my-auto'>
                            { localStorage.getItem('isAdmin') == 0 ?
                                <>
                                    <li><a onClick={() => navigate('/profile')}>Profile</a></li>
                                    <li><a onClick={() => navigate('/onboarding')}>Onboarding</a></li>
                                    <li><a onClick={() => navigate('/leave')}>Leave Management</a></li>
                                    <li className='mb'><a onClick={() => navigate('/performance')}>Performance Review</a></li>
                                </> :
                                <>
                                    <li><a onClick={() => navigate('/employer/profile')}>View Employees</a></li>
                                    <li><a onClick={() => navigate('/onboarding')}>Onboarding</a></li>
                                    <li><a onClick={() => navigate('/employer/leave')}>Leave Management</a></li>
                                    <li className='mb'><a onClick={() => navigate('/performance')}>Performance Review</a></li>
                                </>
                            }

                        </ul>
                        <hr className='top logout' />
                    </>
                ) : (
                    <>
                    </>
                )}
                <ul>
                    <li className='bottom'>
                        <a onClick={() => {
                            localStorage.clear();
                            navigate('/login');
                        }}>
                            Logout
                        </a>
                    </li>
                </ul> 
            </div>
        </div>
    );
}

export default SideNav;