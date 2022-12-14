import React from 'react';
import { Link } from 'react-router-dom';

const CharityCards = (props) => {

    const { image, title, description, raised, goal } = props;
    const progress = raised / goal * 100;

    return (
        <div class="col-lg-6 col-md-6 col-12 mb-4 mb-lg-4">
            <div class="custom-block-wrap">
                <img src={image}
                    class="custom-block-image img-fluid" alt=""/>

                <div class="custom-block">
                    <div class="custom-block-body p-3">
                        <h5 class="mb-3">{title}</h5>

                        <p>{description}</p>

                        <div class="progress mt-4">
                            <div class={`progress-bar w-${progress}`} role="progressbar" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div class="d-flex align-items-center my-2">
                            <p class="mb-0">
                                <strong>Raised: </strong>
                                 Rp. {raised}
                            </p>

                            <p class="ms-auto mb-0">
                                <strong>Goal:</strong>
                                Rp. {goal}
                            </p>
                        </div>
                    </div>

                    <Link to="/donation" class="custom-btn btn">Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default CharityCards;
