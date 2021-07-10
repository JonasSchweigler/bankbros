import React, {useState} from 'react'
import InfoSection from '../components/InfoSection'
import ScrollButton from "../components/ScrollDown";
import {LinkerButton, BackWrapper} from "../components/Linker";
import {FaArrowCircleLeft} from 'react-icons/fa';
import {
    homeObjFour,
} from "../components/InfoSection/Data";
import {
    UnderTitle,
    ContentWrapper,
    TextWrapper,
    Paragraph,
    LinkTreeBox,
    JoinSection,
    BenefitBox,
    BenefitWrapper,
    Wrapper,
    Title,
} from './Join.style'
import {Button} from "@material-ui/core";


const SignInPage = () => {

    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0){
            setVisible(false)
        }
        else if (scrolled <= 0){
            setVisible(true)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Wrapper>
            <BackWrapper to='/'>
                <LinkerButton>
                    <FaArrowCircleLeft style={{display: visible ? 'inline' : 'none'}}/>
                </LinkerButton>
            </BackWrapper>
                <InfoSection {...homeObjFour} />
                <ScrollButton />
            <ContentWrapper  id='join'>
                <Title>Our Options</Title>
{/*                <JoinSection>
                    <TextWrapper>
                        <UnderTitle style={{
                            'color' : 'lightgreen',
                        }} >Socials and Community</UnderTitle>
                        <Paragraph>
                            In here you will find several links to our social-meadia platforms. You can check them out for more information and trailers about our services on bankbros.
                        </Paragraph>
                    </TextWrapper>
                    <LinkTreeBox>
                        <h3 style={{
                            'color': 'lightgreen',
                        }}
                        >Social Links</h3>
                        <hr style={{
                            'width' : '50%',
                        }} />
                        <a href="https://discord.gg/D2BAF3SHMu" style={{
                            'color' : 'white',
                        }}>
                            <div className='link-element'>
                                <h4>Discord</h4>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/tradelab.crypto/" style={{
                            'color' : 'white',
                        }}>
                            <div className='link-element'>
                                <h4>Instagram</h4>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@tradelab" style={{
                            'color' : 'white',
                        }}>
                            <div className='link-element'>
                                <h4>tiktok</h4>
                            </div>
                        </a>
                    </LinkTreeBox>
                </JoinSection>
                <hr style={{
                    'margin': '20px',
                    'width' : '70%',
                }} />*/}
                <JoinSection>
                    <BenefitWrapper>
                        <BenefitBox>
                            <UnderTitle style={{
                                'color' : 'lightgreen',
                            }} >Discord Benefits</UnderTitle>
                            <div className='listWrapper'>
                                <ul>
                                    <li>
                                        <p className='benefit'>YouTube Lessons</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>Free Trading Discussion</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>Fast Support</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>24/7 Available</p>
                                    </li>
                                </ul>
                            </div>
                        </BenefitBox>
                        <BenefitBox>
                            <UnderTitle style={{
                                'color' : 'lightgreen',
                            }} >Premium Benefits</UnderTitle>
                            <div className='listWrapper'>
                                <ul>
                                    <li>
                                        <p className='benefit'>Premium Trade Alerts</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>Personal Talk to Owners (Help/Support)</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>Giveaways</p>
                                    </li>
                                    <li>
                                        <p className='benefit'>Daily voice chat</p>
                                    </li>
                                </ul>
                            </div>
                        </BenefitBox>
                    </BenefitWrapper>
                    <LinkTreeBox>
                        <Button style={{
                            'color': 'white',
                            'background-color' : 'green',
                        }} href='https://discord.com/channels/815408378607173652/815408378628669489/815414283046617100'>
                            Join BankBros Discord Server
                        </Button>
                        <hr style={{
                            'width' : '50%',
                        }} />
                        <Button style={{
                            'color': 'white',
                            'background-color' : 'darkorange',
                        }} href='https://upgrade.chat/checkout/815408378607173652'>
                            Get Premium BankBros Access
                        </Button>
                    </LinkTreeBox>
                </JoinSection>
            </ContentWrapper>
        </Wrapper>

    )
}

export default SignInPage