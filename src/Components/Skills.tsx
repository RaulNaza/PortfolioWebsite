function Skills() {

    const skillList: Array<string> = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'React-Router', 'Python', 'Object-Oriented Programming (OOP)', 'jQuery', 'RESTAPIs', 'Version Control (GitHub)', 'Bootstrap'];

    return (
        <div className="container" id="Skills">
            <h2 className="subtitle">Skills Summary</h2>
            <div className="skills-list">
                {
                    skillList.map(
                        (skill, index) => (
                            <div key={index} className="skill">
                                <div>
                                    {skill}
                                </div >
                                {index === (skillList.length - 1) ?
                                    <></> :
                                    <div className="skill-separator">|</div>
                                }
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default Skills;