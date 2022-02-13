import tw from 'twin.macro';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

const AboutSection = tw.section`
    top-20 
    h-[calc(100vh - 80px)]
    relative
    flex
    flex-col
    items-center
`;

const AboutTitle = tw.h1`
text-2xl
sm:text-3xl
mt-6
mb-2.5
font-bold
`;

const AboutCard = tw.div`
w-4/5
h-4/5
bg-white
flex
flex-col
justify-around
shadow-xl
rounded-md
p-5
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
`;

const AboutCardDesc = tw.p`
text-base
sm:text-xl
text-center
text-gray-600
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
        <AboutSection id='about'>
            <AboutTitle>About Me</AboutTitle>
            <AboutCard>
                <AboutCardBody>
                    <AboutCardTitle>Hey 👋</AboutCardTitle>
                    <AboutCardDesc>
                        I'm a passionate web and flutter developer. I love creating content for people on my channel, Backslash Flutter. I also love freelancing and working on open source projects.
                    </AboutCardDesc>
                </AboutCardBody>
                <AboutButtonContainer>
                    <button type='button' className='btn btn-purple hover:bg-bookmark-white hover:text-black'>Download CV</button>
                </AboutButtonContainer>
                <AboutCardFooter>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'>
                        <FaGithub />
                        <span className='sr-only'>Github</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300'>
                        <FaYoutube />
                        <span className='sr-only'>Github</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'>
                        <FaTwitter />
                        <span className='sr-only'>Twitter</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300'>
                        <FaLinkedin />
                        <span className='sr-only'>Linkedin</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300'>
                        <FaEnvelope />
                        <span className='sr-only'>Email</span>
                    </a>
                </AboutCardFooter>
            </AboutCard>
        </AboutSection>
    )
}

export default About