import {doTheThing} from "../src";

describe('setup test env', function () {
    it('basic passing test', () => {
        expect(doTheThing()).toStrictEqual(true);
    });
});
