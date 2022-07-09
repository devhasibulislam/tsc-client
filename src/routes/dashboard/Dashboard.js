import React from 'react';
import CustomLink from '../CustomLink';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* page content here */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* sidebar items here */}
                        <div className='mb-3'><CustomLink to={'/dashboard'}>Add Student</CustomLink></div>
                        <CustomLink to={'/dashboard/viewStudent'}>View Student</CustomLink>
                        <CustomLink to={'/dashboard/addTeacher'}>Add Teacher</CustomLink>
                        <CustomLink to={'/dashboard/viewTeacher'}>View Teacher</CustomLink>
                        <CustomLink to={'/dashboard/todo'}>Todo</CustomLink>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;