import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/input/Input';
import InputName from '../components/input/InputName';
import TitleInput from '../components/input/TitleInput';

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
                                <TitleInput title="Name" />

                                <InputName onChangeFirst={onChangeExp} onChangeLast={onChangeExp} />

                                <TitleInput title="Email" />

                                <Input name="Email" type="email" onChange={onChangeExp}/>

                                <TitleInput title="Password" />

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
