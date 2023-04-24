import { Autocomplete, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { fetchCityList } from 'utils';

// const API_KEY = 'da8e423a0090d2da2834266f3d0848dd';
// const API_ENDPOINT = 'https://api.openweathermap.org/geo/1.0/autocomplete';
// const CITY_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`;
// const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;
// const CITY_API_URL = `${API_ENDPOINT}?q=${value}&limit=10&appid=${API_KEY}`;

export default function SearchField() {
  const [cityList, setCityList] = useState<string[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [requestError, setRequestError] = useState(false);

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

  return (
    <div>
      <Autocomplete
        id="search-city"
        freeSolo
        options={cityList}
        onInputChange={handleInputChange}
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
