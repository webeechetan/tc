import { Typography, styled, Box } from '@mui/material';
import React from 'react';
import DashboardCard from '../../../../../components/shared/DashboardCard';
import BarChart from '../../../../../components/pages/BarChart';
import { useTheme } from '@emotion/react';

const CurrentStage = () => {
    const TypographyStyled = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
    }));
    const theme = useTheme();

    return (
        <DashboardCard title='Current Stage'>
            <Box>
                <TypographyStyled variant='h4'>Stage: 4</TypographyStyled>
                <BarChart color={theme.palette.secondary.main} percentage={30} />
            </Box>
        </DashboardCard>
    );
}

export default CurrentStage;
