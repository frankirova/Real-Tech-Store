import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"

import { authContext } from "../Context/LoginContext";

const Login = () => {

    const { login, setIsLoggedIn, error } = useContext(authContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = await login(user.email, user.password)
        if (!error) {
            navigate('/')
            setIsLoggedIn(true)
        }
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center mx-auto vh-100'>
            {error && <p>{error}</p>}
            <div className="w-75 h-75 bg-light d-flex flex-column align-items-center mx-auto">
                <h2 className="fs-2 my-4">Log in</h2>
                <form className="w-50 my-5" onSubmit={handleSubmit}>
                    <label className="d-flex mx-2 text-secondary">E-Mail</label>
                    <input
                        className="my-2 form-control"
                        onChange={handleChange}
                        type="email"
                        name="email">
                    </input>
                    <label className="d-flex mx-2 text-secondary">Password</label>
                    <input
                        className="my-2 form-control"
                        onChange={handleChange}
                        type="password"
                        name="password">
                    </input>
                    <button className='btn btn-success my-4 w-100'>Login</button>
                    <Link to='/register' className='btn text-success w-100'>Sign up</Link>

                </form>
            </div>
        </div>
    )
}
export default Login