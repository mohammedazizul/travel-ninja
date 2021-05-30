import React from 'react';
import './Package.css';
import PackageCard from './PackageCard/PackageCard';
import data from '../../../fakedata/PACKAGE_MOCK_DATA.json';
//Redux Part
import { useDispatch } from "react-redux";
import {addToFavourite} from '../../../actions'

const Packages = () => {
    const dispatch = useDispatch();

    const handlePackageClicked = (id) => {
        const commonData=data.filter(fv=>fv.id===id);
        //Dispatching for Adding Clicked Data into STORE
        dispatch(addToFavourite(commonData[0]));
    }

    return (
        <div className="bg-light pt-4 pb-4 rounded package-area">
            <div className="container ">
                <h1 className="text-center">Our Travel Packages</h1>
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
        </div>

    );
};

export default Packages;