import tw from 'twin.macro';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import CV from '../../docs/cv.pdf';
import TitleSection from '../../atom/titleSection/TitleSection';

const AboutSection = tw.section`
    top-20
    h-[calc(100vh - 80px)]
    relative
    flex
    flex-col
    items-center
    bg-bookmark-white
    dark:bg-bookmark-black
`;

const AboutCard = tw.div`
    w-4/5
    h-4/6
    bg-white
    flex
    flex-col
    justify-around
    shadow-xl
    rounded-md
    p-5
    dark:bg-bookmark-grey
`;

const AboutCardBody = tw.div`
    flex
    flex-col
    items-center
`;

const AboutButtonContainer = tw.div`
    flex
    justify-center
`

const AboutCardTitle = tw.p`
    text-base
    sm:text-xl
    text-bookmark-blue
    dark:text-bookmark-white
`;

const AboutCardDesc = tw.p`
    text-base
    sm:text-xl
    text-center
    text-gray-600
    dark:text-bookmark-white
    leading-relaxed
    mt-4
`;

const AboutCardFooter = tw.div`
    border-t-2
    pt-4
    flex
    flex-wrap
    gap-3
    justify-center
`;

const About = () => {
    return (
        <div id='about'>
            <AboutSection >
                <TitleSection>About Me</TitleSection>
                <AboutCard>
                    <AboutCardBody>
                        <AboutCardTitle>Hey 👋</AboutCardTitle>
                        <AboutCardDesc>
                            I'm a passionate web developer, with knowledge of MERN stacks. I love freelancing and working on open source projects. I also love coffe.
                        </AboutCardDesc>
                    </AboutCardBody>
                    <AboutButtonContainer>
                        <a href={CV} download className='btn btn-purple hover:bg-bookmark-white hover:text-black'>Download CV</a>
                    </AboutButtonContainer>
                    <AboutCardFooter>
                        <a href='https://github.com/JonnathanE' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'>
                            <FaGithub />
                            <span className='sr-only'>Github</span>
                        </a>
                        {/* <a href='https://www.youtube.com/' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300'>
                        <FaYoutube />
                        <span className='sr-only'>Github</span>
                    </a> */}
                        <a href='https://twitter.com/JonnathanE1' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'>
                            <FaTwitter />
                            <span className='sr-only'>Twitter</span>
                        </a>
                        <a href='https://www.linkedin.com/in/jonnathan-espinoza-604a41226/' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300'>
                            <FaLinkedin />
                            <span className='sr-only'>Linkedin</span>
                        </a>
                        {/* <a href='https://www.youtube.com/' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300'>
                        <FaEnvelope />
                        <span className='sr-only'>Email</span>
                    </a> */}
                    </AboutCardFooter>
                </AboutCard>
            </AboutSection>
        </div>
    )
}

export default About