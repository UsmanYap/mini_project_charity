import React, { useState } from 'react';
import Input from '../input/Input';
import TitleInput from '../input/TitleInput';
import InputTransfer from '../donation/InputTransfer';

const AddCharity = (props) => {
    const [filePay, setfilePay] = useState();
    
    const onChangeFile = (event) => {
        var FileNameInput = event.target.files[0];
        setfilePay(FileNameInput);
    };


    return (
        <div class="modal fade" id={props.name} tabindex="-1" aria-labelledby="CharityModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-body p-0">

                <div className="custom-form donate-form" action="#" method="get" role="form">
                    <h3 className="mb-4 text-center">{props.title}</h3>

                    <div className="row p-0 justify-content-center">
                        <TitleInput title="Title" />

                        <Input name="Title" type="text"/>

                        <TitleInput title="Description" />

                        <div className='mb-2'>
                            <textarea name="description" rows="3" class="form-control" id="description"
                                    placeholder="Description"></textarea>
                        </div>

                        <TitleInput title="Goal" />

                        <InputTransfer placeholder={`Rp`} value="Nominal" disable={false}/>

                        <TitleInput title="Image" />

                        <div class="col-lg-12 col-12">
                            <div class="input-group input-group-file mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" onChange={onChangeFile}/>
                                
                                <label class="input-group-text" id="custom-label-file" for="inputGroupFile02">
                                    {filePay ? filePay.name : "Upload Proof of Payment" }
                                </label>

                                <i class="bi-cloud-arrow-up ms-auto"></i>
                            </div>
                            
                        </div>



                        <div className="col-lg-12 col-12 p-2 m-2 justify-content-center text-center row">
                            <button type="button" className="form-control col-4 mb-3">Create</button>
                            <button type="button" className="form-control col-4 mb-3 " data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}

export default AddCharity;