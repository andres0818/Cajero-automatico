import React from 'react'
import './LoginRequired.scss'

interface UseNavigate {
    navigate: Function;
}


const LoginRequired = ({ navigate }: UseNavigate) => {
    return (
        <div className='loginRequired'>
            <div className='loginRequired__borderEffects'>
                <div className='loginRequired__container' >

                    <h1>Login Required</h1>
                    <div className='loginRequired__borderEffects loginRequired__borderBtn'>
                        <button className='loginRequired__btn' onClick={() => navigate('/cajero-automatico')}>Go login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRequired