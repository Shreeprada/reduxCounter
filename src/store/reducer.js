let initialState={
    count:0
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "increment":{state.count++;
                            return {...state};
        }
        case "decrement":{state.count--;
                            return {...state};
        }
        case "add":{
            console.log(action.payload);
            state.count=state.count+Number(action.payload);
            return {...state};
        }
        case "sub":{
            state.count=state.count-Number(action.payload);
            return {...state};
        }
        case "mul":{
            state.count=state.count*Number(action.payload);
            return {...state};
        }
        case "div":{
            state.count=state.count/Number(action.payload);
            return {...state};
        }
        default:{return state;}
    }
    };
    