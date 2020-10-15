export const checkAccountBalance = ({ balance }) => {
    return balance;
};

export const deposit = (bankAccount, amount) => {
    const newBalance = bankAccount.balance += amount;

    return { ...bankAccount, balance: newBalance };
};