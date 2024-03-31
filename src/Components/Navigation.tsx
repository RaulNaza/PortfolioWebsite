import N from '../assets/letter-n.png';
import G from '../assets/letter-g.png';

function Navigation() {
    //Should be moved to its own component
    const scrollTo = (section: string): void => {
        switch (section) {
            case 'Home':
                document.getElementById(section)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
                break;
            case 'Portfolio':
                document.getElementById(section)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
                break;
            case 'Skills':
                document.getElementById(section)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
                break;
            case 'Message':
                document.getElementById(section)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                break;
            default:
                break
        }
    }

    return (
        <>
            <div className="icon-container">
                <img className='header-icon' src={N} alt='Letter N' />
                <img className='header-icon' src={G} alt='Letter G' />
            </div>
            <nav className="navbar">
                <ul>
                    <li onClick={() => scrollTo('Home')}>Home</li>
                    <li onClick={() => scrollTo('Portfolio')}>Portfolio</li>
                    <li onClick={() => scrollTo('Skills')}>Skills</li>
                    <li onClick={() => scrollTo('Message')}>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;