import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, updatePassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify'

const ChangePass = () => {
    const [newPassword, setNewPassword] = useState()
    const [error, setError] = useState(null)
    const auth = getAuth();
    const user = auth.currentUser;

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updatePassword(user, newPassword)
            .then(() => {
                notifyChangePassSuccess()
            }).catch((error) => {
                setError(error.message)
                notifyErrorChangePass()
            });
    }
    const handleChange = ({ target: { value } }) => {
        setNewPassword(value)
    }
    const notifyChangePassSuccess = () => {
        toast.success('🦄 Change password successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const notifyErrorChangePass = () => {
        toast.error('Error change password, try again', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div>
            <div className='container-sm d-flex flex-column align-items-center justify-content-center mx-auto vh-100'>
                {error && <p>{error}</p>}
                <div className="w-75 h-75 bg-light d-flex flex-column align-items-center mx-auto">
                    <h2 className="fs-3 my-4">Change password</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="my-2 form-control"
                            onChange={handleChange}
                            type="password"
                            placeholder="password"
                            name="password">
                        </input>
                        <button type='submit' className='btn btn-success my-4 w-100'>Save</button>
                        <Link to='/' className='btn btn-success my-4 w-100'>Back to home</Link>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ChangePass