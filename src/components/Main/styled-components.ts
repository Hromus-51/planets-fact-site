import styled from "styled-components";

export const MainEl = styled.main`
    padding-bottom: 47px;

    @media(min-width: 426px) {
        padding-bottom: 36px;
    }

    @media(min-width: 769px) {
        padding-bottom: 20px;
    }
`;

export const Container = styled.div`
    height: 100%;
    max-width: 1190px;
    padding: 0px 24px;
    margin: 0 auto;

    @media(min-width: 426px) {
        padding: 0px 40px;
    }
`;

export const Wrapper = styled.div` 
`;

export const MainTable = styled.div`
    &:not(:last-child) {
        margin-bottom: 28px;
    }

    @media(min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 11.711%;

        &:not(:last-child) {
            margin-bottom: 70px;
        }
    }
`;

export const Description = styled.div`
    text-align: center;

    @media(min-width: 426px) {
        text-align: left;

        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 20px;
        row-gap: 20px;
        flex-wrap: wrap;
    }

    @media(min-width: 769px) {
        flex: 0.315 1 350px;
        max-width: 350px;
        min-width: 300px;

        display: block;
        padding-top: 107px;
    }
`;

export const Sections = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 24px;
    border-bottom: 1px solid var(--line);

    @media(min-width: 426px) {
        flex: 40.783 1 222px;

        display: block;
        padding: 0;
        border-bottom: none;
    }

    @media(min-width: 589px) {
        max-width: 281px;
    }

    @media(min-width: 769px) {
        max-width: none;
    }
`;

export const Facts = styled.ul`

    @media(min-width: 426px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(134px, 1fr));
        column-gap: 11px;
        row-gap: 11px;
    }

    @media(min-width: 769px) {
        grid-template-columns: repeat(auto-fit, minmax(217px, 1fr));
        column-gap: 30px;
        row-gap: 30px;
    }
`;