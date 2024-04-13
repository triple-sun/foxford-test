import { Box } from '@mui/material';
import NoResponses from '../no-responses/no-responses';
import { Answer, UserResponse } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Имя', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'answer', headerName: 'Ответ', width: 150 },
  { field: 'createdAt', headerName: 'Дата', width: 150 },
];

const ResponsesComponent = ({ responses }: { responses: UserResponse[] }) => {
  if (responses.length < 0) {
    return <NoResponses />;
  }

  const rows = responses.map(r => ({...r, answer: r.answer === Answer.YES ? 'Да' : 'Нет'}))
  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
      autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 30, page: 0 },
          },
        }}
        rows={rows}
        columns={columns}
        pageSizeOptions={[30, 60, 90]}
      />
    </Box>
  );
};

export default ResponsesComponent;
