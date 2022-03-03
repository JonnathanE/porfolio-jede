import { useState, useEffect } from 'react'
import tw from 'twin.macro';
import TitleSection from '../../atom/titleSection/TitleSection';
import PortfolioList from '../../components/portfolioList/PortfolioList';
import { FaGithub, FaGitlab, FaGlobe, FaYoutube } from 'react-icons/fa';

import { portfolio } from '../../data';

const PorfolioSection = tw.section`
    top-20
    pb-20
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

const PortfolioWrapper = tw.div`
    sm:pl-6
    sm:pr-6
    flex
    flex-wrap
    items-center
    justify-center
`

const PortfolioItem = tw.div`
    bg-white
    //max-w-sm
    w-80
    rounded-md
    overflow-hidden
    shadow-lg
    m-4
`;

const PorftolioImg = tw.img`
    w-full
    h-60
    // object-cover
`;

const PortfolioInfo = tw.div`
    px-6
    py-4
`;

const PortfolioTitle = tw.p`
text-bookmark-blue
    text-center
    font-bold
    text-lg
    mb-2
`;

const PortfolioEtiqueta = tw.span`
    inline-block 
    bg-gray-200 
    rounded-full 
    px-3 
    py-1 
    text-xs 
    font-semibold 
    text-gray-700 
    mr-2 mb-2
`;

const Portfolio = () => {

    const [selected, setSelected] = useState('all')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'all',
            title: 'All Projects'
        },
        {
            id: 'webapp',
            title: 'Web App'
        },
        {
            id: 'webdesign',
            title: 'Web design'
        },
        {
            id: 'api',
            title: 'API Rest'
        }
    ]

    useEffect(() => {
        switch (selected) {
            case 'all':
                setData(portfolio)
                break;
            case 'webapp':
                setData(portfolio.filter(item => {
                    return item.category === 'webapp'
                }))
                break;
            case 'webdesign':
                setData(portfolio.filter(item => {
                    return item.category === 'webdesign'
                }))
                break;
            case 'api':
                setData(portfolio.filter(item => {
                    return item.category === 'api'
                }))
                break;
            default:
                setData([])
                setData(portfolio)
                break;
        }
    }, [selected]);

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
                    {data.map(d => (
                        <PortfolioItem key={d.id}>
                            <PorftolioImg src={d.img} alt={d.title} />
                            <PortfolioInfo>
                                <PortfolioTitle>{d.title}</PortfolioTitle>
                                <div className='flex justify-center'>

                                    {d.web && <a href={d.web} target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'>
                                        <FaGlobe />
                                        <span className='sr-only'>Preview</span>
                                    </a>}

                                    {d.github && <a href={d.github} target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'>
                                        <FaGithub />
                                        <span className='sr-only'>Github</span>
                                    </a>}

                                    {d.gitlab && <a href={d.gitlab} target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-500 hover:bg-orange-500 rounded-full hover:text-white transition-colors duration-300'>
                                        <FaGitlab />
                                        <span className='sr-only'>Gitlab</span>
                                    </a>}

                                    {d.youtube && <a href='https://www.youtube.com/' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300'>
                                        <FaYoutube />
                                        <span className='sr-only'>Youtube</span>
                                    </a>}

                                </div>
                            </PortfolioInfo>
                            <div className="px-6 pt-0 pb-2">
                                {/* <img src={t.icon} alt={t.name} className='w-10 m-1 p-1 sm:m-2 sm:p-2 rounded-full '/> */}
                                {d.technology && d.technology.map(t => (
                                    <PortfolioEtiqueta key={t.id}>#{t.name}</PortfolioEtiqueta>
                                ))}
                            </div>
                        </PortfolioItem>
                    ))}
                </PortfolioWrapper>
            </PorfolioSection>
        </div>
    )
}

export default Portfolio