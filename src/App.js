import logo from "./image.png";
import "./App.css";
import Profile from './components/profile';
import Projet from "./components/projet";
import linkedin from './Linkedin.png';
import Github from './github-mark-white.png'
import LienImg from "./components/lienImg";
import Skills from "./components/Skills";
import Map from './components/Map';

const competences = [
  { id: 1, nom : 'Symfony', niveau: 6},
  { id: 2, nom : 'Javascript', niveau: 5},
  { id: 3, nom : 'JQuery', niveau: 5},
  { id: 4, nom : 'NodeJs', niveau: 4}
]
const formations =[
  {id:1, titre:'Bachelor  Développeur Fullstack et DevOps', date: "Septembre 2022 à septembre 2023", lieu:"IPSSI SQY - ÉCOLE D'INFORMATIQUE WEB ET DIGITAL MARKETING"},
  {id:2, titre:'Licence Métier de l\'informatique : Conception développement et test de logiciels parcours :développement Web et mobile', date: "Septembre 2021 à juillet 2022", lieu:"IUT INFORMATIQUE DE L'UNIVERSITÉ D'ORLÉANS"},
  {id:3, titre:'Dut Informatique', date: "2019 à 2021", lieu:"IUT INFORMATIQUE DE L'UNIVERSITÉ D'ORLÉANS"}
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
        <section>
          <h2>Formations</h2>
          {formations.map((data, id) => (
            <Map key={id} titre={data.titre} date={data.date} lieu={data.lieu}/>
          ))}
        </section>
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
