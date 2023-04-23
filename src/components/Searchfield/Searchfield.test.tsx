import { render, screen } from '@testing-library/react';
import Searchfield from './Searchfield';

describe('Searchfield | component | unit test', () => {
  it('should render with success', () => {
    render(<Searchfield />);

    expect(
      screen.getByRole('combobox', { name: /search for a city/i })
    ).toBeInTheDocument();
  });
});
