import { assert } from 'chai';

const Mod9710 = require('../src');

const validNumbers = [
  '10757107',
  '79444'
];

const invalidNumbers = [
  null,
  undefined,
  'string',
  '123123',
  ''
];

describe('ISO7064', () => {
  describe('MOD 97-10', () => {
    it('should recognize valid number', () => {
      validNumbers.forEach((number) => {
        assert.equal(Mod9710.verify(number), true);
      });
    });

    it('should not recognize valid number', () => {
      invalidNumbers.forEach((number) => {
        assert.equal(Mod9710.verify(number), false);
      });
    });
    it('Should encode number', () => {
      assert.equal(Mod9710.encode(794), '79444');
      assert.equal(Mod9710.encode(107571), '10757107');
    });
    it('Should encode string', () => {
      assert.equal(Mod9710.encode('794'), '79444');
      assert.equal(Mod9710.encode('107571'), '10757107');
    });
    it('Should return the check number', () => {
      assert.equal(Mod9710.checkCode('794'), 44);
      assert.equal(Mod9710.checkCode('107571'), 7);
    });
    it('Should compute number to allow calculate check digit', () => {
      assert.equal(Mod9710.computeCheck('794'), 115);
      assert.equal(Mod9710.computeCheck('107571'), 386);
    });
    it('should get check digit', () => {
      assert.equal(Mod9710.getCheck('79444'), '44');
      assert.equal(Mod9710.getCheck('10757107'), '07');
    });
    it('should get data without check digit', () => {
      assert.equal(Mod9710.getData('79444'), '794');
      assert.equal(Mod9710.getData('10757107'), '107571');
    });
  });
});
