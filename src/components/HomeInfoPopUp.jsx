import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='sm:text-md text-center bg-[#2b77e7] border-[#2b77e7] relative rounded-2xl mx-5 flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-8 px-8 shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db]'>
            <p className='font-medium sm:text-md text-center'>{text}</p>
            <Link
                to={link}
                className='shadow-[0.6vmin_0.6vmin_#fff,1vmin_1vmin_#d2e4ff,1vmin_1vmin_#d2e4ff,0.65vmin_1vmin_#d2e4ff,1vmin_0.65vmin_#d2e4ff] bg-white border-white py-2 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-2'
            >
                {btnText} <svg className="w-6 h-6 text-gray-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    )
};

const content = {
    1: (
        <h1 className="sm:text-md sm:leading-snug text-center bg-[#2b77e7] border-[#2b77e7] relative rounded-2xl py-4 px-8 text-white mx-5 shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db]">
            Hi, I am <span className='font-semibold'>Akhilesh</span>👋
            <br />
            A Developer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="Working banking application, which help to grow my skills in full stack development."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Multiple projects, which help to grow my skills in full stack development."
            link="/projects"
            btnText="Visit Projects"
        />
    ),
    4: (
        <InfoBox
            text="Want to Hire me!"
            link="/contact"
            btnText="Let's Talk"
        />
    ),
};

const HomeInfoPopUp = ({ currentStage }) => {
    return content[currentStage] || null;
}

export default HomeInfoPopUp