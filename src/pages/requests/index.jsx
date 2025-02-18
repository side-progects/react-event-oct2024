import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

import RequestList from '../../components/RequestCard/requestList.jsx';
import FilterPanel from '../../components/Requests/filterPanel.jsx';
import SearchResultsHeader from '../../components/Requests/searchSection.jsx';

function Requests() {
  const [searchWord, setSearchWord] = useState('');

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'start',
            padding: '40px',
          }}
        >
          Запросы о помощи
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            margin: '0 auto',
            paddingRight: '20px',
          }}
        >
          {/* filter */}
          <Box sx={{ display: 'flex', padding: '0 20px' }}>
            <FilterPanel />
          </Box>

          {/* main section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '1060px',
            }}
          >
            <Box
              sx={{
                alignContent: 'center',
                backgroundColor: '#ffffff',
                padding: '40px',
                marginBottom: '25px',
              }}
            >
              <SearchResultsHeader searchTerm={searchWord} onSearchChange={handleSearchChange} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                marginBottom: '40px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '970px',
                }}
              >
                <RequestList searchTerm={searchWord} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
