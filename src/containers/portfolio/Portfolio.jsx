import { useState, useEffect } from 'react'
import tw from 'twin.macro';
import TitleSection from '../../atom/titleSection/TitleSection';
import PortfolioList from '../../components/portfolioList/PortfolioList';

const PorfolioSection = tw.section`
    top-20
    relative
    flex
    flex-col
    items-center
    bg-bookmark-white
    dark:bg-bookmark-black
`;

const List = tw.ul`
    my-2.5
    sm:m-2.5
    p-0
    list-none
    flex
    flex-wrap
    justify-center
`;

const PortfolioWrapper = tw.div``

const PortfolioItem = tw.div``;

const PorftolioImg = tw.img``;

const PortfolioInfo = tw.div``;

const PortfolioTitle = tw.p``;

const Portfolio = () => {

    const [selected, setSelected] = useState('Webapp')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'Webapp',
            title: 'Web App'
        },
        {
            id: 'webdesign',
            title: 'Web design'
        },
        {
            id: 'api',
            title: 'API Rest'
        },
        {
            id: 'apiq',
            title: 'API Rest'
        },
        {
            id: 'apia',
            title: 'API Rest'
        }
    ]

    return (
        <div id='portfolio'>
            <PorfolioSection>
                <TitleSection>Porfolio</TitleSection>
                <List>
                    {list.map(item => (
                        <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} key={item.id} />
                    ))}
                </List>
                <PortfolioWrapper>
                    {/**
                     * TODO: Implement the items
                     */}
                    <PortfolioItem>
                        <PorftolioImg />
                        <PortfolioInfo>
                            <PortfolioTitle>Title</PortfolioTitle>
                            <a>Git</a>
                        </PortfolioInfo>
                    </PortfolioItem>
                </PortfolioWrapper>
            </PorfolioSection>
        </div>
    )
}

export default Portfolio