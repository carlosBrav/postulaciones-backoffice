import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'

function LayoutBody() {
  return (
    <Box minWidth="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
      <Outlet />
    </Box>
  );
}

export default LayoutBody;