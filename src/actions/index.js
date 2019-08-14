


export const addItem = feature =>{
        return {type: 'ADD_ITEM', payload: feature}
};

export const removeItem = id =>{
    return {type: 'REMOVE_ITEM', payload: id}
};