import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';




const getVerifiedName = async(token,username) =>{

  const data = await axios.post("http://localhost:3000/api/users/getUserByUsername",{ Username:username,token:token });

  return data;  
}
const Header = () => {

  const [loggedIn,setLoggedIn] = useState(false);

  
  let token,username;

  if(localStorage.getItem("medconlogintoken") && localStorage.getItem("medconloginusername"))
  {
    token = localStorage.getItem("medconlogintoken");
    username = localStorage.getItem("medconloginusername");
    const verificationResponse = getVerifiedName(token,username);

    if(verificationResponse == true){
      setLoggedIn(true);
    }
  }

  



  return (
    <header className="flex flex-col w-full bg-blue-500 text-white p-4 items-center justify-center ">
      <h1 className="flex  text-4xl font-bold ">Medical Appointment System</h1>
      <nav className="mt-4">
        <b>
        {loggedIn && (
         <div>
           logged {username}
         </div>
        )}

        </b>
      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>About</Button>
      <Button>Facilities</Button>
      <Button>SuperAdmin</Button>
    </ButtonGroup>
      </nav>
    </header>
  );
};

export default Header;
