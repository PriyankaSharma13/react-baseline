import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    
      <Skeleton
        sx={{ bgcolor: 'grey.900',textAlign:"center" ,ml:"30px",mt:"40px"}}
        variant="rectangular"
        width={400}
        height={400}
      />
    
  );
}
