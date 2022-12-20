import { Box, Typography } from '@mui/material';
import React from 'react';
import {ButtonCustom} from '@presentation/components/button/buton-common'

type Props = {
  title: string
  titleButton: string
  onClick: ()=> void
}

function HeaderComponent({title, titleButton, onClick}: Props) {
  return (
    <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
        </Box>
        <Box>
          <ButtonCustom title={titleButton} type="button" onClick={onClick} />
        </Box>
      </Box>
  );
}

export default HeaderComponent;