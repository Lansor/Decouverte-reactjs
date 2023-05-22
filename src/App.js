import logo from "./image.png";
import "./App.css";
import Layout from './components/layout/layout';
import Projet from "./components/projet";

function App() {
  return (
    // <div className="App">
    //   <Layout>
    //     <Projet nom='Projet1' img={logo} lien='https://google.com'/>
    //     <Projet nom='Projet2' img={logo} lien='https://google.com'/>
    //     <Projet nom='Projet3' img={logo} lien='https://google.com'/>
        
    //   </Layout>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pour modifier la page c&#39;est ici :<code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>Martins  Killian  Developpeur web Fullstacks</section>
        <section>
         <a href="https://www.linkedin.com/in/killian-martins-161a401bb/">Linkedin</a>
        </section>
        <section>Compétences 
          -Nom de la Compétences
          -Niveau
        </section>
        <section>Expériences</section>
        <section>Formations</section>
        <section>Diplomes</section>
        <section>Centre d&#39;intéret</section>
        <section><a href="https://github.com/Lansor">Github</a></section>
        <section>
          Projet:
          -Nom
          -Description
          -Img
          -Lien
        </section>
      </header>
    </div>
  );
}

export default App;
