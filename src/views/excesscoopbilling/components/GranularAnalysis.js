import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
    {
        Subtype: "Duplicate Freight",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    },
    {
        Subtype: "Duplicate",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    },
    {
        Subtype: "Duplicate odd",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    }
];

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    padding: '16px',
	borderBottom: '1px solid #eee',
}));

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
}));

const GranularAnalysis = () => {
    const theme = useTheme();

    return (
        <DashboardCard title="Granular Analysis">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHeadStyled>
                        <TableRow>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Sub-type
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Findings $
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Prior Adjustments $Name
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Net Off
                                </Typography>
                            </TableCellStyled>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                <TableCellStyled>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.Subtype}
                                    </Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.Findings$}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.PriorAdjustments$}
                                    </Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.NetOff}
                                    </Typography>
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default GranularAnalysis;
