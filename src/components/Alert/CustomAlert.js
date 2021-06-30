import React from 'react';
import {useContext } from "react";
import {Alert} from 'react-bootstrap'; 
import { MealsContext } from "../../Context";
import PropTypes from 'prop-types'

export default function CustomAlert({msg, variant}) {
  const {setShowAlert} = useContext(MealsContext);
  
    // const [show, setShow] = useState(true);
  
    // if (show) {
      return (
        <Alert style={{width: '100%'}} variant={variant || 'danger'} onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>{msg || 'Default alert'}</Alert.Heading>
        </Alert>
       );

    
  }
  

  CustomAlert.propTypes = {
    msg: PropTypes.string, 
    variant: PropTypes.string
  }