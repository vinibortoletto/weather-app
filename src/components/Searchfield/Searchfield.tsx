import { Autocomplete, TextField } from '@mui/material';

export default function Searchfield() {
  return (
    <Autocomplete
      id="search-city"
      freeSolo
      options={[]}
      renderInput={(params) => (
        <TextField {...params} label="Search for a city" />
      )}
    />
  );
}
