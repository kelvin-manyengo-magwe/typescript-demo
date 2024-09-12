type GreetType = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
};

export const Greet = (props: GreetType) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn ? `>Welcome ${props.name}! you have ${props.messageCount} unead messages` :
                              'Welcome Guest'
                }
            </h2>
        </div>
    );
}
