import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Button, Stack, TableContainer
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import {IconPencilMinus, IconTrash} from '@tabler/icons-react';

const disputeTable = [
    {
	   Id: 'DSPT11435911135',
	   Amount: '1234',
	   Refund: '3245',
	   Created: 'KB',
	   Date: '10/04/24',
	   Payment: '10/05/24',
	   PaymentId: '123',
	   ResolveDate: '10/06/24',
	   Reason: 'Promotional Billings',
	   Tat: '1 Day',
	   Status: 'Resolved',
	   Action: ''
    },
	{
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		// ResolveDate: '10/06/24',
		// Reason: 'Promotional Billings',
		// Tat: '1 Day',
		// Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
   
];

const TableCellStyled = styled(TableCell)(({ theme }) => ({
	borderBottom: '1px solid #eee',
}));

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
}));

const DisputeTable = () => {
    const theme = useTheme();

    return (
        <DashboardCard>
            <Typography variant="h5" mb={2}>Dispute Table</Typography>
            <Box>
             <TableContainer>
	  		    <Table aria-label="simple table" sx={{minWidth: '100%'}}
                >
                    <TableHeadStyled>
                        <TableRow>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Dispute ID
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Amount
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Refund
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Created By
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Date
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment Date
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment ID
                                </Typography>
                            </TableCellStyled>
                            {/* <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Resolve Date
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Reason
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    TAT
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCellStyled> */}
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Action
                                </Typography>
                            </TableCellStyled>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {disputeTable.map((dispute, index) => (
                            <TableRow key={index}>
                                <TableCellStyled>
                                    <Typography variant="subtitle2" fontWeight={600}>{dispute.Id}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Amount}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Refund}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Created}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Date}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Payment}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.PaymentId}</Typography>
                                </TableCellStyled>
                                {/* <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.ResolveDate}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Reason}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Tat}</Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography variant="subtitle2">{dispute.Status}</Typography>
                                </TableCellStyled> */}
                                <TableCellStyled>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Button size="small" startIcon={<IconPencilMinus />}></Button>
                                        <Button size="small" startIcon={<IconTrash />}></Button>
                                    </Stack>
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
			 </TableContainer>
            </Box>
        </DashboardCard>
    );
};

export default DisputeTable;
