export const SET_POSSIBLE_DOGS = 'SET_POSSIBLE_DOGS';


export function setPossibleDogs(props, n = 3) {
    return {
        type: "SET_POSSIBLE_DOGS",
        payload: props.slice(0, n)
    }

}
