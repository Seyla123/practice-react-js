const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const VALUEADD = 'value-add';
const CHANGEVALUE = 'change-value'

const reducer = (state, action) =>{
    switch(action.type){
        case INCREMENT:
            return {...state,
                count : state.count + 1}
        case DECREMENT:
            return {...state,
                count : state.count - 1}
        case RESET:
            return {...state,
                count : 0}
        case VALUEADD:
            return {...state,
                count : state.count + action.payload}
        case CHANGEVALUE:
            return {...state,
                count : action.payload}
        default:
            throw new Error('Unknow Action Type')
    }
}

export default reducer;