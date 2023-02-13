import NavBar from "../Homepage/NavBar";

export default function LoginErrorPage() {
    return(
        <div>
            <NavBar />
            <section className="hero is-danger">
                <div className="hero-body">
                    <h1 className="title">
                        Whoops! An error ocurred!
                    </h1>
                    <p className="subtitle">
                        It seems our servers or Reddit's are down. <strong>Please stand by and try again!</strong>
                    </p>
                </div>
            </section>
        </div>
    )
};