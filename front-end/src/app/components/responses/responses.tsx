import { Box } from '@mui/material';
import { Answer, UserResponse } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Имя', width: 180 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'answer', headerName: 'Ответ', width: 100 },
  { field: 'date', headerName: 'Дата', width: 200 },
];

const ResponsesComponent = ({ responses }: { responses: UserResponse[] }) => {
  const rows = responses.map((r) => ({
    ...r,
    answer: r.answer === Answer.YES ? 'Да' : 'Нет',
    date: dayjs(r.createdAt).locale('ru-ru').format('D.M.YYYY h:mm:ss'),
  }));
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
