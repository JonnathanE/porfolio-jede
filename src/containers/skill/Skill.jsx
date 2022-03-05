import tw from 'twin.macro';
import TitleSection from '../../atom/titleSection/TitleSection';
import { skills } from '../../data';

const SkillSection = tw.div`
    top-20
    mb-16
    //h-[calc(100vh - 80px)]
    relative
    flex
    flex-col
    items-center
    bg-bookmark-white
    dark:bg-gray-800
`
const SkillWrapp = tw.div`
    sm:pl-6
    sm:pr-6
    flex
    flex-wrap
    justify-center
`;

const SkillCard = tw.div`
    w-40
    h-40
    p-10
    m-1
    sm:m-6
    rounded-md
    overflow-hidden
    bg-white
    dark:bg-gray-600
    text-bookmark-blue
    dark:text-white
    shadow-lg
    sm:shadow-lg
    flex
    flex-col
    items-center
    justify-center
    border
    border-gray-500
`;

const SkillCardIcon = tw.img`
    mx-auto
    text-4xl
`;

const SkillCardTitle = tw.p`
    mt-6
    text-xl
    sm:text-xl
    //font-semibold
    text-center
`;

const Skill = () => {
    return (
        <div id='skill'>
            <SkillSection >
                <TitleSection>Skill</TitleSection>
                <SkillWrapp>
                    {skills.map(skill => (
                        <SkillCard key={skill.id}>
                            <SkillCardIcon src={skill.img} alt={skill.name} />
                            <SkillCardTitle>{skill.name}</SkillCardTitle>
                        </SkillCard>
                    ))}
                </SkillWrapp>
            </SkillSection>
        </div>
    )
}

export default Skill