import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddStudent = () => {
    const [status, setStatus] = useState('');
    const [schools, setSchools] = useState([]);
    const [classes, setClasses] = useState([]);
    const [divisions, setDivisions] = useState([]);
    const [collapseSchool, setCollapseSchool] = useState(false);
    const [collapseClass, setCollapseClass] = useState(false);
    const [collapseDivision, setCollapseDivision] = useState(false);
    const [schoolName, setSchoolName] = useState('');
    const [className, setClassName] = useState('');
    const [divisionName, setDivisionName] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // get schools name
    useEffect(() => {
        const getSchools = async () => {
            const request = await fetch('http://localhost:5000/schools');
            const response = await request.json();
            setSchools(response);
        };
        getSchools();
    }, []);

    const getSearchedSchool = schools.filter(school => school.school.toLowerCase().includes(schoolName.toLocaleLowerCase()));

    // get classes number
    useEffect(() => {
        const getClasses = async () => {
            const request = await fetch('http://localhost:5000/classes');
            const response = await request.json();
            setClasses(response);
        };
        getClasses();
    }, []);

    const getSearchedClass = classes.filter(cls => cls.class.toLocaleLowerCase().includes(className.toLocaleLowerCase()));

    // get divisions name
    useEffect(() => {
        const getDivisions = async () => {
            const request = await fetch('http://localhost:5000/divisions');
            const response = await request.json();
            setDivisions(response);
        };
        getDivisions();
    }, []);

    const getSearchedDivision = divisions.filter(division => division.division.toLocaleLowerCase().includes(divisionName.toLowerCase()));

    const onSubmit = async (data, e) => {
        const fullName = data.fullName;
        const dob = data.dob;
        const school = data.school;
        const className = data.className;
        const division = data.division;
        const studentInfo = { name: fullName, dob, school, class: className, division, status, role: 'student' };

        // Add a new student
        const url = `http://localhost:5000/student`;
        const addStudent = async () => {
            const request = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(studentInfo)
            });
            const response = await request.json();
            if (response.acknowledged) {
                e.target.reset();
                toast.success(`New student, ${fullName} added.`);
            }
        };
        addStudent();
    };

    return (
        <section className='w-2/3'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                    <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>Add new student</h1>
                    <div className='flex flex-col p-8 rounded-md shadow-sm hover:shadow duration-500'>
                        {/* Full name */}
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

                        {/* Date of birth */}
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="dob" className='whitespace-nowrap'>Date of birth</label>
                            <input
                                type="date"
                                {...register("dob", { required: true })}
                                className='border py-2 px-3 w-2/3 input-bordered input'
                            />
                            {errors.dob && <p className='text-[#7f0e0e]'>Date of birth is required</p>}
                        </div>

                        {/* School name */}
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="school" className='whitespace-nowrap'>School</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end relative">
                                    <input
                                        placeholder="School"
                                        type="text"
                                        {...register("school", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                        style={{
                                            width: "calc(66.666667% - 14.859px)"
                                        }}
                                    />
                                    {errors.school && <p className='text-[#7f0e0e]'>School name is required</p>}
                                    <span onClick={() => setCollapseSchool(!collapseSchool)}><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                    {
                                        collapseSchool &&
                                        <div
                                            className='absolute top-full right-0 w-2/3 bg-white shadow-lg pl-2 h-28 overflow-y-scroll z-10'
                                        >
                                            {
                                                getSearchedSchool.map(school => <p
                                                    key={school._id}
                                                    className='py-1 pl-2 mb-1 cursor-pointer hover:font-semibold duration-300'
                                                    onClick={() => {
                                                        setSchoolName(school.school);
                                                        setCollapseSchool(false);
                                                    }}
                                                >
                                                    {school.school}
                                                </p>)
                                            }
                                        </div>
                                    }
                                </label>
                            </div>
                        </div>

                        {/* Class number */}
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="className" className='whitespace-nowrap'>Class</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end relative">
                                    <input
                                        placeholder="Class"
                                        type="text"
                                        {...register("className", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        value={className}
                                        onChange={(e) => setClassName(e.target.value)}
                                        style={{
                                            width: "calc(66.666667% - 21.859px)"
                                        }}
                                    />
                                    {errors.className && <p className='text-[#7f0e0e]'>Class mention is required</p>}
                                    <span onClick={() => setCollapseClass(!collapseClass)}><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                    {
                                        collapseClass &&
                                        <div
                                            className='absolute top-full right-0 w-2/3 bg-white shadow-lg pl-2 h-28 overflow-y-scroll z-10'
                                        >
                                            {
                                                getSearchedClass.map(classNumber => <p
                                                    key={classNumber._id}
                                                    className='py-1 pl-2 cursor-pointer mb-1 hover:font-semibold duration-300'
                                                    onClick={() => {
                                                        setClassName(classNumber.class);
                                                        setCollapseClass(false);
                                                    }}
                                                >
                                                    {classNumber.class}
                                                </p>)
                                            }
                                        </div>
                                    }
                                </label>
                            </div>
                        </div>

                        {/* Division name */}
                        <div className='mb-3 flex justify-between items-center'>
                            <label htmlFor="division" className='whitespace-nowrap'>Division</label>
                            <div className="form-control w-full">
                                <label className="input-group justify-end relative">
                                    <input
                                        placeholder="Division"
                                        type="text"
                                        {...register("division", { required: true })}
                                        className='border py-2 px-3 w-2/3 input-bordered input'
                                        value={divisionName}
                                        onChange={(e) => setDivisionName(e.target.value)}
                                        style={{
                                            width: "calc(66.666667% - 9.859px)"
                                        }}
                                    />
                                    {errors.division && <p className='text-[#7f0e0e]'>Division name is required</p>}
                                    <span onClick={() => setCollapseDivision(!collapseDivision)}><i className="fa fa-arrow-down" aria-hidden="true" /></span>
                                    {
                                        collapseDivision &&
                                        <div
                                            className='absolute top-full right-0 w-2/3 bg-white shadow-lg pl-2 h-28 overflow-y-scroll z-10'
                                        >
                                            {
                                                getSearchedDivision.map(division => <p
                                                    key={division._id}
                                                    className='py-1 pl-2 mb-1 cursor-pointer hover:font-semibold duration-300'
                                                    onClick={() => {
                                                        setDivisionName(division.division);
                                                        setCollapseDivision(false);
                                                    }}
                                                >
                                                    {division.division}
                                                </p>)
                                            }
                                        </div>
                                    }
                                </label>
                            </div>
                        </div>

                        {/* Activity status */}
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
