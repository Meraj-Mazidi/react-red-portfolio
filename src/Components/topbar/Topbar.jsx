import "./topbar.scss"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <i className="material-icons">person</i>
                        <span>
                            <p>+98 936 334 7522</p>
                        </span>
                        <i className="material-icons">mail</i>
                        <span>
                            <p>merajmazidiwork@gmail.com</p>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div >
    )
}
