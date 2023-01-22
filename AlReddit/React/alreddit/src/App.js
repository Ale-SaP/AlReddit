import './App.css';
import MainPage from './parts/loginpage/MainPage';

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
      <MainPage />
    </div>
  );
}

export default App;
