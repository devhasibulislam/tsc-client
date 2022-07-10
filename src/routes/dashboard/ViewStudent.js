import React from 'react';

const ViewStudent = () => {
    return (
        <section>
            <div>
                <h1 className='text-3xl font-bold mb-8 text-[#7f0e0e] border-b-2 border-b-[#7f0e0e] w-fit pb-1'>View added students list</h1>
                <div class="mockup-window border bg-base-300">
                    <div class="overflow-x-auto">
                        <table class="table w-full">
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
                                {/* <!-- row 1 --> */}
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>27</td>
                                    <td>Harding High School</td>
                                    <td>Nine</td>
                                    <td>Dhaka</td>
                                    <td>Active</td>
                                    <td className='flex gap-x-2'>
                                        <button class="btn btn-xs btn-outline btn-success">Edit</button>
                                        <button class="btn btn-xs btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
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
            </div>
        </section>
    );
};

export default ViewStudent;