import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({data,handlename,children}) => {
     return (
        <div>
            <h3 style={{color:'lightblue' }}>{data.fullname}</h3>
            <h5> {data.bio}</h5>
            <h5>{data.profession}</h5>
            <div className="icon"> {children}</div>
            <button onClick={()=>handlename(data.fullname)} style={{color:"black",backgroundColor:"green"}}>Click me</button>
        </div>
    )
}
Profile.propTypes={
    handlename:PropTypes.func,
    data:PropTypes.object
}
Profile.defaultProps={     fullName : "Sassi Montassar", 
    bio : "Simplicity is the key to happiness",  
       profession  : "Full Stack Developer"   }
export default Profile
