import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { fetchCityList } from 'utils';
import SearchField from './SearchField';

const MOCK_CITY = 'mock city';

jest.mock('utils');

describe('SearchField | component | unit test', () => {
  beforeEach(() => {
    render(<SearchField />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render with success', () => {
    expect(
      screen.getByRole('combobox', { name: /search for a city/i })
    ).toBeInTheDocument();
  });

  it('should call "fetchCityList" when typing in input', async () => {
    (fetchCityList as jest.Mock).mockResolvedValueOnce([MOCK_CITY]);

    const searchField = screen.getByLabelText('Search for a city');
    fireEvent.change(searchField, { target: { value: MOCK_CITY } });

    await waitFor(() => {
      expect(fetchCityList).toHaveBeenCalledWith(MOCK_CITY);
    });
  });

  it('should render an empty array when "fetchCityList" returns undefined', async () => {
    (fetchCityList as jest.Mock).mockResolvedValueOnce(undefined);
    const searchField = screen.getByLabelText('Search for a city');
    fireEvent.change(searchField, { target: { value: MOCK_CITY } });

    await waitFor(() => {
      expect(fetchCityList).toHaveBeenCalledWith(MOCK_CITY);
      expect(fetchCityList(MOCK_CITY)).toBeUndefined();
    });
  });

  it('should display an error message if request fails', async () => {
    (fetchCityList as jest.Mock).mockRejectedValueOnce(() => {
      throw new Error('Request failed');
    });

    const searchField = screen.getByLabelText('Search for a city');
    fireEvent.change(searchField, { target: { value: 'error' } });

    expect(
      await screen.findByText('There was an error. Try again.')
    ).toBeInTheDocument();
  });
});
