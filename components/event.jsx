import {
    Box,
} from '@chakra-ui/react'

export const Event = ({eventList, index}) => {

    return (
        <Box  padding={6} borderWidth="1px" borderRadius="lg" width="full" align="center" fontSize="xxx-large">
            {eventList[index] !== undefined && (
                eventList[index] + (index + 1) + " found"
            )}
            {eventList[index] === undefined && (
                "Look for mark " + (index + 1)
            )}
        </Box>
    )
}