import React from 'react'
import { useState } from 'react'
import { getAuth, updatePassword } from "firebase/auth";

const ChangePass = () => {
    const [newPassword, setNewPassword] = useState()
    const [error, setError] = useState(null)

    const auth = getAuth();
    const user = auth.currentUser;

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updatePassword(user, newPassword)
        .then(() => {
            console.log('Funco joya panita')
        }).catch((error) => {
            setError(error.message)
        });
    }
    const handleChange = ({ target: { value } }) => {
        setNewPassword(value)
        console.log(value)
    }

    return (
        <div>
            <div className='cont d-flex flex-column align-items-center justify-content-center mx-auto'>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        className="my-2 form-control"
                        onChange={handleChange}
                        type="password"
                        placeholder="password"
                        name="password">
                    </input>
                    <button type='submit' className='btn btn-success my-4 w-100'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default ChangePass