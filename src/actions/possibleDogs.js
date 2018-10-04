export const SET_POSSIBLE_DOGS = 'SET_POSSIBLE_DOGS';


export function setPossibleDogs(props) {
        return {
            type: "SET_POSSIBLE_DOGS",
            payload: props.slice(0, 3)
        }
    
}
