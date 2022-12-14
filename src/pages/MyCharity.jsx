import React from 'react';
import Header from '../components/navbar/Header';
import MyCharityCards from '../components/Cards/MyCharityCards';
import AddCharity from '../components/modal/AddCharity';

const MyCharity = () => {
    return (
        <main>
        
        <Header title="Your Charity"/> 

        <section className="news-section section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-12 row mb-5 justify-content-end">
                        <button type="button" class="btn custom-btn-add col-2 mr-2 custom-m" data-bs-toggle="modal" data-bs-target="#Charity">Create</button>
                        <div class="custom-form search-form col-3 custom-m m-0" action="#" method="post" role="form">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />

                            <button type="button" class="form-control">
                                <i class="bi-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-12 col-12 row">

                        <MyCharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />

                        <MyCharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />

                        <MyCharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />
                    </div>

                </div>
            </div>
        </section>
        <AddCharity title="Create Data Charity" name="Charity" />
        </main>
    )
}

export default MyCharity;