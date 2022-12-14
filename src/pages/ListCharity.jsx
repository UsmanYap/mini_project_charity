import React from 'react';
import SideBar from '../components/SideBar.jsx/SideBar';
import Header from '../components/navbar/Header';
import CharityCards from '../components/Cards/CharityCards';

const ListCharity = () => {
    return (
        <main>
        
        <Header title="Charity"/> 

        <section className="news-section section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-7 col-12 row">

                        <CharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />

                        <CharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />

                        <CharityCards 
                            image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`} 
                            title="Children Education" 
                            description="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
                            raised={30000}
                            goal={60000} />
                    </div>

                    <SideBar />

                </div>
            </div>
        </section>
        </main>
    );
};

export default ListCharity;