import { render, screen } from '@testing-library/react';
import App from 'App';

describe('SearchField | component | unit test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render a title', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Weather forecast' })
    ).toBeInTheDocument();
  });
});
