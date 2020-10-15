import { Account } from '../src/bankAccount';

describe('bank account system', function() {
    describe('client abilities', () => {
        test('check empty account balance', () => {
            const account = Account(0);

            expect(account.getBalance()).toStrictEqual(0);
        });

        test('check account balance', () => {
            const account = Account(100);

            expect(account.getBalance()).toStrictEqual(100);
        });
    });

    describe('one deposit', () => {
        test('account balance increase when credited', () => {
            const bankAccount = Account(0)
                .deposit(100);

            expect(bankAccount.getBalance())
                .toStrictEqual(100);
        });
    });

    describe('client can withdrawal', () => {
        test('account balance will decrease', () => {

            let bankAccount = Account(100)
                .withdraw(50);

            expect(bankAccount.getBalance()).toStrictEqual(50);
        });
    });
});
