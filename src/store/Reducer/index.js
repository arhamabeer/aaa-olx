

const Initial_State = {
   current_user: ''
}


export default (state = Initial_State, action) => {
    console.log('action=>', action)
    switch(action.type){
        case 'SendData' :
            return({
                ...state,
                current_user: action.user
            })
    }
    return state;
}