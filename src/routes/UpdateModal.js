import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const UpdateModal = ({ user, refetch, state }) => {
    const [userName, setUserName] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [graduation, setGraduation] = useState('');
    const [school, setSchool] = useState('');
    const [userClass, setUserClass] = useState('');
    const [division, setDivision] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        setUserName(user?.name);
        setDOB(user?.dob);
        setEmail(user?.email);
        setDepartment(user?.department);
        setGraduation(user?.graduation);
        setSchool(user?.school);
        setUserClass(user?.class);
        setDivision(user?.division);
        setStatus(user?.status);
    }, [user]);

    const {
        register,
        formState: { errors }
    } = useForm();

    const handleUpdateUser = () => {
        const teacherInfo = { name: userName, dob, email, department, graduation };
        const studentInfo = { name: userName, dob, school, class: userClass, division, status };
        const info = user.role === 'teacher' ? teacherInfo : studentInfo;

        const updateUser = async () => {
            const request = await fetch(`http://localhost:5000/${user?.role === 'student' ? 'student' : 'teacher'}/${user?._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(info)
            });
            const response = await request.json();
            if (response.acknowledged) {
                toast.success(`updating ${user?.name}'s information done.`);
                refetch();
            }
        };
        updateUser();

        console.log(info);
    };

    return (
        <section>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Information of <span className='border-b-2 border-b-black pb-1'>{user.role}</span> named <span className='border-b-2 border-b-black pb-1 text-[#861414]'>{user.name}</span></h3>
                    <div>
                        <form className='mt-8'>
                            <div className='flex flex-col'>
                                {/* name */}
                                <div className='mb-3'>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.name && 'border-red-400'}`}
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>

                                {/* dob */}
                                <div className='mb-3'>
                                    <input
                                        type="date"
                                        {...register("dob", { required: true })}
                                        className={`border w-full py-2 px-3 rounded ${errors.dob && 'border-red-400'}`}
                                        value={dob}
                                        onChange={(event) => setDOB(event.target.value)}
                                        disabled // wanna update just remove `disabled` attribute
                                    />
                                </div>

                                {
                                    user?.role === 'teacher' &&
                                    <>
                                        {/* email */}
                                        <div className='mb-3'>
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.email && 'border-red-400'}`}
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>

                                        {/* department */}
                                        <div className='mb-3'>
                                            <input
                                                type="text"
                                                {...register("department", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.department && 'border-red-400'}`}
                                                value={department}
                                                onChange={(event) => setDepartment(event.target.value)}
                                            />
                                        </div>

                                        {/* graduation */}
                                        <div className='mb-3'>
                                            <input
                                                type="number"
                                                {...register("graduation", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.graduation && 'border-red-400'}`}
                                                value={graduation}
                                                onChange={(event) => setGraduation(event.target.value)}
                                            />
                                        </div>
                                    </>
                                }

                                {
                                    user?.role === 'student' &&
                                    <>
                                        {/* school */}
                                        <div className='mb-3'>
                                            <input
                                                type="text"
                                                {...register("school", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.school && 'border-red-400'}`}
                                                value={school}
                                                onChange={(event) => setSchool(event.target.value)}
                                            />
                                        </div>

                                        {/* class */}
                                        <div className='mb-3'>
                                            <input
                                                type="text"
                                                {...register("class", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.class && 'border-red-400'}`}
                                                value={userClass}
                                                onChange={(event) => setUserClass(event.target.value)}
                                            />
                                        </div>

                                        {/* division */}
                                        <div className='mb-3'>
                                            <input
                                                type="text"
                                                {...register("division", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.division && 'border-red-400'}`}
                                                value={division}
                                                onChange={(event) => setDivision(event.target.value)}
                                            />
                                        </div>

                                        {/* status */}
                                        <div className='mb-3'>
                                            <input
                                                type="text"
                                                {...register("status", { required: true })}
                                                className={`border w-full py-2 px-3 rounded ${errors.status && 'border-red-400'}`}
                                                value={status}
                                                onChange={(event) => setStatus(event.target.value)}
                                                disabled // wanna update just remove `disabled` attribute
                                            />
                                        </div>
                                    </>
                                }

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