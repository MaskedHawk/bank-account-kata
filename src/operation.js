export const OPERATION = {
    INIT: 'Initialisation',
    DEPOSIT: 'Deposit',
    WITHDRAW: 'Withdraw'
};

export const getCurrentDate = () => new Date();

export const makeOperation = ({ operation, amount }) => {
    return {
        operation,
        amount,
        date: getCurrentDate()
    };
};

export const getTotalBalanceOfOperation = (operations) => {
    return operations.reduce(
        (acc, { amount }) => acc + amount, 0
    );
};