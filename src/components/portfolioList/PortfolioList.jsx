import tw from 'twin.macro';
import styled from 'styled-components'

const Item = styled.li`
    ${tw`
        text-base
        text-bookmark-blue
        dark:text-white
        mr-5
        mb-2
        sm:mr-12
        p-1.5
        border-2
        border-bookmark-purple
        rounded-lg
        cursor-pointer
        relative
    `}
    ${props => (props.isActive && tw`bg-bookmark-purple text-white`)}
`;

const PortfolioList = ({ id, title, active, setSelected, total }) => {
    return (
        <Item isActive={active} onClick={() => setSelected(id)}>
            {title}
            {active &&
                <div className='animate-bounce absolute z-10 -top-4 -right-4 border-2 border-bookmark-purple dark:bg-bookmark-black bg-white text-bookmark-blue dark:text-white rounded-full px-2 py-0'>
                    {total}
                </div>
            }
        </Item>
    )
}

export default PortfolioList