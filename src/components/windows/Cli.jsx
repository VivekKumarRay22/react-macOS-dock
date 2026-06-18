import React from 'react'
import MacWindows from './MacWindows'
import TerminalPackage from "react-console-emulator";

const Terminal = TerminalPackage.default;

const Cli = () => {
    return (
        <MacWindows   >
            <div className="cli-window">

                <Terminal
                    commands={{

                        about: {
                            description: "About me",
                            fn: () => `
Vivek Kumar Ray

BCA Graduate (IGNOU)

Aspiring Full Stack Developer passionate about building modern web applications.

Currently Learning:
• React.js
• Node.js
• Express.js
• MySQL

Current Focus:
• Full Stack Development
• Building Real Projects
• Problem Solving
`
                        },

                        skills: {
                            description: "Technical skills",
                            fn: () => `
Frontend:
- HTML5
- CSS3
- SCSS
- Tailwind CSS
- JavaScript
- React.js

Backend:
- Node.js
- Express.js
- EJS

Database:
- MySQL
- PostgreSQL

Tools:
- Git
- GitHub
- VS Code
- Linux
`
                        },

                        education: {
                            description: "Academic background",
                            fn: () => `
Degree:
Bachelor of Computer Applications

University:
IGNOU

Status:
Graduated
`
                        },

                        projects: {
                            description: "Featured projects",
                            fn: () => `
Featured Projects

1. React MacOS Clone
2. Product Store
3. Anime Blog
4. GitHub Portfolio
5. Resume Viewer
6. Spotify Window
7. Interactive Terminal
`
                        },

                        github: {
                            description: "GitHub profile",
                            fn: () => `
GitHub

https://github.com/VivekKumarRay22
`
                        },

                        resume: {
                            description: "Resume information",
                            fn: () => `
Resume available in the Resume application window.

Skills:
React • Node.js • Express.js • MySQL
`
                        },

                        contact: {
                            description: "Contact information",
                            fn: () => `
Location:
India

GitHub:
github.com/VivekKumarRay22

Status:
Open To Opportunities 🚀
`
                        },

                        whoami: {
                            description: "Current user",
                            fn: () => `
vivekkumarray
`
                        },

                        pwd: {
                            description: "Current directory",
                            fn: () => `
/Users/vivekkumarray
`
                        },

                        ls: {
                            description: "List portfolio files",
                            fn: () => `
Desktop/
Documents/
Projects/
Resume.pdf
Skills.json
Portfolio.jsx
`
                        },

                        date: {
                            description: "Show current date",
                            fn: () => new Date().toString()
                        }
                    }}

                    welcomeMessage={`
Welcome to VivekOS Terminal v1.0

Type "help" to view all available commands.

Suggested Commands:

about
skills
education
projects
github
resume
contact
whoami
ls
pwd
date

Happy Exploring 🚀
                    `}

                    promptLabel={'vivekkumarray:~$'}
                    promptLabelStyle={{ color: 'blue' }}
                />

            </div>
        </MacWindows>
    )
}

export default Cli