import { render, screen } from '@testing-library/react';
import Test from './Test';

describe('Test | component | unit test', () => {
  it('should render with success', () => {
    render(<Test>Test</Test>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
