import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const UpdateModal = ({ user, refetch }) => {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [graduation, setGraduation] = useState('');
    const {
        register,
        formState: { errors }
    } = useForm();

    // console.log(name, dob, email, department, graduation);

    const handleUpdateUser = () => {
        // const updateUser = async () => {
        //     const request = await fetch(`http://localhost:5000/teacher/${user?._id}`, {
        //         method: "POST",
        //         headers:{
        //             "content-type": "application/json"
        //         },
        //         body: user
        //     });
        //     const response = await request.json();
        //     console.log(response);
        //     refetch();
        // };
        // updateUser();

        const teacherInfo = { name, dob, email, department, graduation };
        console.log(teacherInfo);
    };

    return (
        <section>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Information of <span className='border-b-2 border-b-black pb-1'>{user.role}</span> named <span className='border-b-2 border-b-black pb-1'>{user.name}</span></h3>
                    <div>
                        <form className='mt-8'>
                            <div className='flex flex-col'>
                                {/* name */}
                                <div className='mb-3'>
                                    <input
                                        value={user?.name}
                                        type="text"
                                        onChange={(event) => setName(event.target.value)}
                                        {...register("name", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.name && 'border-red-400'}`}
                                    />
                                </div>

                                {/* dob */}
                                <div className='mb-3'>
                                    <input
                                        value={user?.dob}
                                        type="date"
                                        onChange={(event) => setDOB(event.target.value)}
                                        {...register("dob", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.dob && 'border-red-400'}`}
                                    />
                                </div>

                                {/* email */}
                                <div className='mb-3'>
                                    <input
                                        value={user?.email}
                                        type="email"
                                        onChange={(event) => setEmail(event.target.value)}
                                        {...register("email", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.email && 'border-red-400'}`}
                                    />
                                </div>

                                {/* department */}
                                <div className='mb-3'>
                                    <input
                                        value={user?.department}
                                        type="text"
                                        onChange={(event) => setDepartment(event.target.value)}
                                        {...register("department", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.department && 'border-red-400'}`}
                                    />
                                </div>

                                {/* graduation */}
                                <div className='mb-3'>
                                    <input
                                        value={user?.graduation}
                                        type="number"
                                        onChange={(event) => setGraduation(event.target.value)}
                                        {...register("graduation", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.graduation && 'border-red-400'}`}
                                    />
                                </div>

                                <div class="modal-action">
                                    <label for="update-modal" class="btn btn-success text-white" onClick={handleUpdateUser}>Update</label>
                                    <label for="update-modal" class="btn btn-error text-white">Cancel</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateModal;