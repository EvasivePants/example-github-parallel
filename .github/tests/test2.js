// test.js
const chai = require('chai');
const assert = chai.assert;

describe('files', function () {
    describe('import', function () {
        it('should import pdf', function () {
            assert.isTrue(true);
        });

        it('should import html', function () {
            assert.isTrue(true);
        });

        it('should import yml', function () {
            assert.isTrue(true);
        });

        it('should import text', function () {
            // Fail in 50% of cases
            if (Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        });
    });
	
	// [..]
});
