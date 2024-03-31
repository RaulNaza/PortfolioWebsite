import github from '../assets/github.png'
import site from  '../assets/Site.png'
import phonebook from '../assets/Phonebook.png'
import movie from '../assets/MovieReview.png'
import tictactoe from '../assets/TicTacToe.png'

function Portfolio() {

    type Project = {
        title: string;
        description: string;
        link: string;
        demo: string;
        img: string
    };

    const listOfProjects: Array<Project> = [
        {
            title: "Phonebook",
            description: "This Phonebook web application allows you to keep an online log of your current contacts.",
            link: "https://github.com/RaulNaza/Phonebook",
            demo: "https://main.d1objhoedxwde0.amplifyapp.com/",
            img: phonebook
        },
        {
            title: "Movie Review",
            description: "Review and rate the top 10 movies of all time, per IMDb.",
            link: "https://github.com/RaulNaza/MovieReview",
            demo: "https://main.d1sgt2pyjj13ko.amplifyapp.com/",
            img: movie
        },
        {
            title: "Tic-Tac-Toe Game",
            description: "Classic game of Tic-Tac-Toe.",
            link: "https://github.com/RaulNaza/Tic-Tac-Toe",
            demo: "No Demo Available",
            img: tictactoe
        }
    ];

    return (
        <div className="section-container" id='Portfolio'>
            <span className="subtitle">Portfolios</span>
            <div className="portfolio-container">
                {
                    listOfProjects.map((project, index) => (
                        <div className="project-container" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="project-body">
                                <span className="project-title">
                                    {project.title}
                                </span>
                                <span className="project-description">
                                    {project.description}
                                </span>
                                <div className="link-container-project">
                                    <a
                                        className="project-link"
                                        href={project.link}
                                        rel='noopener noreferrer'
                                        target='_blank'>
                                        <img
                                            src={github}
                                            alt="github-icon" />
                                        {'Github Repository'}
                                    </a>
                                    <a
                                        className="project-link"
                                        href={project.demo}
                                        rel='noopener noreferrer'
                                        target='_blank'>
                                        <img
                                            src={site}
                                            alt="github-icon" />
                                        {'Demo Website'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

};

export default Portfolio;