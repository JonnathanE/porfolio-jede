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
    `}
    ${props => (props.isActive && tw`bg-bookmark-purple text-white`)}
`;

const PortfolioList = ({ id, title, active, setSelected }) => {
    return (
        <Item isActive={active} onClick={() => setSelected(id)}>
            {title}
        </Item>
    )
}

export default PortfolioList