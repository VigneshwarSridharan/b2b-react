import React from 'react';
import { APP_URL } from '../../constants/actionTypes';

function MobileAppPromo(props) {
    return (
        <div className="py-5">
            <div className="d-flex align-items-center justify-content-center">
                <h3 className="m-0">Download Via Mobile App & Get Amazing Discounts</h3>
                <img src={APP_URL + '/assets/images/google_play.png'} className="px-3" alt=""/>
                <img src={APP_URL + '/assets/images/apple_store.png'} className="px-3" alt=""/>
            </div>
        </div>
    )
}

export default MobileAppPromo;