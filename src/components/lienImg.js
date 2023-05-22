const LienImg = ({ img, lien }) => {
  
    return (
      <section>
        <a href={lien} >
      <img src={img} style={{width: '50px',height: 'auto'}}/>
      </a>
      </section>
    )
  }
  
  export default LienImg;