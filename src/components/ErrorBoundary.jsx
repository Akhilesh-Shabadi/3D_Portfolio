import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex justify-center items-center h-screen bg-slate-300/20'>
                    <div className='text-center p-8 bg-white rounded-lg shadow-xl'>
                        <h1 className='text-3xl font-bold text-red-600 mb-4'>Something went wrong based on the user request.</h1>
                        <p className='text-gray-700 mb-6'>
                            We encountered an unexpected error. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors'
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
