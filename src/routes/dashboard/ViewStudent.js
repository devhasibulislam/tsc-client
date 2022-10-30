import React, { useEffect, useState } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import { useQuery } from 'react-query';
import DeleteModal from '../DeleteModal';
import UpdateModal from '../UpdateModal';

const ViewStudent = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [user, setUser] = useState([]);
    const [pages, setPages] = useState(0);
    const [clickedPage, setClickedPage] = useState(0);

    const { data: students, refetch } = useQuery(['students', clickedPage], () => fetch(`https://tsc-server.onrender.com/students?page=${clickedPage}`).then(res => res.json()));

    useEffect(() => {
        const getStudents = async () => {
            const request = await fetch(`https://tsc-server.onrender.com/students?page=${clickedPage}`);
            const response = await request.json();
            console.log(response);
        };
        getStudents();
    }, [clickedPage]);

    useEffect(() => {
        const getPageNumbers = async () => {
            const request = await fetch('https://tsc-server.onrender.com/studentsCount');
            const response = await request.json();
            setPages(Math.ceil(response?.totalStudents / 5));
            refetch();
        };
        getPageNumbers();
    }, [refetch]);

    return (
        <section>
            <div>
                <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>View added students list</h1>
                {/* <div class="mockup-code border mb-4 bg-base-300">
                    <div className='flex items-center gap-x-2 mx-2'>
                        <input type="text" name='name' placeholder="Name" class="text-black input input-bordered w-full max-w-xs" />
                        <input type="number" name='age' placeholder="Age" class="text-black input input-bordered w-full max-w-xs" />
                        <input type="text" name='school' placeholder="school" class="text-black input input-bordered w-full max-w-xs" />
                        <input type="text" name='class' placeholder="Class" class="text-black input input-bordered w-full max-w-xs" />
                        <input type="text" name='division' placeholder="Division" class="text-black input input-bordered w-full max-w-xs" />
                    </div>
                </div> */}
                <div class="mockup-window border bg-base-300 mt-4">
                    <div class="overflow-x-auto mx-2">
                        <table class="table w-full" id="table-to-xls">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>School</th>
                                    <th>Class</th>
                                    <th>Division</th>
                                    <th>Status</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students?.map((student, index) => <tr
                                        key={student._id}
                                        className='hover'
                                    >
                                        <th>{index + 1}</th>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.school}</td>
                                        <td>{student.class}</td>
                                        <td>{student.division}</td>
                                        <td>{student.status}</td>
                                        <td className='flex gap-x-2'>
                                            <label
                                                for='update-modal'
                                                class="btn btn-xs btn-outline btn-success modal-button"
                                                onClick={() => {
                                                    setUser(student);
                                                    setOpenUpdateModal(true);
                                                }}
                                            >Edit</label>
                                            <label
                                                for='delete-modal'
                                                class="btn btn-xs btn-outline btn-error modal-button"
                                                onClick={() => {
                                                    setUser(student);
                                                    setOpenDeleteModal(true);
                                                }}
                                            >Delete</label>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div class="btn-group my-2 justify-end mr-2">
                            {
                                [...Array(pages).keys()]?.map(page => <button
                                    key={page}
                                    class={`btn hover:bg-[#7f0e0e] hover:text-white bg-white text-black btn-xs ${clickedPage === page && 'btn-active'}`}
                                    onClick={() => setClickedPage(page)}
                                >{page + 1}</button>)
                            }
                        </div>
                    </div>
                </div>
                <ReactHtmlTableToExcel
                    id="test-table-xls-button"
                    className="border
                        bg-[#7f0e0e]
                        text-white
                        hover:bg-white
                        hover:border-[#7f0e0e]
                        hover:text-[#7f0e0e]
                        duration-500
                        py-2
                        px-4
                        rounded-full 
                        cursor-pointer 
                        mt-4
                    download-table-xls-button"
                    table="table-to-xls"
                    filename="students-info-list"
                    sheet="tablexls"
                    buttonText="Download Excel" />
            </div>
            {
                (openDeleteModal && <DeleteModal user={user} refetch={refetch} />)
                ||
                (openUpdateModal && <UpdateModal user={user} refetch={refetch} />)
            }
        </section>
    );
};

export default ViewStudent;