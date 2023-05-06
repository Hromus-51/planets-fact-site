import {
    TextContentEl, Name, Text,
    Source, SourceLink,
} from './styled-components';
//==========================================
import iconSource from '../../assets/images/icon-source.svg';
import { Planet } from '../../assets/planets';
//==========================================
interface TextContentProps {
    planet: Planet,
    section: number,
}

const TextContent: React.FC<TextContentProps> = ({ planet, section }) => {
    const { name, content } = planet;

    return (
        <TextContentEl>
            <Name>{name}</Name>
            <Text>
                {content[section].text}
            </Text>
            <Source>
                Source : <span>
                    <SourceLink
                        to={content[section].source}
                        icon={iconSource}
                        target="_blank"
                    >
                        Wikipedia
                    </SourceLink>
                </span>
            </Source>
        </TextContentEl>
    );
}

export default TextContent;