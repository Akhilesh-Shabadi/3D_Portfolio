import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ form_name: '', form_email: '', form_message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = () => {
        setCurrentAnimation('walk');
    };
    const handleBlur = () => {
        setCurrentAnimation('idle');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');
        showAlert({ show: true, text: 'Sending Message...', type: 'info' });

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.form_name,
                to_name: 'Akhilesh Shabadi',
                from_email: form.form_email,
                to_email: 'akhileshshabadi@gmail.com',
                message: form.form_message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                setIsLoading(false);
                showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

                setTimeout(() => {
                    hideAlert();
                    setCurrentAnimation('idle');
                    setForm({ form_name: '', form_email: '', form_message: '' });
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                showAlert({ show: true, text: 'Failed to send message. Please try again.', type: 'danger' });
                setTimeout(() => {
                    hideAlert();
                    setCurrentAnimation('idle');
                }, 2000);
            });


        // // Mock submission
        // setTimeout(() => {
        //     setIsLoading(false);
        //     showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

        //     setTimeout(() => {
        //         hideAlert();
        //         setCurrentAnimation('idle');
        //         setForm({ form_name: '', form_email: '', form_message: '' });
        //     }, 3000);
        // }, 3000);
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 sm:pb-5 pb-12 pt-[106px]! px-8 min-h-[calc(100vh-80px)]'>
            {alert.show && <Alert {...alert} />}
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug'>Get in Touch</h1>

                <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'
                    autoComplete='off'
                >
                    <label className='text-black font-semibold'>
                        Name
                        <input required type='text' name='form_name' value={form.form_name} onBlur={handleBlur}
                            onFocus={handleFocus} placeholder='John Doe' onChange={handleChange}
                            className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-lg'
                        />
                    </label>
                    <label className='text-black font-semibold'>
                        Email
                        <input required type='email' name='form_email' value={form.form_email} onBlur={handleBlur}
                            onFocus={handleFocus} onChange={handleChange} placeholder='john@gmail.com'
                            className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-lg'
                        />
                    </label>
                    <label className='text-black font-semibold'>
                        Your Message
                        <textarea name='form_message' rows={4} required onBlur={handleBlur} value={form.form_message}
                            onFocus={handleFocus} onChange={handleChange} placeholder='Let me know how I can help you!'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-lg'
                        />
                    </label>

                    <button type='submit' disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}
                        className='text-white bg-linear-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000, }}>
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
                        <Fox position={[0.5, 0.4, 0]} scale={[0.6, 0.6, 0.6]} rotation={[12.6, -0.6, 0]}
                            currentAnimation={currentAnimation}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
