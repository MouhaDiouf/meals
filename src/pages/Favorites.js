import React from 'react'
import {db} from '../firebase'; 
import {useContext} from 'react'; 
import {useParams, useHistory} from 'react-router-dom';
import {MealsContext} from '../Context'

function Favorites() {
    const {id} = useParams(); 
    const {currentUser} = useContext(MealsContext); 
    const history = useHistory();
    console.log(id, currentUser.uid)
    if(id !== currentUser.uid){
        history.replace('/')
    }
    return (
        <div>
            <h2>Favorites</h2>
        </div>
    )
}

export default Favorites
