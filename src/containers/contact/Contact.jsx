import tw from 'twin.macro';
import TitleSection from '../../atom/titleSection/TitleSection';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const ContactSection = tw.section`
    top-20
    pb-20
    relative
    flex
    flex-col
    items-center
    bg-bookmark-white
    dark:bg-bookmark-black
`;

const ContactWrap = tw.div`
    sm:pl-6
    sm:pr-6
    mt-6
    flex
    flex-wrap
    items-center
    justify-center
    gap-4
`;

const ContactCard = tw.div`
w-32
h-32
sm:w-40
sm:h-40
bg-bookmark-purple
text-white
rounded-lg
shadow-lg
flex
flex-col
justify-center
items-center
`;

const ContactImg = tw.img`
w-11/12
`;

const ContactLink = tw.a`
w-32
h-32
sm:w-40
sm:h-40
bg-bookmark-purple
text-white
rounded-lg
shadow-lg
flex
flex-col
justify-center
items-center
`;

const Contact = () => {
    return (
        <div id="contact">
            <ContactSection>
                <TitleSection>Contact</TitleSection>
                <ContactWrap>
                    <ContactCard>
                        <FaEnvelope className='w-1/2 h-1/2 mb-3'/>
                        <ContactImg src='assets/email.png' />
                    </ContactCard>

                    <ContactLink href="https://www.linkedin.com/in/jonnathan-espinoza-604a41226" target="blank" rel="noopener noreferrer"><FaLinkedin className='w-1/2 h-1/2 mb-3'/> Contact Me</ContactLink>

                    <ContactLink href="https://github.com/JonnathanE" target="blank" rel="noopener noreferrer"><FaGithub className='w-1/2 h-1/2 mb-3'/> Follow Me</ContactLink>

                    <ContactLink href="https://twitter.com/JonnathanE1" target="blank" rel="noopener noreferrer"><FaTwitter className='w-1/2 h-1/2 mb-3'/> Follow Me</ContactLink>

                </ContactWrap>
            </ContactSection>
        </div>
    )
}

export default Contact