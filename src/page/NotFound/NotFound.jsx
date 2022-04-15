import { Helmet } from "react-helmet";
import tw from 'twin.macro';
import Lottie from 'react-lottie';
import * as NotFoundLigth from '../../animate/24454-404.json';

const Container = tw.div`
    w-screen
    h-screen
    //bg-black
`;

const Wrapper = tw.div`
    w-full
    h-full
    relative
    flex
    flex-col
    items-center
`;

const MessageContainer = tw.div`
    z-50
    p-4
    absolute
    top-[280px]
    text-center
`;

const Title = tw.h1`
    text-blue-800
    text-4xl
    font-bold
    mb-3
`;

const SubTitle = tw.h2`
    text-bookmark-purple
    text-2xl    
`;

const Message = tw.p`
    text-bookmark-purple
    text-2xl
    mb-10
`;

const Notfound = () => {

    const defaultOptionsAnimate = animateData => {
        return {
            loop: true,
            autoplay: true,
            animationData: animateData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Not Found | Portfolio - Jonnathan Espinoza</title>
            </Helmet>
            <Container>
                <Wrapper>
                    <Lottie options={defaultOptionsAnimate(NotFoundLigth)}
                        height={400}
                        width={400}
                    />
                    <MessageContainer>
                        <Title>Page not found</Title>
                        <SubTitle>Oops, the page you're looking for does not exist.</SubTitle>
                        <Message>You may want to head back to the homepage.</Message>
                        <a href='/' className='btn btn-purple hover:bg-bookmark-white hover:text-black'>RETURN HOME</a>
                    </MessageContainer>
                </Wrapper>
            </Container>
        </>
    );
}

export default Notfound;
