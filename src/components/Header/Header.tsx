import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
//==========================================
import NavItems from '../NavItems/NavItems';
//==========================================
import {
    HeaderEl, Container, Wrapper,
    Logo, Navigation, MenuBurger,
    Menu, MenuContent
} from './styled-components';
//==========================================
import { ReactComponent as BurgerIcon } from '../../assets/images/icon-hamburger.svg';

const menuAnimation = {
    initial: { width: 0 },
    animate: { width: '100%' },
    exit: { width: 0 },
    transition: { duration: 0.25 }
}

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Logo to='/'>the planets</Logo>

                        <Navigation>
                            <NavItems />
                        </Navigation>

                        <MenuBurger
                            onClick={() => { setIsVisible(!isVisible) }}
                            visible={isVisible ? 'menu' : 'font-l'}
                        >
                            <BurgerIcon />
                        </MenuBurger>
                    </Wrapper>
                </Container>
            </HeaderEl>

            <AnimatePresence>
                {isVisible &&
                    <Menu {...menuAnimation}>
                        <MenuContent>
                            <NavItems
                                isVisible={isVisible}
                                setIsVisible={setIsVisible}
                            />
                        </MenuContent>
                    </Menu>
                }
            </AnimatePresence>
        </>
    );
}

export default Header;