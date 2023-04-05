import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AuthPage({ setUser }) {

    const [showLogInForm, setShowLogInForm] = useState(true)

    const toggleForm = () => {
        setShowLogInForm((prevForm) => !prevForm)
    }

    return (
        <main>
            <Typography variant="h4">Money Gone</Typography>
            <div> 
                <div>
                    {showLogInForm ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                    <Typography>{showLogInForm ? 'Don\'t have an account??' : 'Already have an account?'}</Typography>
                    <Button onClick={toggleForm} variant="" >{showLogInForm ? 'Sign Up' : 'Log In'}</Button>
                </div>
            </div>
        </main>
    )
}