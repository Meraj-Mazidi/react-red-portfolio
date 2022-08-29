import TypeAnimation from 'react-type-animation';
import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <div className="img">
                        <img src="assests/me.png" alt="profile Picture" />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Meraj Mazidi</h1>
                    <h3>Freelance <span>
                        <TypeAnimation
                            cursor={true}
                            sequence={['Developer', 2000, '', 900, 'Designer', 2000, '', 900, 'Content Creator', 2000, '', 900]}
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assests/down.png" alt="downArrow" />
                </a>
            </div>
        </div>
    )
}
