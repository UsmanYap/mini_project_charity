import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
import InputName from '../input/InputName';


const Signup = () => {

    const onChangeExp = () => {
        console.log('gg')
    }

    return (
        <main>

        <section className="donate-section">
            <div className="section-overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mx-auto">
                        <div className="custom-form donate-form" action="#" method="get" role="form">
                            <h3 className="mb-4 text-center">Signup</h3>

                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <h5 className="mb-3">Name</h5>
                                </div>

                                <InputName onChangeFirst={onChangeExp} onChangeLast={onChangeExp} />

                                <div className="col-lg-12 col-12 mt-4">
                                    <h5 className="mb-2">Email</h5>
                                </div>

                                <Input name="Email" type="email" onChange={onChangeExp}/>

                                <div className="col-lg-12 col-12 mt-4 mb-1">
                                    <h5 className="mb-2">Password</h5>
                                </div>

                                <Input name="Password" type="password" onChange="onChangeExp"/>

                                <Input name="Re-Password" type="password" onChange="onChangeExp"/>

                                <div className="col-lg-12 col-12 mt-2 justify-content-center text-center">
                                        <button type="button" className="form-control mt-4 mb-3">Register</button>
                                        <p className='mt-2 mb-2'>or</p>
                                        <Link to='/login' className='text-center mt-3'>Login</Link>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
    );
};

export default Signup;
