import { Item, Title, Data } from './styled-components';
//==========================================
import { Planet } from "../../assets/planets";

interface FactsItemProps {
    facts: Planet['facts']
}

const FactsItem: React.FC<FactsItemProps> = ({ facts }) => {
    return (
        <>
            {facts.map((obj, index) => (
                <Item key={index}>
                    <Title>{obj.title}</Title>
                    <Data>{obj.data}</Data>
                </Item>
            ))}
        </>
    );
}

export default FactsItem;