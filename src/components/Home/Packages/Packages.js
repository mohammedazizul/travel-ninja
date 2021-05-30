import React from 'react';
import PackageCard from './PackageCard/PackageCard';
import data from '../../../fakedata/PACKAGE_MOCK_DATA.json';

const Packages = () => {

    // console.log(data);

    const handlePackageClicked = (id) => {
        console.log("Package ID: ",id);
        alert("thanks for booking, we will get back to you soon !")
    }

    return (
        <div className="container bg-light m-5 border border-info rounded">
            <div class="d-flex justify-content-center">
                <h1>Our Travel Packages</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    data.map(packageInfo => 
                        <PackageCard 
                        data={packageInfo} 
                        key={data.id} 
                        handlePackageClicked={handlePackageClicked}
                        ></PackageCard>
                    )
                }
            </div>
        </div>

    );
};

export default Packages;