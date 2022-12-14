import React, { useState } from 'react';
import TransferPayment from '../components/donation/TransferPayment';
import Input from '../components/input/Input';
import InputName from '../components/input/InputName';

const Donation = () => {

    const [anonym, setanonym] = useState(true);
    const [filePay, setfilePay] = useState();
    const [payment, setpayment] = useState({
        method: "",
        number: ""
    });
    
    const onChangeFile = (event) => {
        var FileNameInput = event.target.files[0];
        setfilePay(FileNameInput);
    };


    return (
        <main>

        <section className="donate-section">
            <div className="section-overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mx-auto">
                        <div className="custom-form donate-form" action="#" method="get" role="form">
                            <h3 className="mb-4">Donation</h3>

                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <h5 className="mb-3">Personal Info</h5>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency non-anonym">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" id='non-anonym' name="Personal-info" onClick={() => {setanonym(true)}} checked={anonym}/>

                                        <label className="form-check-label" htmlFor="non-anonym">
                                            Your Data
                                        </label>
                                    </div>
                                    <p></p>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="Personal-info" onClick={() => {setanonym(false)}} id="Anonymous" />

                                        <label className="form-check-label" htmlFor="Anonymous">
                                            Anonymous
                                        </label>
                                    </div>
                                </div>

                                {

                                    anonym && (
                                        <>
                                            <InputName />

                                            <Input name="Email" type="email"/>

                                            <Input name="Phone Number" type="text"/>
                                        </>
                                    
                                    )
                                }

                                    

                                <div className="col-lg-12 col-12 mt-3">
                                    <h5 className="mt-2 mb-3">Amount</h5>
                                </div>

                                <div className="col-lg-12 col-12 form-check-group">
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">Rp</span>

                                        <input type="text" className="form-control" placeholder="Amount"
                                            aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                

                                <div className="col-lg-12 col-12 mb-2 ">
                                    <h5 className="mt-4">Choose Payment</h5>
                                </div>

                                <div className="col-lg-12 col-12 row">
                                    <div className="col-lg-3 col-6 form-check-group form-check-group-donation-frequency bca">
                                        <div className="form-check form-check-radio">
                                            <input className="form-check-input" type="radio" name="payment"
                                                id="bca" onChange={() => {setpayment({method:"BCA", number:"123123123123"}) }} />

                                            <label className="form-check-label" htmlFor="bca">
                                                BCA
                                            </label>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3 col-6 form-check-group form-check-group-donation-frequency ">
                                        <div className="form-check form-check-radio">
                                            <input className="form-check-input" type="radio" name="payment"
                                                id="gopay" onChange={() => {setpayment({method:"GOPAY", number:"123999999"}) }} />

                                            <label className="form-check-label" htmlFor="gopay">
                                            GOPAY
                                            </label>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3 col-6 form-check-group form-check-group-donation-frequency">
                                        <div className="form-check form-check-radio">
                                            <input className="form-check-input" type="radio" name="payment"
                                                id="ovo" onChange={() => {setpayment({method:"OVO", number:"1239992139"})  }} />

                                            <label className="form-check-label" htmlFor="ovo">
                                                OVO
                                            </label>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>

                                { payment.method ? <TransferPayment number={`${payment.number}`} method={`${payment.method}`} /> : <></>}
                                

                                <div class="col-lg-12 col-12">
                                    <div class="input-group input-group-file mb-0">
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={onChangeFile}/>
                                        
                                        <label class="input-group-text" id="custom-label-file" for="inputGroupFile02">
                                            {filePay ? filePay.name : "Upload Proof of Payment" }
                                        </label>

                                        <i class="bi-cloud-arrow-up ms-auto"></i>
                                    </div>
                                    
                                </div>

                                <div className="col-lg-12 col-12 mt-3">

                                    <button type="button" className="form-control mt-2">Submit Donation</button>

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

export default Donation;
