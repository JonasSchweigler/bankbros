import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesIcon, ServicesH2, ServicesP, ServicesWrapper } from  './ServicesElements'
import icon1 from '../../images/icon-1.svg'
import icon2 from '../../images/icon-2.svg'
import icon3 from '../../images/icon-3.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Benefits</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                    </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={icon3}/>
                            <ServicesH2>Premium Benefits</ServicesH2>
                            <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                        </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services