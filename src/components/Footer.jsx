import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7 font-poppins">
            <hr className='border-slate-200' />
            <div className="flex flex-wrap gap-7 items-center justify-between">
                <p className="text-gray-500">© {new Date().getFullYear()} <strong>Akhilesh Shabadi</strong>. All rights reserved.</p>
                <p className="text-gray-500">Made with ❤️ by Akhilesh Shabadi</p>

                <div className="flex gap-3">
                    {socialLinks.map((link) => (
                        <Link key={link.name} to={link.link} target="_blank" rel="noopener noreferrer">
                            <img src={link.iconUrl} alt={link.name} className='w-6 h-6 object-contain' />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer