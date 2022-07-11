import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddTeacher = () => {
    const [departments, setDepartments] = useState([]);
    const [departmentName, setDepartmentName] = useState('');
    const [collapseDepartment, setCollapseDepartment] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        const getDepartments = async () => {
            const request = await fetch('http://localhost:5000/departments');
            const response = await request.json();
            setDepartments(response);
        };
        getDepartments();
    }, []);

    const getSearchedDepartments = (departmentName !== '') && departments.filter(department => department?.department.toLowerCase().includes(departmentName?.toLowerCase()));

    const onSubmit = async (data, e) => {
        const fullName = data.fullName;
        const dob = data.dob;
        const email = data.email;
        const department = data.dept;
        const graduation = data.graduation;
        const age = new Date().getFullYear() - parseInt(dob.split('-')[0]);
        const teacherInfo = { name: fullName, dob, age, email, department, graduation, role: 'teacher' };

        const url = `http://localhost:5000/teacher`;
        const addTeacher = async () => {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(teacherInfo)
            });
            const response = await request.json();
            if (response.acknowledged) {
                e.target.reset();
                setDepartmentName('');
                toast.success(`New teacher, ${fullName} added.`);
            }
        };
        addTeacher();
    };

    return (
        <section className='w-2/3'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>Add new teacher</h1>
                    <div className='flex flex-col p-8 rounded-md shadow-sm hover:shadow duration-500'>
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="fullName" className='whitespace-nowrap'>Full Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("fullName", { required: true })}
                                className='border py-2 px-3 w-2/3 input-bordered input'
                            />
                            {errors.fullName && <p className='text-[#7f0e0e]'>Full name is required</p>}
                        </div>

                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="dob" className='whitespace-nowrap'>Date of birth</label>
                            <input
                                type="date"
                                {...register("dob", { required: true })}
                                className='border py-2 px-3 w-2/3 input-bordered input'
                            />
                            {errors.dob && <p className='text-[#7f0e0e]'>Date of birth is required</p>}
                        </div>

                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="email" className='whitespace-nowrap'>Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                {...register("email", { required: true })}
                                className='border py-2 px-3 w-2/3 input-bordered input'
                            />
                            {errors.email && <p className='text-[#7f0e0e]'>Email is required</p>}
                        </div>

                        {/* department issue */}
                        <div className='mb-3 flex justify-between items-center relative'>
                            <label htmlFor="dept" className='whitespace-nowrap'>Department name</label>
                            <input
                                type="text"
                                placeholder="Department"
                                {...register("dept", { required: true })}
                                className={`border py-2 px-3 w-2/3 input-bordered input ${errors.dept && 'border-red-400'}`}
                                value={departmentName}
                                onChange={(e) => {
                                    setCollapseDepartment(true);
                                    setDepartmentName(e.target.value);
                                }}
                            />
                            {/* {errors.dept && <p className='text-[#7f0e0e]'>Department name is required</p>} */}
                            {
                                (collapseDepartment && (departmentName !== '')) &&
                                <div className='absolute top-full right-0 bg-white w-2/3 p-2 shadow-lg rounded'>
                                    {
                                        getSearchedDepartments?.map(department => <p
                                            key={department._id}
                                            className='px-2 mb-2 hover:font-semibold cursor-pointer'
                                            onClick={() => {
                                                setDepartmentName(department?.department);
                                                setCollapseDepartment(false);
                                            }}
                                        >
                                            {department?.department}
                                        </p>)
                                    }
                                </div>
                            }
                        </div>

                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="graduation" className='whitespace-nowrap'>Graduation year</label>
                            <input
                                type="number"
                                placeholder="Graduation"
                                {...register("graduation", { required: true })}
                                className='border py-2 px-3 w-2/3 input-bordered input'
                            />
                            {errors.graduation && <p className='text-[#7f0e0e]'>Graduation year is required</p>}
                        </div>

                        <div className='flex justify-end mt-4'>
                            <input
                                type="submit"
                                value={'Save'}
                                className='border bg-[#7f0e0e] text-white rounded-3xl hover:bg-white hover:border-[#7f0e0e] hover:text-[#7f0e0e] duration-500 py-2 w-1/5 cursor-pointer'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTeacher;
