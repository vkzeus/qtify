import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "./Searchicon.svg"; // Ensure this path is correct
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div className="Hero-div" style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Autocomplete
            sx={{
              width: "600px",
            }}
            id="search-album"
            options={searchData || []}
            getOptionLabel={(option) => option.title}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                variant="outlined"
                required
                InputProps={{
                  ...params.InputProps,
                  style: {
                    paddingRight: "48px", 
                    backgroundColor:"white"
                  },
                }}
              />
            )}
            isOptionEqualToValue={(option, value) => option.slug === value.slug}
            disableClearable
            ListboxComponent="ul"
          />

          
          <button
            type="submit"
            style={{
              background: "transparent",
              height:'auto',
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon style={{ width: "24px", height: "24px", fill: "#00ff00" }} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
