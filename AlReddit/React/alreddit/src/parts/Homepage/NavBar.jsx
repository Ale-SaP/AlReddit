import { useNavigate } from "react-router-dom"
export default function NavBar() {

    const navigate = useNavigate()

    const onclick = () => {
        navigate("/load-link")
    }

    const onHome = () => {
        navigate("/home")
    }

    const onGithub = () => {
        window.location.href = "https://github.com/Ale-SaP/AlReddit"
    }

    const onContact = () => {
        window.location.href = "https://github.com/Ale-SaP/AlReddit"
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="/home" onClick={onHome} className="button navbar-item">Home</a>
                                <a href="/home/load-link" onClick={onclick} className="navbar-item button is-primary">Login!</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="https://github.com/Ale-SaP/AlReddit" onClick={onGithub} className="button is-dark">Github</a>
                                <a href="https://github.com/Ale-SaP/AlReddit" onClick={onContact} className="button is-link">About Us!</a>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}