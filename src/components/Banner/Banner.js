import React from 'react';
import banner from '../../Illustration/16 [Converted]@2x.png';

const Banner = () => {
    return (
        <div>
             <div className="container py-5" id="banner">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 ">
                        <h1 className="pb-3 font-weight-bold">Florence <br/> agency</h1>
                        <p className="text-secondary"> Lorem Ipsum has been the industry's standerd dummy text ever sence the 1500's when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <button className="button customButton neutral">See Pricing</button>                    
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <img className="img-fluid" src={banner} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;