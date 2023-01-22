export default function MainPage() {
    const onclick = () => {
        console.log("Clicked!");
    };

    return (
        <button className="button is-dark" onClick={onclick()}>Button!</button>
    )
}