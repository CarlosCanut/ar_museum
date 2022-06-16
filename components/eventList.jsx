import { 
    Flex,
    Box,
} from "@chakra-ui/react"
import { Event } from "./event"

export const EventList = (props) => {
    
    return (
        <Flex direction="column" gap={4}>
            {[0,1,2].map((event) => 
                <Event key={event} index={event} eventList={props.events} />
            )}
        </Flex>
    )
}