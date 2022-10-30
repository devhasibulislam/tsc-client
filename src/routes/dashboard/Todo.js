import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Todo = () => {
    const [note, setNote] = useState('');

    // add todo
    const handleAddNote = () => {
        const addTodo = async () => {
            const request = await fetch(`https://tsc-server.onrender.com/todo`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ todo: note, status: 'unchecked' })
            });
            const response = await request.json();
            if (response.acknowledged) {
                setNote('');
                incomplete();
                toast.success('Note added successfully!');
            }
        };
        addTodo();
    };

    // get todo
    const { data: completeTodo, refetch: complete } = useQuery('completeTodo', () => fetch('https://tsc-server.onrender.com/completeTodo').then(res => res.json()));
    const { data: incompleteTodo, refetch: incomplete } = useQuery('incompleteTodo', () => fetch('https://tsc-server.onrender.com/incompleteTodo').then(res => res.json()));

    // update todo
    const handleCheckNotes = (id, state) => {
        const updateTodo = async () => {
            const request = await fetch(`https://tsc-server.onrender.com/todo/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ status: state ? 'checked' : 'unchecked' })
            });
            const response = await request.json();
            if (response.acknowledged) {
                complete();
                incomplete();
                state ? toast.success('Note checked!') : toast.warning('Note unchecked!');
            }
        };
        updateTodo();
    };

    // delete todo
    const handleDeleteTodo = (id) => {
        const deleteTodo = async () => {
            const request = await fetch(`https://tsc-server.onrender.com/todo/${id}`, {
                method: "DELETE"
            });
            const response = await request.json();
            if (response.acknowledged) {
                complete();
                toast.success('Todo deletion successful!');
            }
        };
        deleteTodo();
    };

    return (
        <section>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-2 grid-cols-1 lg:gap-x-2 gap-y-2'>
                <div>
                    <div class="mockup-phone border-success">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1 px-2">
                                <h3 className='w-full font-semibold text-lg mb-2'>Add your note</h3>
                                <div className='w-full'>
                                    <textarea
                                        class="textarea textarea-bordered w-full" placeholder="Your note please"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                    <div className='flex justify-end mt-2'>
                                        <button
                                            class="btn btn-sm btn-outline btn-success"
                                            onClick={handleAddNote}
                                        >Add todo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mockup-phone border-warning">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1 px-2">
                                <h3 className='w-full font-semibold text-lg mb-2'>Check your note</h3>
                                {
                                    incompleteTodo?.length === 0
                                        ?
                                        <div class="alert alert-warning shadow-lg">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                <span>No todo added!</span>
                                            </div>
                                        </div>
                                        :
                                        incompleteTodo?.map(td => <div
                                            class="card w-full border bg-base-100 shadow-xl mb-2"
                                            key={td._id}
                                        >
                                            <div
                                                class="card-body">
                                                <p class="card-title text-xs">Todo id: <span className='font-bold'>{td._id}</span></p>
                                                <p>{td.todo}</p>
                                                <div class="card-actions justify-end">
                                                    <button class="btn btn-sm btn-outline btn-warning shadow"
                                                        onClick={() => handleCheckNotes(td._id, true)}
                                                    >Check</button>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mockup-phone border-error">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1 px-2">
                                <h3 className='w-full font-semibold text-lg mb-2'>Delete your note</h3>
                                {
                                    completeTodo?.length === 0
                                        ?
                                        <div class="alert alert-error shadow-lg">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>No completed task exist!</span>
                                            </div>
                                        </div>
                                        :
                                        completeTodo?.map(td => <div
                                            key={td?._id}
                                            class="card w-full border bg-base-100 shadow-xl mb-2"
                                        >
                                            <div class="card-body">
                                                <p class="card-title text-xs">Todo id: <span className='font-bold'>{td._id}</span></p>
                                                <p>{td.todo}</p>
                                                <div class="card-actions justify-end">
                                                    <button
                                                        class="btn btn-sm btn-warning"
                                                        onClick={() => handleCheckNotes(td._id, false)}
                                                    >Withdraw</button>
                                                    <button
                                                        class="btn btn-sm btn-outline btn-error"
                                                        onClick={() => handleDeleteTodo(td._id)}
                                                    >Delete</button>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Todo;