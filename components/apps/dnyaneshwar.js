import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TfiAgenda } from "react-icons/tfi";


export class AboutDnyaneshwar extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => {},
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "certifications": <Certifications />,
            "resume": <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    };

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    };

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Dnyaneshwar" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Dnyaneshwar's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Dnyaneshwar's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Dnyaneshwar's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Dnyaneshwar's Resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div id="certifications" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "certifications" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <TfiAgenda className="w-4 h-4 text-gray-50" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Certifications</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex'>
                    <iframe src="https://github.com/sponsors/dnyaneshwarshekade/button" title="Sponsor Dnyaneshwarshekade" width={"100%"} height={"100%"}></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutDnyaneshwar;

export const displayAboutDnyaneshwar = () => {
    return <AboutDnyaneshwar />;
}

//abut the Dnyaneshwar

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Dnyaneshwar Shekade Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Dnyaneshwar Shekade</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-blue-600 font-bold">Linux Server & DevOps Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                I am a <span className="font-medium">Post Graduate Person</span> have a over 2 years of experience in various IT companies, including <u className='cursor-pointer'>
                <a href="https://www.ril.com" target="_blank">Reliance Industries Limited</a>
                </u> and <u className='cursor-pointer'>
                <a href="https://www.softaculous.com/" target="_blank">Softaculous Limited</a>
            </u>, I am now seeking opportunities as a DevOps Engineer. Feel free to reach out to me at <a className='text-underline' href='mailto:shekade31@gmail.com'><u>@shekade31@gmail.com</u></a> 
    </li>
    <li className="mt-3 list-building">
        I take pride in optimizing and automating infrastructure to enhance system performance and reliability with the help of server management and web hosting.
    </li>
    <li className="mt-3 list-time">
        Outside of my professional work, I enjoy reading technical literature, playing Cricket, and watching <a href="https://www.youtube.com/channel/UCFv17ujCwDDPWWTVorWZejg" target="_blank" rel="noreferrer">youtube videos</a>.
    </li>
    <li className="mt-3 list-star">
        I also have a keen interest in Deep Learning and Computer Vision,AI,open source applications and continuously exploring new advancements in these fields.
    </li>
</ul>

        </>
    )
}

//eEducation of Dnyaneshwar
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                 <li className="list-disc">
                <div className="text-lg md:text-xl text-left font-bold leading-tight">
                 Masters in Science: Computer Science
            </div>
            <div className="text-sm text-gray-400 mt-0.5">2023</div>
            <div className="text-sm md:text-base">Department of Computer Science</div>
            <div className="text-sm text-gray-300 font-bold mt-1">University of Mumbai, Vidhyanagri, Santacruz</div>
            <div className="text-sm text-gray-300 font-bold mt-1">Grade &nbsp; 8.52</div>
                </li>
        <li className="list-disc mt-5">
            <div className="text-lg md:text-xl text-left font-bold leading-tight">
            Bachelor of Science: Computer Science
            </div>
            <div className="text-sm text-gray-400 mt-0.5">2021</div>
            <div className="text-sm md:text-base">N.G. Acharya and D.K. Marathe College</div>
            <div className="text-sm text-gray-300 font-bold mt-1">University of Mumbai, Chembur</div>
            <div className="text-sm text-gray-300 font-bold mt-1">Grade &nbsp; 6.5</div>
            </li>
            <li className="list-disc mt-5">
            <div className="text-lg md:text-xl text-left font-bold leading-tight">
                Bachelor of Arts
            </div>
            <div className="text-sm text-gray-400 mt-0.5">2020</div>
            <div className="text-sm md:text-base">Yashwantrao Chavan Maharashtra Open University</div>
            <div className="text-sm text-gray-300 font-bold mt-1">Nashik</div>
            <div className="text-sm text-gray-300 font-bold mt-1">Percentages &nbsp; 75.00%</div>
            </li>
        </ul>

        </>
    )
}

