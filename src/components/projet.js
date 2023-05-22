const Projet = ({nom,img,lien}) =>{
    return(
        <>
            <h2>Je suis le projet : {nom}</h2>
            <img src={img} alt={nom} style={{width: '200px',height: '100px'}} />
            <a href={lien} title={nom} target="_blank" rel="noreferrer">
                Redirection 
            </a>
        </>
    )
}

export default Projet