const Profile = ({ prenom, nom, role }) => {
  
    return (
      <section>
       {nom} {prenom} - {role}
      </section>
    )
  }
  
  export default Profile;