import React from 'react';
import { Pagination, Box } from '@mui/material';

const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};

export default CustomPagination;
