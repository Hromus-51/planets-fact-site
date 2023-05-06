import styled from "styled-components";

export const Button = styled.li<{
    activeBg: string,
    activeBdr: string,
    hoverBg: string,
    color: string,
}>`
    font-size: var(--fs-h3-m);
    line-height: var(--lh-h3-m);
    letter-spacing: var(--ls-h3-m);
    font-weight: var(--fw-bold);
    color: var(--${props => props.color});

    text-transform: uppercase;
    position: relative;

    transition: color 0.15s ease 0s;

    &::after {
        content: '';
        width: 100%;
        height: 4px;

        position: absolute;
        left: 0;
        bottom: -21px;

        background: var(--${props => props.activeBg});
        transition: background 0.15s ease 0s;
    }

    @media(min-width: 426px) {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 17px;

        font-size: var(--fs-h3-t);
        line-height: var(--lh-h3-t);
        letter-spacing: var(--ls-h3-t);
        color: var(--font-l);

        padding: 8px 20px 7px ;
        background: var(--${props => props.activeBg});
        outline: 1px solid var(--${props => props.activeBdr});
        position: static;

        transition: background 0.15s ease 0s;

        &:not(:last-child) {
            margin-bottom: 16px;
        }

        &::after {
            display: none;
        }
    }

    @media(min-width: 769px) {
        column-gap: 25px;

        font-size: var(--fs-h3);
        line-height: var(--lh-h3);
        letter-spacing: var(--ls-h3);

        padding: 12px 28px 11px ;
    }

    @media(hover: hover) {
        &:hover {
            background: var(--${props => props.hoverBg});
            cursor: pointer;
        }
    }
`;

export const Number = styled.h3`
    display: none;

    @media(min-width: 426px) {
        display: block;
        color: var(--font-d);
    }
`;