import TitleSection from '../../atom/titleSection/TitleSection';
import { SiUdemy } from 'react-icons/si';
import tw, { styled } from 'twin.macro'

import { certifications } from '../../data';

const Contianer = tw.div`
relative top-20 pb-20 mb-16 p-2 flex flex-col items-center bg-bookmark-white dark:bg-bookmark-black
`;

const Wrapp = tw.div`
sm:pl-6 sm:pr-6 mt-6
`;

const List = tw.ul`
bg-white rounded-lg shadow-md p-6
`;

const ListItem = styled.li`
${tw`mb-5`}
${({ hasBorder }) => hasBorder && tw`border-b-2`}
`;

const Title = tw.span`
font-semibold text-base
`;

const SubTitle = tw.span`
text-gray-700 text-sm
`;

const BtnLink = tw.a`
py-2 px-4 rounded-full transition duration-300 border-2 border-gray-500 text-gray-500 font-semibold hover:bg-gray-200
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
                                        {c.business === 'Udemy' && <SiUdemy size={48} />}
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