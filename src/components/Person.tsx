type PersonProps = {
    name: {
      firstname: string,
      secondname: string
    }
};

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.firstname} {props.name.secondname}
        </div>
    )
}
