import React from 'react';
import projectPic from '../../Illustration/20 [Converted]@2x.png';

const RunningProject = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={projectPic} alt="" />
                </div>
                <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                    <div>
                        <h3 className="font-weight-bold">Stay Running & Project</h3>
                        <p className="text-secondary">It is a long established fact that a reader wiil be distracted by the readable content of page when looking at this layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</p>
                        <button class="button customButton neutral">Contact us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningProject;