import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderEl = styled.header`
`;

export const Container = styled.div`
    max-width: 1920px;
    width: 100%;

    padding: 0 24px;
    margin: 0 auto;
    border-bottom: 1px solid var(--line);

    @media(min-width: 426px) {
        padding: 0 51px; 
    }

    @media(min-width: 769px) {
        padding: 0 32px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 40px;

    padding: 16px 0px;

    @media(min-width: 426px) {
        display: block;
        padding: 32px 0px 27px;
        text-align: center;
    }

    @media(min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 40px;

        padding: 22px 0px 27px;
        text-align: left;
    }
`;

export const Logo = styled(Link)`
    font-family: var(--family01-ss);
    font-size: var(--fs-l);
    line-height: var(--lh-l);
    letter-spacing: var(--ls-l);
    text-transform: uppercase;

    display: block;
    flex-shrink: 0;

    @media(min-width: 426px) {
        &:not(:last-child) {
            margin-bottom: 39px;
        }
    }

    @media(min-width: 769px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`;

export const Navigation = styled.ul`
    display: none;

    @media(min-width: 426px) {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 32px;
        
        flex-wrap: wrap;
    }

    @media(min-width: 769px) {
        align-self: flex-end;
        column-gap: 33px;
    }
`;

export const MenuBurger = styled.div<{ visible: string }>`
    display: flex;
    align-items: center;

    fill: var(--${props => props.visible});
    transition: fill 0.15s ease 0s;

    @media(min-width: 426px) {
        display: none;
    }
`;

export const Menu = styled(motion.div)`
    position: absolute;
    z-index: 10;
    top: 69px;
    left: 0;

    width: 100%;
    height: 100%;

    background: var(--bg);
    overflow: hidden;

    @media(min-width: 426px) {
        display: none;
    }
`;

export const MenuContent = styled.ul`
    padding: 24px 24px 67px;
`;