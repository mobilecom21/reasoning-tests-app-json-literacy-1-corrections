import Tests from './index.js';
import TestSpec from '../../specs/test/index.js';

describe('verbal tests', () => {
  for (id in Tests.tests) {
    describe(parseInt(id) + 1, function() {
      TestSpec(Tests.tests[id]);
    });
  }
});
