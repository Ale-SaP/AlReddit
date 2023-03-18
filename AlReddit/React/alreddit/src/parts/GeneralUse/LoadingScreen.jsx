export default function LoadingScreen({Txt}) {
    return(
            <div className="content distance">
                <h3>{Txt}</h3>
                <progress className="progress is-small is-primary" max="100">15%</progress>
            </div>
        )
}

LoadingScreen.defaultProps = {
    Txt:"Loading!"
}