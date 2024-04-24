import React, {useState}from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Button, Stack, TableContainer, Dialog,DialogTitle, DialogContent, DialogActions, Grid 
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import {IconPencilMinus, IconTrash} from '@tabler/icons-react';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

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

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.success.main,
    borderRadius:'7px',
   
}));
const TypographyStyled = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.main,
   marginBottom:'10px'
   
}));

const TableTypography = styled(TableCell)(({ theme, index }) => ({
    color: theme.palette.primary.contrastText,

}));
const TableCellStyled = styled(TableCell)(({ theme, index }) => ({
    color: index % 2 === 0 ? theme.palette.primary.main : theme.palette.text.dark,

}));

const DisputeTable = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleEditClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false); 
    };


    return (
        <DashboardCard>
            <Typography variant="h4" mb={2}>Dispute Table</Typography>
            <Box>
             <TableContainer>
	  		    <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}
                >
                    <TableHeadStyled>
                        <TableRow>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Dispute ID
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Amount
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Refund
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Created By
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Date
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment Date
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment ID
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Resolve Date
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Reason
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    TAT
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableTypography>
                            <TableTypography>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Action
                                </Typography>
                            </TableTypography>
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
                                <TableCellStyled>
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
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Button size="small" startIcon={<IconPencilMinus />}   onClick={handleEditClick} ></Button>
                                        <Button size="small" startIcon={<IconTrash />}></Button>
                                    </Stack>
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
			 </TableContainer>
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth='sm' >
                <DialogTitle variant='h5'>Manage Client Dispute</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} marginBottom={2}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">
                                Dispute Id
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={2}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">
                                Dispute Amount
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={2}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">
                                Refund Amount
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                           
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">
                                Payment Unique Id
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">
                                Payment Receive Date
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item container justifyContent="center" gap={5}>
                            <Button variant="contained" color="secondary">
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary">
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>

            </Dialog>
        </DashboardCard>
    );
};

export default DisputeTable;
