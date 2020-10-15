import { checkAccountBalance } from '../src/bankAccount';

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
});
