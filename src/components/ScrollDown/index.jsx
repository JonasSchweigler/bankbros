import React, {useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import { Button } from './ScrollDownElements';
import {scroller} from 'react-scroll';

const ScrollButton = () =>{

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

    const scrollToBottom = () =>{
        scroller.scrollTo("benefit", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });

            /* you can also use 'auto' behaviour
                in place of 'smooth' */
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaArrowCircleDown onClick={scrollToBottom}
                               style={{display: visible ? 'inline' : 'none'}} />
        </Button>
    );
}

export default ScrollButton;