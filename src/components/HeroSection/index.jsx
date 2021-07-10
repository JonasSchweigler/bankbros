import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, ArrowForward, ArrowRight, HeroBtnWrapper } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The best way to start investing.</HeroH1>
                <HeroP>
                   BankBros
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection