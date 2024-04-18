import { Props } from "../utils/types";

function Navigation(props: Props) {
    const { display } = props;

    const screen = (str: string) => {
        display(str);
    }

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li onClick={() => screen('summary')}>Home</li>
                    <li onClick={() => screen('portfolio')}>Portfolio</li>
                    <li onClick={() => screen('skills')}>Skills</li>
                    <li onClick={() => screen('message')}>Contact</li>
                </ul>
            </nav>

        </>
    )
}

export default Navigation;