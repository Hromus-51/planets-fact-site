import { Button, Number } from './styled-components';
import { useMediaQuery } from 'react-responsive';
//==========================================
import { Planet } from '../../assets/planets';

interface ButtonsProps {
    name: string,
    content: Planet['content'],
    section: number,
    setSection: React.Dispatch<number>,
}

const mobileSections: { [key: string]: string } = {
    overview: 'overview',
    "internal structure": 'structure',
    "surface geology": 'surface',
}

const SectionButtons: React.FC<ButtonsProps> = ({ name, content, section, setSection }) => {
    const isMobile = useMediaQuery({ maxWidth: 425 });

    return (
        <>
            {content.map((obj, index) => (
                <Button
                    activeBg={section === index ? name : ''}
                    activeBdr={section === index ? '' : 'line'}
                    hoverBg={section === index ? '' : 'btn-h'}
                    color={section === index ? 'font-l' : 'font-d'}
                    onClick={() => { setSection(index) }}
                    key={index}
                >
                    <Number>
                        {index < 10 ? `0${index + 1}` : index + 1}
                    </Number>

                    {isMobile ?
                        mobileSections[obj.section] :
                        obj.section}

                </Button>
            ))}
        </>
    );
}

export default SectionButtons;