function Skills() {

    const skillList: Array<string> = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'React-Router', 'Python', 'Object-Oriented Programming (OOP)', 'jQuery', 'RESTAPIs', 'Version Control (GitHub)', 'Bootstrap'];

    return (
        <div className="skills-container" id="Skills">
            <span className="subtitle">Skills Summary</span>
            <div className="skills-list">
                <ul>
                    {
                        skillList.map(
                            (skill, index) => (
                                <span key={index}>
                                    <li >
                                        {skill}
                                    </li>
                                    {index === (skillList.length - 1) ?
                                        <></> :
                                        <span>|</span>
                                    }
                                </span>

                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
};

export default Skills;