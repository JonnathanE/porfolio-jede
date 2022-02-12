import { NavLink } from 'react-router-dom';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { deviceSice } from '../../responsive';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from './menuStyles';
import useDarkMode from '../../hook/useDarkMode';

const TobarNav = tw.nav`
fixed
top-0
z-50
container
//bg-bookmark-purple
dark:bg-bookmark-black
`;

const Wrapper = tw.div`
p-4
flex
items-center
justify-between
dark:bg-bookmark-black
`;

const TopbarLeft = tw.div``;

const Logo = tw.div`
text-3xl
font-weight[700]
text-bookmark-blue
dark:text-bookmark-white
`;

const TopbarRight = tw.div`
flex
items-center
`;

const NavItems = tw.ul`
list-none
sm:flex
flex-1
items-center
gap-11
text-white
sm:text-bookmark-blue
sm:dark:text-bookmark-white
uppercase
text-lg
sm:text-xs
font-medium
sm:font-normal
`;

const NavItem = tw.li`
cursor-pointer
p-3.5
transition-colors
transition-duration[300ms]
hover:text-bookmark-purple
`;

const NavItemTheme = tw.li`
cursor-pointer
p-3.5
transition-colors
border-l-2
dark:border-l-bookmark-grey
transition-duration[300ms]
hover:text-bookmark-purple
`;

const Topbar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSice.mobile });
    const [colorTheme, setTheme] = useDarkMode();

    const navItems = (
        <NavItems>
            <NavItem>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-bookmark-purple' : ''}>
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-bookmark-purple' : ''}>
                    About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/skill' className={({ isActive }) => isActive ? 'text-bookmark-purple' : ''}>
                    Skill
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/porfolio' className={({ isActive }) => isActive ? 'text-bookmark-purple' : ''}>
                    Portfolio
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-bookmark-purple' : ''}>
                    Contact
                </NavLink>
            </NavItem>
            <NavItemTheme onClick={() => setTheme(colorTheme)}>
                {colorTheme === 'light'
                    ? <MdLightMode className='text-2xl' />
                    : <MdDarkMode className='text-2xl' />
                }
            </NavItemTheme>
        </NavItems>
    )

    return (
        <TobarNav>
            <Wrapper>
                <TopbarLeft>
                    <Logo>JEDE</Logo>
                </TopbarLeft>
                <TopbarRight>
                    {isMobile && <Menu right styles={styles} burgerButtonClassName='dark:bg-white dark:text-bookmark-white'>{navItems}</Menu>}
                    {!isMobile && navItems}
                </TopbarRight>
            </Wrapper>
        </TobarNav>
    )
}

export default Topbar