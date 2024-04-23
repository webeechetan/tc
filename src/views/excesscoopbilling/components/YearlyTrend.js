import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import piggy from "src/assets/images/products/1.gif"; 
import {IconChevronRight} from '@tabler/icons-react';
const YearlyTrend = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		fontSize: '16px',
	  }));
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		border: '1px solid #5D87FF',
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '4px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
  return (
    <DashboardCard title='Yearly Trends'>
     <>
	    <Stack direction='row' spacing={4} useFlexGap justifyContent="space-between" alignItems='center'>
			<Box>
               <TypographyStyled variant='h6' marginBottom={1}>2024</TypographyStyled>
			   <Typography variant='h3'>$8989</Typography>
			</Box>
			<Box><ButtonStyled>View Details  <IconChevronRight  size="16" /></ButtonStyled></Box>
		</Stack>
		<Stack direction='row' spacing={4} useFlexGap marginTop={2}>
			<Box>
			<TypographyStyled variant='h6' marginBottom={1}>2022</TypographyStyled>
			<Typography variant='h6' className='text-dark' >$ 1,280,966.35</Typography>
			</Box>
			<Box>
			<TypographyStyled variant='h6' marginBottom={1}>2023</TypographyStyled>
			<Typography variant='h6'>$ 1,680,966.35</Typography>
			</Box>
        </Stack>
	
	 </>		

	</DashboardCard>
  )
}

export default YearlyTrend;
