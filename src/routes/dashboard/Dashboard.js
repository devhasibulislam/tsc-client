import React from 'react';
import CustomLink from '../CustomLink';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
    const [role, setRole] = useState('student');
    const handleGettingRole = (event) => {
        setRole(event.target.value);
    };

    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start pl-4 pt-4">
                    {/* page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side shadow px-4 mt-[.05rem]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
                        {/* select items */}
                        <select
                            className="select select-bordered select-sm w-full max-w-xs mb-4"
                            onChange={handleGettingRole}
                        >
                            <option defaultValue={'student'} >Student</option>
                            <option value={'teacher'}>Teacher</option>
                        </select>
                        {/* sidebar items here */}
                        {
                            role !== 'teacher'
                                ?
                                <>
                                    <li><CustomLink to={'/'}>View Student</CustomLink></li>
                                    <li><CustomLink to={'/addStudent'}>Add Student</CustomLink></li>
                                    <li><CustomLink to={'/todo'}>Todo</CustomLink></li>
                                </>
                                :
                                <>
                                    <li><CustomLink to={'/viewTeacher'}>View Teacher</CustomLink></li>
                                    <li><CustomLink to={'/addTeacher'}>Add Teacher</CustomLink></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;