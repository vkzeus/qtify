import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "./Searchicon.svg";
import { Autocomplete, TextField, Tooltip } from '@mui/material';
// import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null);  // Add state to manage selected value
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div className="Hero-div" style={{ position: "relative"}}>
      <form
        className={styles.wrapper}
        onSubmit={onSubmit}  // Directly use the onSubmit function
      >
        <div>
          <Autocomplete
           sx={{
            width: '600px', 
            padding:'0px',
          }}
            id="search-album"
            options={searchData || []}
            getOptionLabel={(option) => option.title}
            value={value}  // Bind selected value
            onChange={(e, newValue) => setValue(newValue)} // Handle value change
            renderInput={(params) => (
              <TextField
                {...params}
                className={styles.search}
                placeholder={placeholder}
                variant="outlined"
                required
              />
            )}
            isOptionEqualToValue={(option, value) => option.slug === value.slug}
            disableClearable
            ListboxComponent="ul"
            renderOption={(props, option) => {
              const artists = option.songs.reduce((accumulator, currentValue) => {
                accumulator.push(...currentValue.artists);
                return accumulator;
              }, []);
              
              return (
                <li {...props} className={styles.listElement}>
                  <div>
                    <p className={styles.albumTitle}>{option.title}</p>
                    <p className={styles.albumArtists}>
                      {/* {truncate(artists.join(", "), 40)} */}
                    </p>
                  </div>
                </li>
              );
            }}
            noOptionsText="No albums found"
            renderEndAdornment={() => (
              
                <button type="submit"  className={styles.searchButton}>
                  <SearchIcon className={styles.searchIcon} />
                  
                </button>
             
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
