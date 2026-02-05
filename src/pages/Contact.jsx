import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = () => { };
    const handleBlur = () => { };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock submission
        setTimeout(() => {
            setIsLoading(false);
            setForm({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        }, 3000);
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 pt-[126px]! px-8 min-h-[calc(100vh-80px)]'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug'>Get in Touch</h1>

                <form ref={formRef} onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'
                >
                    <label className='text-black font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-lg'
                            placeholder='John Doe'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-lg'
                            placeholder='john@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-lg'
                            placeholder='Let me know how I can help you!'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='text-white bg-linear-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[5, 10, 0]} intensity={2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader />}>
                        {/* Placeholder for 3D content */}
                        <mesh position={[0, 0, 0]} rotation={[0, 0.5, 0]}>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color={'hotpink'} />
                        </mesh>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
