import tw from 'twin.macro';

const Title = tw.h1`
    text-2xl
    sm:text-3xl
    mt-6
    mb-2.5
    font-bold
    dark:text-bookmark-white
`;

const TitleSection = ({children}) => {
    return (
        <Title>{children}</Title>
    )
}

export default TitleSection