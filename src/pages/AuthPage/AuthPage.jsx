// import './AuthPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AuthPage({ setUser }) {

    const [showSignUpForm, setShowSignUpForm] = useState(true)

    const toggleForm = () => {
        setShowSignUpForm((prevForm) => !prevForm)
    }

    return (
        <main>
            <Typography variant="h4">Money Gone</Typography>
            <div> 
                <div>
                    {showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
                    <Typography>{showSignUpForm ? 'Already have an account?' : 'Don\'t have an account?'}</Typography>
                    <Button onClick={toggleForm} variant="" >{showSignUpForm ? 'Log In' : 'Sign Up'}</Button>
                </div>
            </div>
        </main>
    )
}