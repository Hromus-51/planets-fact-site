import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
//==========================================
import {
    NavItem, Circle, IconChevron,
    NameWrapper, StyledLink
} from './styled-components';
//==========================================
import iconChevron from '../../assets/images/icon-chevron.svg';

const planets = [
    'mercury', 'venus', 'earth', 'mars',
    'jupiter', 'saturn', 'uranus', 'neptune'
];

interface NavItemsProps {
    isVisible?: boolean,
    setIsVisible?: React.Dispatch<boolean>
}

const NavItems: React.FC<NavItemsProps> = ({ isVisible, setIsVisible }) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });

    const closeMenu = () => {
        isMobile &&
            setIsVisible &&
            setIsVisible(!isVisible);
    }

    return (
        <>
            {planets.map(item => (
                <NavItem
                    key={item}
                    bg={item}
                    onClick={() => { closeMenu() }}
                >

                    {isMobile ?
                        <StyledLink to={item === 'mercury' ? '' : item}>
                            <NameWrapper>
                                <Circle color={item} />
                                {item}
                            </NameWrapper>
                            <IconChevron src={iconChevron} alt='icon chevron' />
                        </StyledLink> :

                        <Link to={item === 'mercury' ? '' : item}>
                            {item}
                        </Link>
                    }

                </NavItem>
            ))}
        </>
    );
}

export default NavItems;