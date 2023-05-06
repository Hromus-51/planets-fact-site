import { motion } from "framer-motion";
import styled from "styled-components";

export const PlanetImageEl = styled.div`
    min-height: 304px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 426px) {
        min-height: 460px;
    }

    @media(min-width: 769px) {
        min-height: none;
        align-self: stretch;
        flex: 0.567 1 630px;
        max-width: 630px;

        position: relative;
    }
`;

export const Image = styled.img<{
    mobileSize: string,
    tabletSize: string,
    desktopSize: string
}>`
    width: ${props => props.mobileSize}%;

    @media(min-width: 426px) {
        width: ${props => props.tabletSize}%;
    }

    @media(min-width: 769px) {
        width: ${props => props.desktopSize}%;
        max-width: 666px;
        padding-top: 90px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const GeologyImg = styled(motion.img)`
    display: none;

    @media(min-width: 769px) {
        display: block;
        width: 163px;
        height: 199px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;