//Skills of Dnyaneshwar 
function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I have extensive experience in web hosting and server management.
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>My expertise includes <strong className="text-ubt-gedit-orange">Linux server administration, Web Hosting Application Support & DevOps</strong></div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>I have extensive experience in both <strong className="text-ubt-gedit-orange">application support and DevOps</strong>, with a strong grasp of web servers like Apache, Nginx, and OpenLiteSpeed, alongside database management with MySQL, MariaDB, and SQLite. I am proficient in scripting languages such as PHP, Python, and bash Scripting. My expertise extends to handling mail servers like Exim, Postfix, Dovecot, as well as DNS management using BIND.</div>
                    <div>In terms of security, I am well-versed in SSL/TLS setup using Let's Encrypt and OpenSSL, and server management tools like phpMyAdmin and Softaculous. I have hands-on experience with firewalls like CSF, Fail2Ban, and handling FTP servers, cron jobs, and automated backups.</div>
                    <div>Additionally, my work with server virtualization is primarily through Virtualizor, managing platforms such as KVM, Xen, OpenVZ, LXC, and Proxmox. I have dealt with storage technologies like LVM, Ceph, and NFS, and implemented robust networking, security, and backup solutions in virtual environments.</div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>I am also proficient in <strong className="text-ubt-gedit-orange">Windows administration</strong> and desktop support.</div>
                    <div>In desktop support, I am highly familiar with operating systems (Windows, macOS, Linux), remote support tools like TeamViewer and AnyDesk, network security (Active Directory, VPNs, firewalls), hardware troubleshooting, software deployment, patch management, antivirus solutions, cloud services, user access control, and virtualization platforms like VMware and Hyper-V. I also have experience with helpdesk systems such as ServiceNow, Jira, and Zendesk, along with managing office suites like Office 365 and Google Workspace.</div>
                </li>
            </ul>
            <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
            This are some of <strong className="text-ubt-gedit-orange">Keyskills & familier technologies</strong>
            </li>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Linux Server Management Technologies</div>
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Application & Web Hosting Technologies</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white" alt="ubuntu" />
                        <img className="m-1" src="https://img.shields.io/badge/-CentOS-262577?style=flat&logo=centos&logoColor=ffffff" alt="centos" />
                        <img className="m-1" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=ffffff" alt="docker" />
                        <img className="m-1" src="https://img.shields.io/badge/KVM-CC0000?style=flat&logo=kvm&logoColor=ffffff" alt="kvm" />
                        <img className="m-1" src="https://img.shields.io/badge/-Proxmox-E57000?style=flat&logo=proxmox&logoColor=ffffff" alt="proxmox" />
                        <img className="m-1" src="https://img.shields.io/badge/-Virtualizor-FFAA00?style=flat&logo=virtualizor&logoColor=ffffff" alt="virtualizor" />
                        <img className="m-1" src="https://img.shields.io/badge/-CSF-888888?style=flat&logo=shield&logoColor=ffffff" alt="csf" />
                        <img className="m-1" src="https://img.shields.io/badge/-AlmaLinux-0C5E9A?style=flat&logo=almalinux&logoColor=ffffff" alt="almalinux" />

                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-Apache-D22128?style=flat&logo=apache&logoColor=ffffff" alt="apache" />
                        <img className="m-1" src="https://img.shields.io/badge/-Nginx-269539?style=flat&logo=nginx&logoColor=ffffff" alt="nginx" />
                        <img className="m-1" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=ffffff" alt="mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/-MariaDB-003545?style=flat&logo=mariadb&logoColor=ffffff" alt="mariadb" />
                        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=ffffff" alt="php" />
                        <img className="m-1" src="https://img.shields.io/badge/-Webuzo-34A853?style=flat&logo=webuzo&logoColor=ffffff" alt="webuzo" />
                        <img className="m-1" src="https://img.shields.io/badge/-Softaculous-2E69F7?style=flat&logo=softaculous&logoColor=ffffff" alt="softaculous" />
                        <img className="m-1" src="https://img.shields.io/badge/-SSL/TLS-333333?style=flat&logo=lock&logoColor=ffffff" alt="ssl/tls" />
                        <img className="m-1" src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                    </div>
                </div>
            </div>

            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span>And of course,</span> 
                    <img className="inline ml-1" src="https://img.shields.io/badge/-Linux%20Server%20Management%20and%20Virtualization-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="linux server management and virtualization" />
                    <span>!</span>
                </li>
            </ul>
        </>
    );
}

