
import { Name } from './Person.types';

type PersonProps = {
    name: Name
};

export const Person = ({ name }: PersonProps) => {
    return (
        <div>
            {name.first} {name.last}
        </div>
    )
}
