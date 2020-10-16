export const OPERATION = {
    WITHDRAW: 'Withdraw',
    DEPOSIT: 'Deposit'
};

export const getCurrentDate = () => new Date();

export const Account = (() => {
    const makeAccount = (balance, history) => {

        const _balance = balance.reduce(
            (acc, value) => acc + value
        );

        const _history = history;

        const deposit = (amount) => {
            return makeAccount(
                [...balance, amount],
                [...history, {
                    operation: OPERATION.DEPOSIT,
                    date: getCurrentDate(),
                    amount: amount,
                    balance: _balance + amount
                }]);
        };

        const withdraw = (amount) => {
            return makeAccount(
                [...balance, -amount],
                [...history, {
                    operation: OPERATION.WITHDRAW,
                    date: getCurrentDate(),
                    amount: amount,
                    balance: _balance - amount
                }]
            );
        };

        const getBalance = () => {
            return _balance;
        };

        const getHistory = () => {
            return _history;
        };

        return Object.freeze({
            deposit,
            withdraw,
            getBalance,
            getHistory
        });
    };

    return (amount) => makeAccount([amount], []);
})();