//Project of Dnyaneshwar

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/dnyaneshwarshekade/repos', {
                    headers: {
                        'Authorization': `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`
                    }
                });
                const formattedProjects = response.data.map(repo => ({
                    name: repo.name,
                    date: new Date(repo.created_at).toLocaleDateString(),
                    link: repo.html_url,
                    description: repo.description ? [repo.description] : ['No description available'],
                    domains: repo.topics || [] // Assuming topics are used as domains
                }));
                setProjects(formattedProjects);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const tagColors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <iframe src="https://github.com/sponsors/dnyaneshwarshekade/card" title="Sponsor DnyaneshwarShekade" className="my-4 w-5/6 md:w-3/4"></iframe>

            {projects.map((project, index) => {
                const projectNameFromLink = project.link.split('/');
                const projectName = projectNameFromLink[projectNameFromLink.length - 1];

                return (
                    <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <div className="text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                    <iframe src={`https://ghbtns.com/github-btn.html?user=dnyaneshwarshekade&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={`${project.name.toLowerCase()}-star`}></iframe>
                                </div>
                                <div className="text-gray-300 font-light text-sm">{project.date}</div>
                            </div>
                            <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, index) => (
                                    <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains.map((domain, index) => {
                                    const borderColorClass = tagColors[domain] ? `border-${tagColors[domain]}` : 'border-gray-300';
                                    const textColorClass = tagColors[domain] ? `text-${tagColors[domain]}` : 'text-gray-300';

                                    return (
                                        <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>
                                            {domain}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
}

function Certifications() {
    const certifications = [
        {
            title: "Introduction to Generative AI",
            issuer: "Google Cloud",
            grade: "100%",
            certificateLink: "https://coursera.org/share/0f8f0b8b26651dfefeab226d9c2d950c",
        },
        {
            title: "System Administration and IT Infrastructure Services",
            issuer: "Google",
            grade: "90.74%",
            certificateLink: "https://coursera.org/share/0bded1be219e9fb400cec614bb4365df",
        },
        {
            title: "Deploy a complete Wordpress Website in Microsoft Azure Cloud",
            issuer: "Deprecated Guided Projects",
            grade: "80%",
            certificateLink: "https://www.coursera.org/account/accomplishments/records/MZ9QBNHVZE7P", // Replace with the actual link if available
        },
        {
            title: "Introduction to Microsoft Azure Cloud Services",
            issuer: "Microsoft",
            grade: "89.58%",
            certificateLink: "https://www.coursera.org/account/accomplishments/records/LQ9MUMSSB7HZ", // Replace with the actual link if available
        },
        {
            title: "Command Line in Linux",
            issuer: "Coursera Project Network",
            grade: "80%",
            certificateLink: "https://www.coursera.org/account/accomplishments/records/6V9RFJZDPRAC", // Replace with the actual link if available
        },
        {
            title: "Technical Support Fundamentals",
            issuer: "Google",
            grade: "97.63%",
            certificateLink: "https://www.coursera.org/account/accomplishments/records/3AQGZAGJB2TV", // Replace with the actual link if available
        },
    ];

    return (
        <div className="p-4">
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Certifications
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {certifications.map((cert, index) => (
                <div key={index} className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex flex-col">
                            <div className="text-base md:text-lg font-semibold">{cert.title}</div>
                            <div className="text-gray-300 text-sm">Issued by: {cert.issuer}</div>
                            <div className="text-gray-300 text-sm">Grade Achieved: {cert.grade}</div>
                            <a
                                href={cert.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline mt-1"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                    <hr className="my-2 border-gray-300" />
                </div>
            ))}
        </div>
    );
}


function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Dnyaneshwar's-Resume.pdf" title="Dnyaneshwar Shekade Resume" frameBorder="0"></iframe>
    )
}
