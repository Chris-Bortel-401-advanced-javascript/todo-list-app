import React, {useState} from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState({});

  const login = async (input) => {
    const API = process.env.REACT_APP_API;

    try {
    const response = await superagent.post(`${API}/signin`)
      .auth( input.username, input.password );
      console.log(response.body)
    const {token} = response.body;

    validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed');
    }

  }

  const validateToken = (token) => {

    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)
      // if we're here, the token was good
      setIsLoggedIn(true);
      console.log(tokenUser)
      setUsers(tokenUser)
      cookie.save('auth', token);
      // set a cookie so that we can stay logged in
      // Optionally, make it only last 1 hour or until you close
    } catch(e) {
      setIsLoggedIn(false);
      setUsers({});
      console.warn("Token Validation Error");
    }
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUsers({});
  }

  // useEffect( () => {
  //   const token = cookie.load('auth') || null;
  //   validateToken(token);
  // },[])

  return (
    <LoginContext.Provider
      value={ {isLoggedIn, users, login, logout} }
    >
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
