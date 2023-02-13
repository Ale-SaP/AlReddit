export default function LoadingScreen() {
    return(
            <div className="content distance">
                <h3> Your authorization was recieved, wait a second! </h3>
                <progress className="progress is-small is-primary" max="100">15%</progress>
            </div>
        )

}