import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography } from '@mui/material';
import piggy from "src/assets/images/products/1.gif"; 

const Findingamount = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	  }));
  return (
    <DashboardCard title='Finding Amount'>
     <>
	    <Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
			<Box>
			<TypographyStyled variant='h3' ><b>$ 98442</b></TypographyStyled>
			</Box>
		</Stack>
		<Stack direction='row' spacing={4} useFlexGap  justifyContent="flex-end" alignItems="flex-end" marginTop={3}>
			<Box>
				<img src={piggy} alt='piggy' className='card-img'/>
			</Box>
    	</Stack>
	 </>		

	</DashboardCard>
  )
}

export default Findingamount;
