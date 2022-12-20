import { 
    FETCH_PAYMENT,
    CREATE_PAYMENT, 
    PUT_PAYMENT
} from '../actions/types';

const initialState = [];

const paymentReducer = (payment = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_PAYMENT:
            return payment = payload.payment;
        case CREATE_PAYMENT:
            return payment;
        case PUT_PAYMENT:
            return payment;
        default: 
            return payment;
    }
}

export default paymentReducer;