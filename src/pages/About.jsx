import { experiences, skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
    return (
        <section className='max-w-5xl mx-auto sm:p-16 pb-12 pt-[126px]! px-8 min-h-[calc(100vh-80px)]'>
            <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
                Hello, I'm <span className='bg-linear-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow'>Akhilesh</span> 👋
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Software Engineer based in India, specializing in technical education through hands-on learning and building applications.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12 justify-center'>
                    {skills.map((skill, index) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl bg-white/20' />
                            <div className='btn-front rounded-xl flex justify-center items-center backdrop-blur-md bg-white/10 border border-white/20'>
                                {skill.imageUrl ? (
                                    <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                                ) : (
                                    <div className="text-xs text-center p-1">{skill.name}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Work Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I've started my journey as a software engineer in 2024, leveling up my skills and teaming up with smart people. Here's the rundown:
                    </p>
                </div>

                <div className='mt-12 flex flex-col gap-12'>
                    {experiences.map((experience, index) => (
                        <div key={`experience-${index}`} className='flex gap-5'>
                            <div className='flex flex-col items-center'>
                                <div className='w-12 h-12 rounded-full flex justify-center items-center' style={{ backgroundColor: experience.iconBg }}>
                                    {experience.icon ? (
                                        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                                    ) : <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <div className='w-0.5 h-full bg-slate-200 my-2' />
                            </div>

                            <div className='flex-1 flex flex-col gap-2 pb-8'>
                                <h3 className='text-xl font-poppins font-semibold'>
                                    {experience.title}
                                </h3>
                                <p className='text-slate-500 font-medium font-base' style={{ margin: 0 }}>
                                    {experience.company_name}
                                </p>
                                <p className='text-sm text-slate-400 mt-1'>
                                    {experience.date}
                                </p>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-slate-500 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default About;