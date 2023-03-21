import userDetails from "../../data"

const initialState = {
    users: userDetails,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id){
                        return {...user, ...action.user}
                    }
                    return user
                })
            }
        default: 
            return state
    }
}