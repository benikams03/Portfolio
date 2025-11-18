import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt,FaPython, FaReact, FaNodeJs,FaLaravel,FaVuejs, FaWordpress, FaGithub, FaGitAlt  } from "react-icons/fa6";
import { SiMongodb, SiPhp, SiFastify, SiExpress, SiMysql,SiAdobephotoshop,SiAdobexd,SiAdobeillustrator } from "react-icons/si";
import { BsFiletypePhp } from "react-icons/bs";

export default function Skils() {
    return(<>
    <div id="skill" className="relative bg-white px-6 md:px-36 max-md:pb-12">
        <h2 data-aos="zoom-in" className="text-center pt-12 pb-10 text-3xl font-bold">SKILLS</h2>
        
        <div className="pb-26 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">Language <span className="text-indigo-600">de programmtion</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <RiJavascriptFill size={28}/>
                        JavaScript</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <BiLogoTypescript size={28}/>
                        TypeScript</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiPhp size={28}/>
                        Php</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaPython size={28}/>
                        Python</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">Microframework <span className="text-indigo-600">& Librairie</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <FaReact size={28}/>
                        React</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaNodeJs size={28}/>
                        Nodejs</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiExpress size={28}/>
                        Express</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiFastify size={28}/>
                        Fastify</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <BsFiletypePhp size={28}/>
                        Slim</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">Frame<span className="text-indigo-600">work</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <FaLaravel  size={28}/>
                        Laravel</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaVuejs size={28}/>
                        Vuejs</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaReact size={28}/>
                        React Native</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">Technologies <span className="text-indigo-600">Web</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <FaHtml5 size={28}/>
                        HTML5</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaCss3Alt size={28}/>
                        CSS3</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <RiTailwindCssFill size={28}/>
                        TailwindCSS</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">Base <span className="text-indigo-600">de données</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <SiMysql  size={28}/>
                        Mysql</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiMongodb size={28}/>
                        MongoDB</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">CMS & Outils <span className="text-indigo-600">de Versioning</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <FaWordpress  size={28}/>
                        WordPress</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaGitAlt size={28}/>
                        Git</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <FaGithub size={28}/>
                        GitHub</p>
                </div>
            </div>
            <div data-aos="fade-up" className="border-l-1 border-gray-300 px-6 relative">
                <div className="border-l h-8 border-indigo-600 absolute left-0" />
                <h2 className="text-xl font-semibold pb-5">De<span className="text-indigo-600">sign</span></h2>
                <div className="text-gray-700 flex flex-col gap-2">
                    <p className="flex items-center gap-2 font-semibold">
                        <SiAdobephotoshop  size={28}/>
                        Adobe Photoshop</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiAdobeillustrator size={28}/>
                        Adobe Illustrator</p>
                    <p className="flex items-center gap-2 font-semibold">
                        <SiAdobexd size={28}/>
                        Adobe XD</p>
                </div>
            </div>
        </div>

        <div className="custom-shape-divider-bottom-1763164533">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
    </>)
}