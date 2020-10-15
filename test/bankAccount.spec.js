import { checkAccountBalance, deposit, withdraw } from '../src/bankAccount';

describe('bank account system', function() {
    describe('client abilities', () => {
        test('check empty account balance', () => {
            const bankAccount = { balance: 0 };

            expect(checkAccountBalance(bankAccount)).toStrictEqual(0);
        });

        test('check account balance', () => {
            const bankAccount = { balance: 100 };

            expect(checkAccountBalance(bankAccount)).toStrictEqual(100);
        });
    });

    describe('client can deposit', () => {
        test('account will be credited', () => {
            let bankAccount = { balance: 0 };

            bankAccount = deposit(bankAccount, 100);

            expect(checkAccountBalance(bankAccount)).toStrictEqual(100);
        });

        test('account balance increase when credited', () => {
            let bankAccount = { balance: 0 };

            const previousBalance = checkAccountBalance(bankAccount);

            bankAccount = deposit(bankAccount, 100);

            expect(checkAccountBalance(bankAccount))
                .toBeGreaterThan(previousBalance);
        });
    });

    describe('client can withdrawal', () => {
        test('account balance will decrease', () => {
            let bankAccount = { balance: 100 };

            bankAccount = withdraw(bankAccount, 50);

            expect(checkAccountBalance(bankAccount)).toStrictEqual(50);
        });
    });
});
