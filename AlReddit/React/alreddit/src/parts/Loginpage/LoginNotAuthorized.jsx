import NavBar from "../Homepage/NavBar";

export default function LoginNotAuthorized() {
    return(
        <div>
            <NavBar />
            <section className="hero is-danger">
                <div className="hero-body">
                    <h1 className="title">
                        Whoops! The session is not authorized!
                    </h1>
                    <p className="subtitle">
                        Try logging in again and when redirected, click <strong>Allow</strong>!
                    </p>
                </div>
            </section>
        </div>
    )
};