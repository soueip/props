import React from 'react'
import Main from './Main'
import PropTypes from 'prop-types';
function Profile({Name,Bio,Prof,handleAlert}) {
  return (
    <div>
        <h1>{Name}</h1>
        <h1>{Bio}</h1>
        <h1>{Prof}</h1>
        <Main Name={Name}>
    <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/284253329_5086809318069132_8546343662241516208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JwxJNF5GT5YAX-yI9LF&_nc_oc=AQm3dfL7MN3FwF5RNHf771fG5BfHG5XrI-HQCx0mQcoGeJ7hnxfqi9gGwvI2OXKnolY&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_gHGLZD9BtxyXeTBKDz5eq02G4hRGWRx9zXuuJH9_nIg&oe=62B6F1AA"/>

        </Main>
        <button onClick={()=>handleAlert(Name)}>click here to show name</button>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "Mohamed",
    Bio: "i have 23 years old",
    profession: "student"
  }

  Profile.propTypes = {
    Name: PropTypes.string,
    Bio:PropTypes.string,
    Prof:PropTypes.string
  };
export default Profile