import React from 'react';
import { Default } from './Button.stories';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should render the correct classes', () => {
    const { container } = render(<Default {...Default.args} />);
    const button = container.querySelector('button');

    expect(button).toHaveClass('bg-blue-700 text-white');
  });
});
