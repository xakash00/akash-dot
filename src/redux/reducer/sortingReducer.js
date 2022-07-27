

function compare(a, b) {
    if (a.new_cashback_type === "Fixed" || b.new_cashback_type == "Fixed") {
        return b.new_cashback_amount - a.new_cashback_amount;
    }
    else if (a.new_cashback_type < b.new_cashback_type) {
        return b.new_cashback_amount - a.new_cashback_amount;
    }
    return 0;
}

export const getSortedProducts = (arrayObj, sortBy,category,brands) => {
    switch (sortBy) {

        case 'PRICE_HIGH_TO_LOW':
            return arrayObj.sort((a, b) => b.price - a.price);

        case 'PRICE_LOW_TO_HIGH':
            return arrayObj.sort((a, b) => a.price - b.price);

        case 'RATING':
            return arrayObj.sort((a, b) => b.rating - a.rating);

        case 'DISCOUNT':
            return arrayObj.sort((a, b) => b.discountPercentage - a.discountPercentage);

        case 'CLEARANCE_SALE':
            return arrayObj.filter(item => item.stock < 20 ? item : null)

        case 'CATEGORY':
            return arrayObj.filter(item => item.category === category ? item : null)

            
        case 'none':
            return arrayObj;

        default:
            console.log('something went wrong....');
            return arrayObj;
    }
};

export const sortingReducer = (state, action) => {
    switch (action.type) {
        case 'SORT':
            return { ...state, sortBy: action.payload };
        default:
            console.log('something is wrong with reducer function');
            break;
    }
};
