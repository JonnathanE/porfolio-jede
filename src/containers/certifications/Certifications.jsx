import TitleSection from '../../atom/titleSection/TitleSection';
import { SiUdemy } from 'react-icons/si';
import tw, { styled } from 'twin.macro';
import Edteam from '../../img/edeteam-icon.png';

import { certifications } from '../../data';

const Contianer = tw.div`
relative top-20 pb-20 mb-16 p-2 flex flex-col items-center bg-bookmark-white dark:bg-gray-800
`;

const Wrapp = tw.div`
sm:pl-6 sm:pr-6 mt-6
`;

const List = tw.ul`
bg-white dark:bg-gray-600 rounded-lg shadow-md p-6
`;

const ListItem = styled.li`
${tw`mb-5`}
${({ hasBorder }) => hasBorder && tw`border-b-2`}
`;

const Title = tw.span`
font-semibold text-base text-bookmark-blue dark:text-white
`;

const SubTitle = tw.span`
text-gray-700 dark:text-gray-300 text-sm
`;

const BtnLink = tw.a`
py-2 px-4 rounded-full transition duration-300 border-2 border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700
`;

const Icon = tw.img`
    w-[48px]
    h-[48px]
`;

const Certifications = () => {
    return (
        <div id='certification'>
            <Contianer>
                <TitleSection>Certifications</TitleSection>
                <Wrapp>
                    <List>
                        {certifications.map((c, index) => (
                            <ListItem key={c.id} hasBorder={index === (certifications.length - 1) ? false : true}>
                                <div className='flex'>
                                    <div>
                                        {c.business === 'Udemy' && <SiUdemy size={48} className='dark:text-white'/>}
                                        {c.business === 'EDteam' && <Icon src={Edteam}/>}
                                    </div>
                                    <div className='ml-3'>
                                        <div>
                                            <a href={c.url} target={'blank'} className='flex flex-col'>
                                                <div>
                                                    <Title>{c.name}</Title>
                                                </div>
                                                <SubTitle>{c.business}</SubTitle>
                                                {c.expedition
                                                    ? (<SubTitle>
                                                        Expedition: {c.expedition} - {c.expiration ? c.expiration : 'No expiration date'}
                                                    </SubTitle>)
                                                    : null}
                                                <SubTitle>Credential ID {c.idCertification}</SubTitle>
                                            </a>
                                        </div>
                                        <div className='mb-8 mt-4'>
                                            <BtnLink href={c.url} target='blank'>See credential</BtnLink>
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Wrapp>
            </Contianer>
        </div>
    )
}

export default Certifications