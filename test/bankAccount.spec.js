import { Account, OPERATION } from '../src/bankAccount';

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

    describe('client history', () => {

        beforeEach(() => {
            jest
                .spyOn(global, 'Date')
                .mockReturnValue(new Date('2020-10-16T08:38:32.102Z'));
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        test('operation appear in bank history', () => {

            let bankAccount = Account(100)
                .deposit(50);

            expect(bankAccount.getHistory()).toStrictEqual([
                {
                    operation: OPERATION.DEPOSIT,
                    date: new Date(),
                    amount: 50,
                    balance: 150
                }
            ]);
        });

        test('multiple operations appear in bank history', () => {

            let bankAccount = Account(100)
                .deposit(50)
                .withdraw(20);

            expect(bankAccount.getHistory()).toStrictEqual([
                {
                    operation: OPERATION.DEPOSIT,
                    date: new Date(),
                    amount: 50,
                    balance: 150
                },
                {
                    operation: OPERATION.WITHDRAW,
                    date: new Date(),
                    amount: 20,
                    balance: 130
                }
            ]);
        });
    });
});
