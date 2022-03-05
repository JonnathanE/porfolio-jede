import tw from 'twin.macro';
import TitleSection from '../../atom/titleSection/TitleSection';
import Lottie from 'react-lottie';
import * as animationTwitter from '../../animate/38764-twitter-logo-effect.json';
import * as animationLinkedin from '../../animate/49413-linkedin-icon.json';
import * as animationGitHub from '../../animate/81333-github.json';
import * as animationEmail from '../../animate/18781-email-sent-by-todd-rocheford.json';

const ContactSection = tw.section`
    top-20
    pb-20
    relative
    flex
    flex-col
    items-center
    bg-bookmark-white
    dark:bg-gray-800
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
bg-white
dark:bg-gray-600
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
bg-gray-500
px-2
py-1
rounded-full
`;

const ContactLink = tw.a`
w-32
h-32
sm:w-40
sm:h-40
bg-white
dark:bg-gray-600
text-bookmark-blue
dark:text-white
rounded-lg
shadow-lg
flex
flex-col
justify-center
items-center
`;

const Contact = () => {

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
        <div id="contact">
            <ContactSection>
                <TitleSection>Contact</TitleSection>
                <ContactWrap>
                    <ContactCard>
                    <Lottie options={defaultOptionsAnimate(animationEmail)}
                            height={100}
                            width={100}
                        />
                        <ContactImg src='assets/email.png' />
                    </ContactCard>

                    <ContactLink href="https://www.linkedin.com/in/jonnathan-espinoza-604a41226" target="blank" rel="noopener noreferrer">
                        <Lottie options={defaultOptionsAnimate(animationLinkedin)}
                            height={100}
                            width={100}
                        />
                        Contact Me
                    </ContactLink>

                    <ContactLink href="https://github.com/JonnathanE" target="blank" rel="noopener noreferrer">
                        <Lottie options={defaultOptionsAnimate(animationGitHub)}
                            height={100}
                            width={100}
                        />
                        Follow Me
                    </ContactLink>

                    <ContactLink href="https://twitter.com/JonnathanE1" target="blank" rel="noopener noreferrer">
                        <Lottie options={defaultOptionsAnimate(animationTwitter)}
                            height={100}
                            width={100}
                        />
                        Follow Me
                    </ContactLink>

                </ContactWrap>
            </ContactSection>
        </div>
    )
}

export default Contact