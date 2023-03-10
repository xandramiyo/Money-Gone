import './AuthPage.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main className="auth-ctr">
            <h1>Money Gone</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}