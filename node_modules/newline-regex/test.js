/* global describe, it */
/* eslint no-unused-expressions:0 */
'use strict';
import {expect} from 'chai';
import newlineRegex from './lib/';

describe('newline-regex', () => {
  describe('default export', () => {
    it('should match Unix newline', () => {
      expect(newlineRegex.test('Unix\n')).to.eql(true);
    });

    it('should match Windows newline', () => {
      expect(newlineRegex.test('Windows\r\n')).to.eql(true);
    });

    it('should not match when no newline', () => {
      expect(newlineRegex.test('Nothing')).to.eql(false);
    });
  });

  describe('g export', () => {
    it('should find 2 newline characters', () => {
      expect('Unix\n and Windows\r\n'.match(newlineRegex.g).length).to.eql(2);
    });
  });
});
