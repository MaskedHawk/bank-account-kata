import { getTotalBalanceOfOperation, makeOperation, OPERATION } from './operation';

export const Account = (() => {
    const makeAccount = (operations) => {


        const deposit = (amount) => {
            return makeAccount(
                [...operations, makeOperation({
                    operation: OPERATION.DEPOSIT,
                    amount: amount
                })]
            );
        };

        const withdraw = (amount) => {
            return makeAccount(
                [...operations, makeOperation({
                    operation: OPERATION.WITHDRAW,
                    amount: -amount
                })]
            );
        };

        const getBalance = () => {
            return getTotalBalanceOfOperation(operations);
        };

        const getHistory = () => {
            return getOperationsHistory(operations);
        };

        return Object.freeze({
            deposit,
            withdraw,
            getBalance,
            getHistory
        });
    };

    return (amount = 0) => makeAccount([
        makeOperation({ operation: OPERATION.INIT, amount })
    ]);
})();

const getCumulativeSum = (previousBalance => ({ amount }) => previousBalance += amount);

const getOperationsHistory = (operations) => {
    const getNewBalance = getCumulativeSum(0);

    return operations.map((operation) => ({
        ...operation,
        balance: getNewBalance(operation)
    }));
};


