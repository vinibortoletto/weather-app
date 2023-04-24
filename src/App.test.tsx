import { render, screen } from '@testing-library/react';
import App from 'App';

describe('SearchField | component | unit test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render Title component', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /weather forecast/i })
    ).toBeInTheDocument();
  });

  it('should render SearchField component', () => {
    render(<App />);
    expect(
      screen.getByRole('combobox', { name: /search for a city/i })
    ).toBeInTheDocument();
  });
});
