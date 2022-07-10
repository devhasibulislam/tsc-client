import React from 'react';

const ViewTeacher = () => {
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
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Department</th>
                                    <th>Graduation</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr className='hover'>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>onlyboyrobin@gmail.com</td>
                                    <td>1971-12-02</td>
                                    <td>Computer Science and Engineering</td>
                                    <td>2019</td>
                                    <td className='flex gap-x-2'>
                                        <button class="btn btn-xs btn-outline btn-success">Edit</button>
                                        <button class="btn btn-xs btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewTeacher;