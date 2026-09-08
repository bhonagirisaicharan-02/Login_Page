import React from 'react'
import './SignUp.css'

function SignUp() {
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")

    function submitForm(e) {
        e.preventDefault()
        alert(`Email: ${email}, Password: ${password}`)
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <input type="text" placeholder='Username' />
                </div>
                <div>
                    <span>Email: </span>
                    <input type="email" placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>Password: </span>
                    <input type="password" placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <span>Confirm Password: </span>
                    <input type="password" placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div>
                    <button>submit</button></div>
            </form>
        </div>
    )
}

export default SignUp
