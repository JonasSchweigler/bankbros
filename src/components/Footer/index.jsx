import React from 'react';
import { FooterWrapper } from './FooterElements';

function Footer() {
    return(
        <>
            <FooterWrapper>
                <div className='footer-parts'>
                    <div className='footer-element'>
                        Texas based
                    </div>
                    <div className='footer-element'>
                        |
                    </div>
                 {/*   <div className='footer-element'>
                        Affiliates
                    </div>*/}
                  {/*  <div className='footer-element'>
                        |
                    </div>*/}
                    <div className='footer-element'>
                        paypal@bankbros.net
                    </div>
                </div>
            </FooterWrapper>
        </>
    )
}

export default Footer