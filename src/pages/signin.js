import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import BlackBird from '../component/blackbirdsvg'
import SignInForm from '../component/signinform'
import './signin.css'

const SignIn = () => {
    const [showSignIn, setShowSignIn] = useState(false)


    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/home')
    }
    return <>
    <div className='main'>
       
       { showSignIn && <SignInForm onClick={()=>setShowSignIn(false)}/>}

        <div class="left">
            <BlackBird/>
            
        </div>
        <div class="right">
            <div class="right-content">
                <span class="header-text">
                    Happening now
                </span>

                <span class="header3-text">
                    Join Qitter today.
                </span>
                <div class="login-btn" onClick={handleLogin}>
                    Sign in with Doodle
                </div>
                <div class="login-btn" onClick={handleLogin}>
                    Sign up with PineApple
                </div>
                <div class="divider-or">
                    <div class="divider-side"></div>
                    <div class="divider-text">or</div>
                    <div class="divider-side"></div>
                </div>

                <div class="login-btn blue-login" onClick={()=>setShowSignIn(true)}>
                    Sign up with phone or email
                </div>
                <div class="terms-of-service">
                    By signing up, you agree to the <a href="#">Terms of Service</a>  and <a href="#">Privacy Policy</a> , including <a href="#">Cookie Use</a> .
                </div>

                <div class="login-account" >
                    <span class="header5-text">Already have an account?</span>
                    <div class="login-btn" onClick={()=>setShowSignIn(true)}>
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <nav>
            <a href="#">
                <span  class="footer-item">About</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Help Center</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Term of Service</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Privacy Policy</span>
            </a>
            <a  href="#">
                <span  class="footer-item">About</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Help Center</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Term of Service</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Privacy Policy</span>
            </a>
            <a  href="#">
                <span  class="footer-item">About</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Help Center</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Term of Service</span>
            </a>
            <a  href="#">
                <span  class="footer-item">Privacy Policy</span>
            </a>

            <span  class="footer-item"  >© 2022 Qitter, Inc.</span>
            
        </nav>
    </footer>
    </>
}

export default SignIn