import React from 'react'
import DashboardCard from '../../../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography } from '@mui/material';

const Audit = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	  }));
	  const TypographyPayment = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		marginBottom: '10px',
	  }));
	  const TypographyDate = styled(Typography)(({ theme }) => ({
		color: theme.palette.accent.main,
	  }));
  return (
    <DashboardCard title='Total Line Audit'>
     <>
	    <Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
	     	<TypographyStyled variant='h3' ><b>$ 98442,989,98.90</b></TypographyStyled>
		</Stack>
		<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
			<Box>
				<TypographyPayment  variant='h5'>Shortage claims audit:</TypographyPayment>
				<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
			</Box>
    	</Stack>
	 </>		
	</DashboardCard>
  )
}

export default Audit;
