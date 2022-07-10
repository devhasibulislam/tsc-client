import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddStudent = () => {
    const [status, setStatus] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const fullName = data.fullName;
        const dob = data.dob;
        const school = data.school;
        const className = data.className;
        const division = data.division;
        const studentInfo = { name: fullName, dob, school, class: className, division, status };

        console.log(studentInfo);
    };

    return (
        <section className='w-2/3'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>Add new student</h1>
                    <div className='flex flex-col p-8 rounded-md shadow-sm hover:shadow duration-500'>
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="fullName" className='whitespace-nowrap'>Full Name</label>
                            <input
                                type="text"
                                placeholder="Full name"
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
                            <label htmlFor="school" className='whitespace-nowrap'>School</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end">
                                    <input
                                        placeholder="School"
                                        type="text"
                                        {...register("school", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        style={{
                                            width: "calc(66.666667% - 14.859px)"
                                        }}
                                    />
                                    {errors.school && <p className='text-[#7f0e0e]'>School name is required</p>}
                                    <span><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                </label>
                            </div>
                        </div>

                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="className" className='whitespace-nowrap'>Class</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end">
                                    <input
                                        placeholder="Class"
                                        type="text"
                                        {...register("className", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        style={{
                                            width: "calc(66.666667% - 21.859px)"
                                        }}
                                    />
                                    {errors.className && <p className='text-[#7f0e0e]'>Class mention is required</p>}
                                    <span><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                </label>
                            </div>
                        </div>

                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="division" className='whitespace-nowrap'>Division</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end">
                                    <input
                                        placeholder="Division"
                                        type="text"
                                        {...register("division", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        style={{
                                            width: "calc(66.666667% - 9.859px)"
                                        }}
                                    />
                                    {errors.division && <p className='text-[#7f0e0e]'>Division name is required</p>}
                                    <span><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                </label>
                            </div>
                        </div>

                        <div className='my-3 flex justify-between items-center'>
                            <label htmlFor="status" className='whitespace-nowrap'>Status</label>
                            <div className='form-control w-full flex justify-center flex-row gap-x-4'>
                                <div className='flex items-center'>
                                    <input type="radio" name="status" className="radio" value={'active'} onChange={(e) => setStatus(e.target.value)} />
                                    <span className='ml-2'>Active</span>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name="status" className="radio" value={'invoice'} onChange={(e) => setStatus(e.target.value)} />
                                    <span className='ml-2'>Invoice</span>
                                </div>
                            </div>
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

export default AddStudent;
