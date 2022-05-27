
export const EventList = (props) => {
    
    return (
        
        <ul>
            {props.events.map((event) => 
                <li key={event}>{event}</li>
            )}
        </ul>
    )
}