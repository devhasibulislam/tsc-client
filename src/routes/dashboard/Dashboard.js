import React from 'react';
import CustomLink from '../CustomLink';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start justify-start pl-4 pt-4">
                    {/* page content here */}
                    <Outlet />
                </div>
                <div class="drawer-side shadow px-4 mt-[.05rem]">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                        {/* sidebar items here */}
                        <div className='mb-3'>
                            <CustomLink to={'/dashboard'}>View Student</CustomLink>
                        </div>
                        <div className='mb-3'>
                            <CustomLink to={'/dashboard/addStudent'}>Add Student</CustomLink>
                        </div>
                        <div className='mb-3'>
                            <CustomLink to={'/dashboard/viewTeacher'}>View Teacher</CustomLink>
                        </div>
                        <div className='mb-3'>
                            <CustomLink to={'/dashboard/addTeacher'}>Add Teacher</CustomLink>
                        </div>
                        <div className=''>
                            <CustomLink to={'/dashboard/todo'}>Todo</CustomLink>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;