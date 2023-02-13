import NavBar from "./NavBar";

export default function HomeScreen() {
    return(
        <div>
            <NavBar />
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">
                        Welcome to AlReddit!
                    </h1>
                    <p className="subtitle">
                        A better Reddit experience
                    </p>
                </div>
            </section>
        </div>
    )
};