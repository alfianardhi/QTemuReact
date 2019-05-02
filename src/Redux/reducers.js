const myStore = {
    title: 'Ini sebuah Title lewat redux',
    inf: 'learn React',
    people:[],
    angka:0
}

const myReducer = (state = {...myStore}, action) => {
    switch (action.type){
        case('INCREMENT'):
            return ({
                ...state, //ini copy state
                angka: state.angka += 1
            })

        case('DECREMENT'):
            return({
                ...state,
                angka: state.angka -= action.paramangka
            })
        
        case('ADDUSER'):
            return({
                ...state,
                people:action.payload
            })

        default:
            return state;
    }

}

export default myReducer;