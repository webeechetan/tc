import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Button, LinearProgress
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import {IconArrowNarrowUp} from '@tabler/icons-react';

const job = [
    {
       Vendor:'Au-Califal',
	   Date: '11/04/24',
	   Type: 'Quantity Mismatch',
	   Id: '88799979',
	   Task: 'Pulling Po Invoice Data(3/3)',
	   Progress: 65 
    },
    {
		Vendor:'Au-Califal',
		Date: '11/04/24',
		Type: 'Quantity Mismatch',
		Id: '88799979',
		Task: 'Pulling Po Invoice Data(3/3)',
		Progress: 45 
	 },
	 {
		Vendor:'Au-Califal',
		Date: '11/04/24',
		Type: 'Quantity Mismatch',
		Id: '88799979',
		Task: 'Pulling Po Invoice Data(3/3)',
		Progress: 75 
	 },
	 {
		Vendor:'Au-Califal',
		Date: '11/04/24',
		Type: 'Quantity Mismatch',
		Id: '88799979',
		Task: 'Pulling Po Invoice Data(3/3)',
		Progress: 35
	 },
	 {
		Vendor:'Au-Califal',
		Date: '11/04/24',
		Type: 'Quantity Mismatch',
		Id: '88799979',
		Task: 'Pulling Po Invoice Data(3/3)',
		Progress: 4 
	 },
];

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    padding: '8px 16px', 
	borderBottom: '1px solid #eee',
}));

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
}));
const ButtonStyled = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	border: '1px solid #5D87FF',
	color: theme.palette.primary.contrastText,
	fontSize: '16px',
	padding: '5px 25px',
	'&:hover': {
		backgroundColor: theme.palette.primary.contrastText,
		color: theme.palette.primary.dark,
	  },
  }));
const JobProgress = () => {
    const theme = useTheme();

    return (
        <DashboardCard title="Jobs In Progress" action={
			<ButtonStyled>Export  <IconArrowNarrowUp  size="16" /></ButtonStyled>
		}>
            <Box>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                    }}
                >
                    <TableHeadStyled>
                        <TableRow>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Vendor Name
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Date
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Type
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Agreement Id/ Disputed Id
                                </Typography>
                            </TableCellStyled>
							<TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                   Pending Task
                                </Typography>
                            </TableCellStyled>
							<TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                   Progress
                                </Typography>
                            </TableCellStyled>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {job.map((job, index) => (
                            <TableRow key={index}>
                                <TableCellStyled>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {job.Vendor}
                                    </Typography>
                                </TableCellStyled>
								<TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={500}>
                                        {job.Date}
                                    </Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={500}>
                                        {job.Type}
                                    </Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={500}>
                                        {job.Id}
                                    </Typography>
                                </TableCellStyled>
								<TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={500}>
                                        {job.Task}
                                    </Typography>
                                </TableCellStyled>
								<TableCellStyled>
                                    <Box display="flex" alignItems="center">
                                        <LinearProgress variant="determinate" value={job.Progress} sx={{flexGrow: 1, borderRadius: 10, mr: 1}}  />
                                        <Typography variant="body2">{job.Progress}%</Typography>
                                    </Box>
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default JobProgress;
