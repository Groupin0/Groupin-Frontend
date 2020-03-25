import React,{useState} from 'react'
import ReactDOM from 'react-dom'
 
import SocialButton from './social-button'
import {getSocialUser,setSocialUser} from '../../../services/local-storage-service';
 

 
function Login() {


  
    const [ logged, setLoged ] = useState(getSocialUser());
    
    const logout= (currentProvider)=> {
       
   
      if (logged && currentProvider) {
        this.nodes[currentProvider].props.triggerLogout()
      }
    }


    const handleSocialLogin = (user) => {
        console.log(user);
        setSocialUser(user);
        setLoged(true);

      }
       
      const handleSocialLoginFailure = (err) => {
        console.error(err)
      }
      let elements=logged?<button onClick={()=>{setSocialUser(null);setLoged(false)}}>logout</button> :<div>
      <br/>
  <SocialButton
    provider='facebook'
    appId='338852220444884'
    onLoginSuccess={handleSocialLogin}
    onLoginFailure={handleSocialLoginFailure}
  >
    Login with Facebook
  </SocialButton>
  <br/>
  <SocialButton
    provider='google'
    appId='1059198198579-qlkq7i640ghemkmga1tuqmgq9n4kdjfj.apps.googleusercontent.com'
    onLoginSuccess={handleSocialLogin}
    onLoginFailure={handleSocialLoginFailure}
  >
    Login with google
  </SocialButton>
  </div>

    return (
    elements
  )
    }

    export default Login;