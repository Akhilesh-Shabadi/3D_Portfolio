const Alert = ({ type, text }) => {
    return (
        <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
            <div
                className={`p-2 ${type === 'danger' ? 'bg-red-800' : type === 'warning' ? 'bg-yellow-800' :
                    type === 'info' ? 'bg-white-800 shadow-2xl' : 'bg-blue-800'
                    } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
                role='alert'
            >
                <p className={`flex rounded-full ${type === 'danger' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500 text-gray-900' :
                    type === 'info' ? 'bg-gray-200 text-gray-700' : 'bg-blue-500'
                    } uppercase px-2 py-1 text-xs font-semibold mr-3`}
                >
                    {type === 'danger' ? 'Failed ❌' : type === 'warning' ? 'Warning ⚠️' :
                        type === 'info' ? 'Info ℹ️' : 'Success ✅'}
                </p>
                <p className={`mr-2 text-left ${type === 'info' ? 'text-gray-700' : 'text-indigo-100'}`}>{text}</p>
            </div>
        </div>
    );
};

export default Alert;
