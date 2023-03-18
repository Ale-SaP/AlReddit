export default function ErrorPages({Title, Txt}) {
    return(
        <div>
            <section className="hero is-danger">
                <div className="hero-body">
                    <h1 className="title">
                        {Title}
                    </h1>
                    <p className="subtitle">
                        {Txt}
                    </p>
                </div>
            </section>
        </div>
    )
};