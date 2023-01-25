import LoginButton from "./LoginButton";

export default function HomeScreen() {
    return(
        <div>
            <section className="section">
                <div className="container is-grey-dark">
                    <h1 className="title">
                        Hello World
                    </h1>
                    <p className="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                    <LoginButton />
                </div>
            </section>
        </div>
    ) }