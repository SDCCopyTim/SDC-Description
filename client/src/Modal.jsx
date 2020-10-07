import React from 'react';
import { AiFillApple } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Zoom from 'react-reveal/Zoom';



const Modal = ({handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return(
    <div className={showHideClassName}>
      <Zoom left>
      <div className="modal-main" >
        <div className="Welcome"><b>WELCOME BACK!</b>
          <p>Let's get you inside!</p>
        </div>
        <div className="Apple" className="hvr-bob">
          <div className="smolApple">
            <AiFillApple />Continue with Apple
        </div>
        </div>
        <div className="Facebook" className="hvr-bob">
          <div className="smolFacebook">
          <AiFillFacebook /> Continue with Facebook
          </div>
          </div>
        <div className="Or">or</div>
        <div className="SignIn" className="hvr-bob">
          <div className="smolSignIn">Sign in with your email address</div>
          </div>
        <div className="SignUp">Don't have a Hipcamp account? <b> Sign up!</b></div>
        <div className="close" onClick={handleClose}>x</div>
      </div>
    </Zoom>
    </div>
  )
};

export default Modal;