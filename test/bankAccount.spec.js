import { Account } from '../src/bankAccount';
import { OPERATION } from '../src/operation';

describe('bank account system', function() {
    describe('client abilities', () => {
        test('check empty account balance', () => {
            const account = Account(0);

            expect(account.getBalance()).toStrictEqual(0);
        });
    });

    describe('one deposit', () => {
        test('account balance increase when credited', () => {
            const bankAccount = Account()
                .deposit(100);

            expect(bankAccount.getBalance())
                .toStrictEqual(100);
        });
    });

    describe('client can withdrawal', () => {
        test('account balance will decrease', () => {


            const bankAccount = Account(100)
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

            const bankAccount = Account(100)
                .deposit(50);

            expect(bankAccount.getHistory()).toStrictEqual([
                {
                    operation: OPERATION.INIT,
                    date: new Date(),
                    amount: 100,
                    balance: 100
                },
                {
                    operation: OPERATION.DEPOSIT,
                    date: new Date(),
                    amount: 50,
                    balance: 150
                }
            ]);
        });

        test('multiple operations appear in bank history', () => {

            const bankAccount = Account(100)
                .deposit(50)
                .withdraw(20);

            expect(bankAccount.getHistory()).toStrictEqual([
                {
                    operation: OPERATION.INIT,
                    date: new Date(),
                    amount: 100,
                    balance: 100
                },
                {
                    operation: OPERATION.DEPOSIT,
                    date: new Date(),
                    amount: 50,
                    balance: 150
                },
                {
                    operation: OPERATION.WITHDRAW,
                    date: new Date(),
                    amount: -20,
                    balance: 130
                }
            ]);
        });
    });
});
