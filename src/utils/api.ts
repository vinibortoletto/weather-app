import axios from 'axios';
import { ICity, ICityResponse } from 'interfaces';

const removeDuplicateCity = (cityList: string[]): string[] => {
  const newCityList: string[] = Array.from(new Set(cityList));
  return newCityList;
};

export const fetchCityList = async (
  cityName: string
): Promise<string[] | undefined> => {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'abad364174msh3e17df8e3c7fdd7p1dc4a7jsnd2473c4372c4',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const { data: response } = await axios.get<ICityResponse>(
      `${url}/cities?namePrefix=${cityName}`,
      options
    );

    const cityList: string[] = response.data.map(
      ({ name, regionCode }: ICity) => `${name}, ${regionCode}`
    );

    return removeDuplicateCity(cityList);
  } catch (error) {
    console.error(error);
  }
};
