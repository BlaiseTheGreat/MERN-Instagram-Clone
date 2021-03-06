import React, {useEffect, useState, useContext } from 'react';
import {UserContext} from '../../App'

const Profile = () => {
    const [mypics, setPics] = useState([])
    const {state, dispatch} = useContext(UserContext);
    useEffect(() => {
        fetch('/myposts', {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.myposts);
        })
    }, [])
    return (
        <div className="Profile" style={{maxWidth: "550px", margin: "0px auto"}}>
            <div style={{
                    display: "flex",
                    justifyContent:"space-around",
                    margin:"18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                <div>
                    <img alt="" style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1585602173562-e7eeb0e6f380?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h4>{state?state.name:"loading..."}</h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "108%"
                    }}>
                        <h6>40 posts</h6>
                        <h6>404 followers</h6>
                        <h6>217 following</h6>
                    </div>
                </div>
            </div>
        
            <div className="gallery">
                {
                    mypics.map(item=>{
                        return(
                            <img key={item._id} className="item" alt={item.title} src={item.photo}/>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Profile;