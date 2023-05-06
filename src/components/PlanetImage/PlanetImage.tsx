import { AnimatePresence } from 'framer-motion';
//==========================================
import { PlanetImageEl, GeologyImg, Image } from './styled-components';
//==========================================
import { Planet } from '../../assets/planets';
//==========================================
import {
    mobileImageSize,
    tabletImageSize,
    desktopImageSize
} from '../../assets/planetsImageSizes';

const geologyImgAnimate = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

interface PlanetImageProps {
    planet: Planet,
    section: number
}

const PlanetImage: React.FC<PlanetImageProps> = ({ planet, section }) => {
    const { name, content, geology } = planet;

    return (
        <PlanetImageEl>
            <Image
                mobileSize={mobileImageSize[name]}
                tabletSize={tabletImageSize[name]}
                desktopSize={desktopImageSize[name]}
                src={content[section].image}
                alt={name}
            />
            <AnimatePresence>
                {content[section].section === 'surface geology' &&
                    <GeologyImg
                        src={geology}
                        {...geologyImgAnimate}
                    />
                }
            </AnimatePresence>
        </PlanetImageEl>
    );
}

export default PlanetImage;