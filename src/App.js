import logo from "./image.png";
import "./App.css";
import Profile from './components/profile';
import Projet from "./components/projet";
import linkedin from './Linkedin.png';
import Github from './github-mark-white.png'
import LienImg from "./components/lienImg";
import Skills from "./components/Skills";

const competences = [
  { id: 1, nom : 'Symfony', niveau: 6},
  { id: 2, nom : 'Javascript', niveau: 5},
  { id: 3, nom : 'JQuery', niveau: 5},
  { id: 4, nom : 'NodeJs', niveau: 4}
]

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
        </header>
        <main className="App-main">
        <Profile prenom='Killian' nom='Martins' role='Developpeur Full Stack'/>
        <LienImg img={linkedin} lien="https://www.linkedin.com/in/killian-martins-161a401bb/"/>
        <section>
          <h2>Compétences </h2>

          {competences.map((data, id) => (
            <Skills key={id} name={data.nom} level={data.niveau}/>
          ))}
          {/* {Competences.map((data, id) =>{
           return <Skills key={id} name={data.nom} level={data.niveau}/>
          }
          )} */}
        </section>
        <section>Expériences</section>
        <section>Formations</section>
        <section>Diplomes</section>
        <section>Centre d&#39;intéret</section>
      
        <LienImg img={Github} lien="https://github.com/Lansor"/>
        <section>
          Projet:
          -Nom
          -Description
          -Img
          -Lien
        </section>
        </main>
        </div>

  );
}

export default App;
