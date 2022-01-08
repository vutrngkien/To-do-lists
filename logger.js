export default function withLogger (reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState: ',prevState)
        console.log('Action arguments: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('nextState: ',nextState)
        console.groupEnd(action)
        return nextState
    }
}  