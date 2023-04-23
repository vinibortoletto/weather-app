import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title | component | unit test', () => {
  it('should render with success', () => {
    render(<Title>Title</Title>);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
