const initialStateCityReducer = {
    objects: []
};

export default function appReducer(state = initialStateCityReducer, action) {
    switch (action.type) {
        case 'ADD_HOUSE':
            console.log(state);
            let x =  state.objects;
            x.push(action.payload);
            console.log(x);
            return  {
                ...state,
                objects: [...state.objects, action.payload]
            };
        case 'FETCH_CITY':
            return {
                ...state,
                objects: [
                    {asset_name: 'house1', eth_addr: 'asdfaf', pos:{x: 0, y: 0, z: 0}}
                ]
            };
        default:
            return state;
    }
}