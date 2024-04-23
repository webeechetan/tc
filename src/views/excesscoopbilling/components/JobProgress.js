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
import { IconArrowNarrowUp } from '@tabler/icons-react';

const job = [
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 65
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 45
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 75
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 35
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 4
    },
];
const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '7px',
}));

const TableTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: '1px solid currentColor',
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
    padding: '4px 10px',
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.dark,
    },
}));

const JobProgress = () => {
    const theme = useTheme();

    return (
        <DashboardCard title={
            <Typography variant='h4' sx={{ color: theme.palette.text.dark }}>
                Jobs in Progress
            </Typography>
        } action={
            <ButtonStyled>Export  <IconArrowNarrowUp size="16" /></ButtonStyled>
        }>
            <Box>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 3 }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Vendor Name
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Date
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Type
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Agreement Id/ Disputed Id
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Pending Task
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Progress
                                </TableTypography>
                            </TableCell>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {job.map((job, index) => (
                            <TableRow key={index} sx={{ color: theme.palette.text.primary }}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {job.Vendor}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Date}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Type}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{
                                            fontSize: "15px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Task}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <LinearProgress variant="determinate" value={job.Progress} sx={{ flexGrow: 1, borderRadius: 10, mr: 1 }} />
                                        <Typography variant="body2">{job.Progress}%</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default JobProgress;
