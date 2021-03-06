import React from 'react';
import Test from './Test';

import renderer from 'react-test-renderer';

const defaultProps = {
  testId: 1,
  test: {
    name: 'foo',
    attachments: {},
    questions: [],
    pass_percentage: 10,
    time_limit: 10,
  },
};

describe('Test', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Test {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

