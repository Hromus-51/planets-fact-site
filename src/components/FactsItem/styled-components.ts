import styled from "styled-components";

export const Item = styled.div`
    padding: 9px 24px 13px;
    border: 1px solid var(--line);

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media(min-width: 426px) {
        display: block;
        padding: 16px 15px 19px;

        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }

    @media(min-width: 769px) {
        padding: 19px 23px 26px;
    }
`;

export const Title = styled.h4`
    font-size: var(--fs-h5-m);
    line-height: var(--lh-h5-m);
    letter-spacing: var(--ls-h5-m);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    color: var(--font-d);

    position: relative;
    top: 3px;

    @media(min-width: 426px) {
        position: static;

        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }

    @media(min-width: 769px) {
        font-size: var(--fs-h4);
        line-height: var(--lh-h4);
        letter-spacing: var(--ls-h4);

        &:not(:last-child) {
            margin-bottom: 4px;
        }
    }
`;

export const Data = styled.h2`
    font-family: var(--family01-ss);
    font-size: var(--fs-h2-m);
    line-height: var(--lh-h2-m);
    letter-spacing: var(--ls-h2-m);
    text-transform: uppercase;

    @media(min-width: 426px) {
        font-size: var(--fs-h2-t);
        line-height: var(--lh-h2-t);
        letter-spacing: var(--ls-h2-t);
    }

    @media(min-width: 769px) {
        font-size: var(--fs-h2);
        line-height: var(--lh-h2);
        letter-spacing: var(--ls-h2);
    }
`;