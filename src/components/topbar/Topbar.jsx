import { NavLink } from 'react-router-dom';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { deviceSice } from '../../responsive';
import styles from './menuStyles';

const TobarNav = tw.nav`
fixed
top-0
z-50
container
//bg-bookmark-purple
`;

const Wrapper = tw.div`
p-4
flex
items-center
justify-between
`;

const TopbarLeft = tw.div``;

const Logo = tw.div`
text-3xl
font-weight[700]
text-bookmark-blue
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


const Topbar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSice.mobile });

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
        </NavItems>
    )

    return (
        <TobarNav>
            <Wrapper>
                <TopbarLeft>
                    <Logo>JEDE</Logo>
                </TopbarLeft>
                <TopbarRight>
                    {isMobile && <Menu right styles={styles}>{navItems}</Menu>}
                    {!isMobile && navItems}
                </TopbarRight>
            </Wrapper>
        </TobarNav>
    )
}

export default Topbar