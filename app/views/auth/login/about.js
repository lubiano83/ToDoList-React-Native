import LoginForm from "../../../components/users/auth/LoginForm";

export default function LoginView({ setLogged }) {
    return (
        <>
           <LoginForm setLogged={setLogged} />
        </>
    )
}