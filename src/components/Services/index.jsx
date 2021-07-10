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
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Day trading discussion</ServicesH2>
                    <ServicesP>Chat or discuss about anything related to day trading.</ServicesP>
                </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon1}/>
                        <ServicesH2>Giveaways</ServicesH2>
                        <ServicesP>Weekly/Bi-Weekly giveaways for Bank Bros’s Premium members only.</ServicesP>
                    </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={icon2}/>
                            <ServicesH2>Daily voice chat</ServicesH2>
                            <ServicesP>Informative voice training sessions. Live stock trading sessions and more.</ServicesP>
                        </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services