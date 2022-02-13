import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import tw from 'twin.macro';
import { init } from 'ityped';
import styled, { keyframes } from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';
import PERFIL from '../../img/perfil_intro_circle.png';

const breatheAnimation = keyframes`
    50% { opacity: 1; }
    100% { opacity: 0; }
`

const breatheAnimationArrow = keyframes`
    100% { opacity: 0; }
`
const IntroSection = tw.section`
    top-20 
    h-[calc(100vh - 80px)]
    relative
    flex
    flex-col
    lg:flex-row
    items-center
    overflow-hidden
    bg-bookmark-white
    dark:bg-bookmark-black
`;

const IntroLeft = tw.div`
    flex-1
    overflow-hidden
`;

const IntroImgContainer = tw.div`
    //bg-bookmark-purple
    w-[700px]
    h-[700px]
    rounded-full
    flex
    items-start
    lg:items-end
    justify-center
    lg:float-right
`;

const IntroImg = tw.img`
    h-1/2
    lg:h-[90%]
`;

const IntroReight = tw.div`
    flex-1
`;

const IntroWrapper = tw.div`
    w-full
    h-full
    lg:pl-12
    flex
    flex-col
    items-center
    lg:items-start
    justify-center
`;

const IntroHello = tw.h2`
    text-3xl
    lg:text-4xl
    text-bookmark-blue
    dark:text-bookmark-white
`;

const IntroName = tw.h1`
    my-2.5
    text-4xl
    lg:text-6xl
    text-bookmark-blue
    dark:text-bookmark-white
`;

const IntroJob = tw.h3`
    text-2xl
    lg:text-3xl
    text-bookmark-blue
    dark:text-bookmark-white
`;

const IntroHab = styled.span`
    ${tw`
        text-2xl
        text-bookmark-purple
    `}
    //animation: blink 1s infinite;
    animation-name: ${breatheAnimation};
`;

const TopLink = styled.div`
    animation: arrowBlink 2s infinite;
    animation-name: ${breatheAnimationArrow};
    ${tw`
        absolute
        bottom-2.5
        left-[40%]
        lg:left-[70%]
        text-bookmark-purple
        dark:text-bookmark-white
        cursor-pointer
    `}
`;

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer', 'Content Creator']
        })
    }, []);

    return (
        <IntroSection id='home'>
            <IntroLeft>
                <IntroImgContainer>
                    <IntroImg src={PERFIL} alt='profile' />
                </IntroImgContainer>
            </IntroLeft>
            <IntroReight>
                <IntroWrapper>
                    <IntroHello>Hi There, I'm</IntroHello>
                    <IntroName>Jonnathan Espinoza</IntroName>
                    <IntroJob>Freelance <IntroHab ref={textRef}></IntroHab></IntroJob>
                </IntroWrapper>
                <TopLink>
                    <Link to='about' smooth={true} duration={1000}>
                        <KeyboardArrowDown style={{ fontSize: "50px" }} />
                    </Link>
                </TopLink>
            </IntroReight>
        </IntroSection>
    )
}

export default Intro    