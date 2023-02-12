import LoginButton from "./LoginButton";

export default function HomeScreen() {
    /* return(
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
    ) */

    return (
    <div className="container">
      <h1 className="title">Welcome to AlReddit</h1>
      <p className="subtitle">The new and improved Reddit experience</p>
      <div className="columns">
        <div className="column">
          <h2 className="subtitle is-4">Subreddits</h2>
          <p>Discover new and exciting communities on AlReddit</p>
        </div>
        <div className="column">
          <h2 className="subtitle is-4">Conversations</h2>
          <p>Join the discussion on the hottest topics</p>
        </div>
        <div className="column">
          <h2 className="subtitle is-4">Entertainment</h2>
          <p>Find new and exciting content to watch, read, and listen to</p>
        </div>
      </div>
      <LoginButton/>
    </div>
  );
};