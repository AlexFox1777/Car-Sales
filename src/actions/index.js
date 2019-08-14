


export const addItem = feature =>{
        return {type: 'ADD_ITEM', payload: feature}
};

export const removeItem = item =>{
    return {type: 'REMOVE_ITEM', payload: item}
};