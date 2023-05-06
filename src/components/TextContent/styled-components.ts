import { Link } from "react-router-dom";
import styled from "styled-components";

export const TextContentEl = styled.div`
    @media(min-width: 426px) {
        flex: 49.201 1 267px;
    }

    @media(min-width: 589px) {
        max-width: 339px;
    }

    @media(min-width: 769px) {
        max-width: none;
        min-width: none;

        &:not(:last-child) {
            margin-bottom: 39px;
        }
    }
`;

export const Name = styled.h1`
    font-family: var(--family01-ss);
    font-size: var(--fs-h1-m);
    line-height: var(--lh-h1-m);
    text-transform: uppercase;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media(min-width: 426px) {
        font-size: var(--fs-h1-t);
        line-height: var(--lh-h1-t);

        &:not(:last-child) {
            margin-bottom: 23px;
        }
    }

    @media(min-width: 769px) {
        font-size: var(--fs-h1);
        line-height: var(--lh-h1);
    }
`;

export const Text = styled.p`
    font-size: var(--fs-bm-m);
    line-height: var(--lh-bm-m);

    min-height: 132px;

    @media(min-width: 769px) {
        font-size: var(--fs-bm);
        line-height: var(--lh-bm);

        min-height: 200px;
    }

    @media(min-width: 1030px) {
        min-height: 175px;
    }
`;

export const Source = styled.div`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    color: var(--font-d);

    @media(min-width: 769px) {
        font-size: var(--fs-bm);
        line-height: var(--lh-bm);
    }
`;

export const SourceLink = styled(Link) <{ icon: string }>`
    font-weight: var(--fw-bold);
    text-decoration: underline !important;
    position: relative;

    &:after {
        content: '';
        width: 12px;
        height: 12px;

        position: absolute;
        top: 50%;
        right: -18px;
        transform: translateY(-50%);

        background: url(${props => props.icon}) no-repeat;
    }

    @media(min-width: 426px) {
        &:after {
            right: -20px;
        }
    }
`;