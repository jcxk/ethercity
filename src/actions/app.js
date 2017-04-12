export function addHouse(values) {
  return {
    type: 'ADD_HOUSE', payload:{pos: values.pos , eth_addr: values.eth_addr, asset_name: 'house1'}
  };
}

export function fetchCity() {
    return {
        type: 'FETCH_CITY'
    };
}
