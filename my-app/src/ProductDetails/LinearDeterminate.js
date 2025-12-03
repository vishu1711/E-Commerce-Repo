import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
return (
    <Box sx={{ width: '5%' }}>
      <LinearProgress color="success"  variant="determinate" value={40} />
    </Box>
  );
}
