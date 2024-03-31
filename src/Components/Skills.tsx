function Skills() {

    const skillList: Array<string> = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'React-Router', 'Python', 'Object-Oriented Programming (OOP)', 'jQuery', 'RESTAPIs', 'Version Control (GitHub)', 'Bootstrap'];

    return (
        <div className="skills-container" id="Skills">
            <span className="subtitle">Skills Summary</span>
            <div className="skills-list">
                <div className="skill-item"> 
                    {
                        skillList.map(
                            (skill, index) => (
                                <span key={index} className="skill">
                                    <span >
                                        {skill}
                                    </span >
                                    {index === (skillList.length - 1) ?
                                        <></> :
                                        <span className="skill-separator">|</span>
                                    }
                                </span>

                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Skills;