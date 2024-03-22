import React from 'react'

const Manager = () => {
    return (
        <>

            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <div className='  mycontainer'>
                <h1 className='text-4xl font-bold text-center'> <span className='text-green-700'>&lt;</span>
                    Passop
                    <span className='text-green-700'>OP/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own password manager</p>
                <div className='text-white flex flex-col p-4 gap-8'>

                    <input className='rounded-full border border-green-500 w-full text-black py-1 px-4' type="text" name="" id="" />
                    <div className="flex w-full gap-8 justify-between">
                        <input className='rounded-full border border-green-500 w-full text-black py-1 px-4' type="text" name="" id="" />
                        <input className='rounded-full border border-green-500 w-full text-black py-1 px-4' type="text" name="" id="" />
                    </div>
                    <button  className='bg-green-500'type="submit">Add Password</button>
                </div>
            </div>

        </>
    )
}

export default Manager
