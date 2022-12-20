import api from '../api';

const getPayment = (userId) => {
    return api.get(`/payment/${userId}`);
};

const createPayment = (data) => {
    return api.post('/payment', {
        data
    })
}

const putPayment = (data) => {
    return api.put(`/payment/${data.paymentId}`, {
        data
    })
}

const PaymentService = {
    getPayment,
    createPayment, 
    putPayment
}

export default PaymentService;