import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//==========================================
import {
    MainEl, Container, Wrapper, MainTable,
    Description, Sections, Facts,
} from './styled-components';
//==========================================
import PlanetImage from '../PlanetImage/PlanetImage';
import TextContent from '../TextContent/TextContent';
import SectionButtons from '../SectionButtons/SectionButtons';
import FactsItem from '../FactsItem/FactsItem';
//==========================================
import { Planet } from '../../assets/planets';

interface MainProps {
    planet: Planet;
}

const Main: React.FC<MainProps> = ({ planet }) => {
    const { name, content, facts } = planet;
    const [section, setSection] = useState(0);
    const isDesktop = useMediaQuery({ minWidth: 426 });
    const isMobile = useMediaQuery({ maxWidth: 425 });

    return (
        <MainEl>
            {isMobile &&
                <Sections>
                    <SectionButtons
                        name={name}
                        content={content}
                        section={section}
                        setSection={setSection}
                    />
                </Sections>
            }
            <Container>
                <Wrapper>
                    <MainTable>
                        <PlanetImage
                            planet={planet}
                            section={section}
                        />

                        <Description>
                            <TextContent
                                planet={planet}
                                section={section}
                            />

                            {isDesktop &&
                                <Sections>
                                    <SectionButtons
                                        name={name}
                                        content={content}
                                        section={section}
                                        setSection={setSection}
                                    />
                                </Sections>
                            }
                        </Description>
                    </MainTable>

                    <Facts>
                        <FactsItem facts={facts} />
                    </Facts>
                </Wrapper>
            </Container>
        </MainEl>
    );
}

export default Main;