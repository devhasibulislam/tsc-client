import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from '../DeleteModal';
import UpdateModal from '../UpdateModal';

const ViewTeacher = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [user, setUser] = useState([]);
    const { data: teachers, refetch } = useQuery('teachers', () => fetch('http://localhost:5000/teachers').then(res => res.json()));

    return (
        <section>
            <div>
                <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>View added teachers list</h1>
                <div class="mockup-window border bg-base-300">
                    <div class="overflow-x-auto mx-2">
                        <table class="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Department</th>
                                    <th>Graduation</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    teachers?.map((teacher, index) => <tr
                                        key={teacher._id}
                                        className='hover'
                                    >
                                        <th>{index + 1}</th>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.email}</td>
                                        <td>{teacher.dob}</td>
                                        <td>{teacher.department}</td>
                                        <td>{teacher.graduation}</td>
                                        <td className='flex gap-x-2'>
                                            <label for='update-modal' class="btn btn-xs btn-outline btn-success modal-button"
                                                onClick={() => {
                                                    setUser(teacher);
                                                    setOpenUpdateModal(true);
                                                }}
                                            >Edit</label>
                                            <label for='delete-modal' class="btn btn-xs btn-outline btn-error modal-button" onClick={() => {
                                                setUser(teacher);
                                                setOpenDeleteModal(true);
                                            }}>Delete</label>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div class="btn-group my-2 justify-end mr-2">
                            <button class="btn hover:bg-[#7f0e0e] hover:text-white bg-white text-black btn-xs">1</button>
                            <button class="btn hover:bg-[#7f0e0e] hover:text-white bg-white text-black btn-xs btn-active">2</button>
                            <button class="btn hover:bg-[#7f0e0e] hover:text-white bg-white text-black btn-xs">3</button>
                            <button class="btn hover:bg-[#7f0e0e] hover:text-white bg-white text-black btn-xs">4</button>
                        </div>
                    </div>
                </div>
                <button className='border bg-[#7f0e0e] text-white hover:bg-white hover:border-[#7f0e0e] hover:text-[#7f0e0e] duration-500 py-2 px-4 rounded-full cursor-pointer mt-4'>Download Excel</button>
            </div>
            {
                (openDeleteModal && <DeleteModal user={user} refetch={refetch} />)
                ||
                (openUpdateModal && <UpdateModal user={user} refetch={refetch} />)
            }
        </section>
    );
};

export default ViewTeacher;