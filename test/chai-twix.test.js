import Muter, {captured} from 'muter';
import {expect} from 'chai';
import ChaiTwix from '../src/chai-twix';

describe('Testing ChaiTwix', function () {
  const muter = Muter(console, 'log'); // eslint-disable-line new-cap

  it(`Class ChaiTwix says 'Hello world!'`, captured(muter, function () {
    new ChaiTwix();
    expect(muter.getLogs()).to.equal('Hello world!\n');
  }));
});
