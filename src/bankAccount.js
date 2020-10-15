export const Account = (() => {
    const makeAccount = (balance) => {

        const _balance = balance.reduce(
            (acc, value) => acc + value
        );

        const deposit = (amount) => {
            return makeAccount([...balance, amount]);
        };

        const withdraw = (amount) => {
            return makeAccount([...balance, -amount]);
        };

        const getBalance = () => {
            return _balance;
        };

        return Object.freeze({
            deposit,
            withdraw,
            getBalance
        });
    };

    return (amount) => makeAccount([amount]);
})();

export const checkAccountBalance = ({ balance }) => {
    return balance;
};

export const deposit = (bankAccount, amount) => {
    const newBalance = bankAccount.balance += amount;

    return { ...bankAccount, balance: newBalance };
};

export const withdraw = (bankAccount, amount) => {
    const newBalance = bankAccount.balance -= amount;

    return { ...bankAccount, balance: newBalance };
};