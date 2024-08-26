import React, { useState } from 'react';
import { TextField, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import data from '../../Data'; // Import your data file
import bitebase from '../../images/BiteBaselogo.png';
import './search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const allRiceDishes = data.flatMap(restaurant =>
    restaurant.riceDishes.map(dish => ({
      ...dish,
      restaurantName: restaurant.restaurantName
    }))
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = allRiceDishes.filter(dish =>
      dish.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="search_container">
      <div className="search_logo">
        <img src={bitebase} alt="Logo" className="navbar-logo-icon" />
      </div>
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={handleChange}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: 'blue',
              },
              '&:hover fieldset': {
                borderColor: 'green',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'green',
              },
            },
          }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && suggestions.length > 0}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            },
          }}
        >
          {suggestions.length > 0 ? (
            suggestions.map(dish => (
              <MenuItem key={dish.id} onClick={handleClose} style={{ gap: '1rem'}} >
                <ListItemIcon>
                  <img src={dish.image} alt={dish.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }}  />
                </ListItemIcon>
                <ListItemText primary={`${dish.name} (${dish.restaurantName})`} />
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No suggestions</MenuItem>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Search;
