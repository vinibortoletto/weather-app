import { Autocomplete, TextField } from '@mui/material';
import { ICityWeather } from 'interfaces';
import { SyntheticEvent, useState } from 'react';
import { fetchCityList, fetchCityWeather } from 'utils';

export default function SearchField() {
  const [cityList, setCityList] = useState<string[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [requestError, setRequestError] = useState(false);
  const [cityName, setCityName] = useState<string | null>('');
  const [cityWeather, setCityWeather] = useState<ICityWeather>();

  const handleInputChange = async (
    _event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    clearTimeout(timeoutId);

    const newTimeoutId: NodeJS.Timeout = setTimeout(async () => {
      try {
        const newCityList: string[] | undefined = await fetchCityList(value);
        setCityList(newCityList || []);
      } catch (error) {
        setRequestError(true);
      }
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  const handleAutocompleteChange = async (
    _event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    try {
      const newCityName: string | undefined = value?.split(',')[0];

      const newCityWeather: ICityWeather | undefined = await fetchCityWeather(
        newCityName
      );

      setCityName(value);

      setCityWeather(newCityWeather);

      /* 
        - city name, state code, country
        - temp in C - weather type
        - min temp/max temp
        - wind
        - feels like
        - humidity
        - weekdays with min/max
        ---------------
        - name
        - sys.country

      */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Autocomplete
        id="search-city"
        freeSolo
        options={cityList}
        onInputChange={handleInputChange}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField {...params} label="Search for a city" />
        )}
      />

      {requestError && (
        <div>
          <p>There was an error. Try again.</p>
        </div>
      )}
    </div>
  );
}
