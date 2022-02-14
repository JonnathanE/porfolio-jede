import tw from 'twin.macro';

const FooterSection = tw.div`
    top-20
    relative
    bg-bookmark-white
    dark:bg-bookmark-black
    flex
    justify-center
`;

const FooterDesc = tw.p`
    my-4
    text-bookmark-blue
    dark:text-bookmark-white
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>Made with <span className='mr-2' role='link' aria-label='heart'>❤️</span>by <a className='text-blue-500 hover:underline' href='https://www.linkedin.com/in/jonnathan-espinoza-604a41226/' target='blank'>Jonnathan Espinoza</a></FooterDesc>
        </FooterSection>
    )
}

export default Footer   