import React from 'react';

const DeleteModal = ({ user, refetch }) => {
    const handleDeleteUser = () => {
        const deleteUser = async () => {
            const request = await fetch(`https://tsc-teacher-student-center.herokuapp.com/${user?.role === 'teacher' ? 'teacher' : 'student'}/${user?._id}`, {
                method: "DELETE"
            });
            const response = await request.json();
            if (response.acknowledged)
                refetch();
        };
        deleteUser();
    };
    return (
        <section>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl">Are you sure?</h3>
                    <p class="py-4">You are going to delete a <span className='font-semibold'>{user.role}</span> named <span className='font-semibold  border-b-2 border-b-black pb-1 text-[#861414]'>{user.name}</span></p>
                    <div class="modal-action">
                        <label for="delete-modal" class="btn btn-success text-white" onClick={handleDeleteUser}>Delete</label>
                        <label for="delete-modal" class="btn btn-error text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeleteModal;