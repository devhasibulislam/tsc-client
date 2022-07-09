import React from 'react';
import notifications from './notifications.json';

const Header = () => {
    return (
        <section className='py-4 shadow'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4 justify-between items-center'>
                    <div className="lg:hidden order-2">
                        <label for="my-drawer-2" className="drawer-button lg:hidden cursor-pointer">
                            <i className="fa fa-tachometer text-xl" aria-hidden="true"></i>
                        </label>
                    </div>
                    <div className='border-b-2 pb-1 px-2 rounded-full shadow'><h1 className='text-xl font-semibold order-1 px-2 py-1'>Teacher student center</h1></div>
                    <div className='flex items-center gap-x-4'>
                        <div className='lg:mt-0 md:mt-0 mt-4'>
                            <div className="dropdown dropdown-left">
                                <label tabindex="0" className="cursor-pointer relative">
                                    <span className=''><i className="fa fa-bell text-xl" aria-hidden="true" /></span>
                                    <span
                                        className='absolute bg-[#7f0e0e] text-white px-1 rounded text-[12px] shadow bottom-full right-full'
                                    >{notifications.length > 9 ? `09+` : `0${notifications.length}`}</span>
                                </label>
                                <ul tabindex="0" className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60 ${notifications.length > 4 && 'h-80 overflow-y-scroll'}`}>
                                    {
                                        notifications.map((notification, index) => <div
                                            key={index}
                                        >
                                            {
                                                notification.link !== false
                                                    ?
                                                    <li><a className='px-2' target={'_blank'} rel="noreferrer" href={notification.link}>{notification.description}</a></li>
                                                    :
                                                    <li className=''><p className='px-2 cursor-default'>{notification.description}</p></li>
                                            }
                                        </div>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div>
                                <img
                                    src="/logo192.png"
                                    alt="logo"
                                    className='h-8 w-8'
                                />
                            </div>
                            <div>
                                <div className="dropdown dropdown-left">
                                    <label tabindex="0" className="cursor-pointer">
                                        <span className='mr-1'>Hasibul Islam</span>
                                        <span className='ml-1'><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                    </label>
                                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a href='/'>Update profile</a></li>
                                        <li><a href='/'>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;