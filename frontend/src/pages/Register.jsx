import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa'

import api from '../services/api'
import './Register.css'

function Register() {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] =
        useState(false)

    const {
        register,
        handleSubmit
    } = useForm()

    const submitHandler = async (
        formData
    ) => {
        try {

            await api.post(
                '/auth/register',
                formData
            )

            alert(
                'Registration Successful'
            )

            navigate('/')

        } catch (error) {

            console.log(error)

            alert(
                'Registration Failed'
            )
        }
    }

    return (
        <div className="register-page">

            <div className="register-card">

                <div className="register-left">
                    <h1>Join SmartBuy</h1>

                    <p>
                        Create your account and
                        start shopping the latest
                        electronics with amazing
                        deals.
                    </p>

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                        alt="register"
                    />
                </div>

                <div className="register-right">

                    <div className="register-header">
                        <h2>Create Account</h2>

                        <p>
                            Sign up to continue
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(
                            submitHandler
                        )}
                    >

                        <div className="input-box">
                            <FaUser className="icon" />

                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register('name')}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <FaEnvelope className="icon" />

                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register('email')}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <FaLock className="icon" />

                            <input
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Password"
                                {...register(
                                    'password'
                                )}
                                required
                            />

                            <span
                                className="eye-icon"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Create Account
                        </button>

                        <p className="bottom-text">
                            Already have an account?

                            <Link to="/">
                                Login
                            </Link>
                        </p>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Register