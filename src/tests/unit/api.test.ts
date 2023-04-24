import axios from 'axios';
import { fetchCityList } from 'utils';

jest.mock('axios');

const MOCK_CITY = 'mock city';
const MOCK_REGION_CODE = 'mock region code';

const MOCK_AXIOS_OUTPUT = {
  data: {
    data: [
      {
        name: MOCK_CITY,
        regionCode: MOCK_REGION_CODE,
      },
    ],
  },
};

describe('fetchCityList | function | unit test', () => {
  it('should return a list of cities if API request is successful', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(MOCK_AXIOS_OUTPUT);
    const cityList = await fetchCityList(MOCK_CITY);

    expect(cityList).toEqual([`${MOCK_CITY}, ${MOCK_REGION_CODE}`]);
  });

  it('should throw an error if API request fails', async () => {
    const error = new Error('Request failed');
    (axios.get as jest.Mock).mockRejectedValueOnce(() => error);

    const result = await fetchCityList(MOCK_CITY);

    expect(result).toBeUndefined();
  });
});
