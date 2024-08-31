import React from 'react'

import { Button } from 'react-bootstrap'
    

//header
import HeaderStyle3 from '../../components/partials/dashboard/HeaderStyle/header-style-3'

//HorizontalMultiRouter 
import HorizontalMultiRouter from '../../router/horizontal-multi-router'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'
import { memo } from 'react';
import { Fragment } from 'react';
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'
import { useLocation } from 'react-router-dom'


const DualHorizontal = memo((props) => {
    const { pathname } = useLocation();

    return (
        <Fragment>
            <main className="main-content">
                <HeaderStyle3 />
                <div className="pb-0 conatiner-fluid content-inner">
                    <HorizontalMultiRouter />
                </div>
                <div className="btn-download">
                  
                </div>
                <Footer />
            </main>   
            {pathname === "/agent" && <SettingOffCanvas />}
        </Fragment>
    )
})

export default DualHorizontal
