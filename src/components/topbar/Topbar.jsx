import { Link, animateScroll as scroll } from 'react-scroll';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { deviceSice } from '../../responsive';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from './menuStyles';
import useDarkMode from '../../hook/useDarkMode';
import LogoJEDE from '../../img/logo-jede.png';

const TobarNav = tw.nav`
    w-full
    h-20
    top-0
    fixed
    z-50
    pl-6
    pr-6
    pt-4
    md:pt-0
    flex
    items-center
    self-center
    justify-between
    bg-bookmark-white
    dark:bg-gray-800
`;

const Logo = tw.div`
    text-3xl
    font-weight[700]
    text-bookmark-blue
    dark:text-white
    dark:hover:text-bookmark-purple
    cursor-pointer
    flex
    items-center
`;

const LogoImg = tw.img`
w-10 mr-2
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    sm:w-auto
    sm:h-full
    flex
    justify-center
    items-center
`;

const NavItem = tw.li`
    flex
    items-center
    justify-center
    min-h-full
    font-bold
    text-2xl
    sm:text-sm
    text-white
    sm:text-bookmark-blue
    sm:dark:text-white
    cursor-pointer
    transition-colors
    transition-duration[300ms]
    hover:text-bookmark-purple
    dark:hover:text-bookmark-purple
    box-content
    mb-2
    sm:mb-0
    sm:mr-8
`;

const Topbar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSice.mobile });
    const [colorTheme, setTheme] = useDarkMode();

    const navItems = (
        <NavItems>
            <NavItem onClick={() => scroll.scrollToTop()}>
                Home
            </NavItem>
            <NavItem>
                <Link to='about' smooth={true} duration={1000}>
                    About
                </Link>
            </NavItem>
            <NavItem>
                <Link to='skill' smooth={true} duration={1000}>
                    Skill
                </Link>
            </NavItem>
            <NavItem>
                <Link to='portfolio' smooth={true} duration={1000}>
                    Portfolio
                </Link>
            </NavItem>
            <NavItem>
                <Link to='certification' smooth={true} duration={1000}>
                    Certification
                </Link>
            </NavItem>
            <NavItem>
                <Link to='contact' smooth={true} duration={1000}>
                    Contact
                </Link>
            </NavItem>
            <NavItem onClick={() => setTheme(colorTheme)}>
                {colorTheme === 'light'
                    ? <MdLightMode className='text-2xl' />
                    : <MdDarkMode className='text-2xl' />
                }
            </NavItem>
        </NavItems>
    )

    return (
        <TobarNav>
            <Logo onClick={() => scroll.scrollToTop()}><LogoImg src={LogoJEDE} alt='logo jonnathan'/> JEDE</Logo>

            {
                isMobile && <Menu right styles={styles} burgerButtonClassName='dark:bg-white'>
                    {navItems}
                </Menu>
            }

            {!isMobile && navItems}
        </TobarNav>
    )
}

export default Topbar