import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavItem = styled.li<{ bg: string }>`
    font-size: var(--fs-h4-m);
    line-height: var(--lh-h4-m);
    letter-spacing: var(--ls-h4-m);
    font-weight: var(--fw-bold);
    text-transform: uppercase;

    &:not(:last-child) {
        border-bottom: 1px solid var(--line-m);
    }

    @media(min-width: 426px) {
        font-size: var(--fs-h4);
        line-height: var(--lh-h4);
        letter-spacing: var(--ls-h4);
        color: var(--font-m);

        &:not(:last-child) {
            border-bottom: none;
        }
    }

    @media(min-width: 880px) {
        position: relative;
        
        &:before {
            content: '';
            width: 100%;
            height: 4px;
            background: var(--${props => props.bg});

            position: absolute;
            top: -33px;
            left: 0;

            opacity: 0;
            transition: opacity 0.15s ease 0s;
        }
    }

    @media(hover:hover){
        &:hover {
            transition: color 0.15s ease 0s;
            color: var(--font-l);
        }

        &:hover::before {
            opacity: 1;
        }
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 24px;

    padding: 20px 0;
`;

export const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 24px;
`;

export const Circle = styled.div<{ color: string }>`
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background: var(--${props => props.color});
`;

export const IconChevron = styled.img`
    padding-right: 8px;
`;



