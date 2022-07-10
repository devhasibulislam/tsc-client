import React from 'react';

const Todo = () => {
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
                                    <textarea class="textarea textarea-bordered w-full" placeholder="Your note please" />
                                    <div className='flex justify-end mt-2'>
                                        <button class="btn btn-sm btn-outline btn-success">Add todo</button>
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
                                <div class="card w-full border bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Card title!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-sm btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
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
                                <div class="card w-full border bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Card title!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-sm btn-warning">Withdraw</button>
                                            <button class="btn btn-sm btn-outline btn-error">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Todo;