import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; 
const Disputed = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		fontSize: '16px',
	  }));
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		border: '1px solid #5D87FF',
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '4px 10px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
  return (
    <DashboardCard title='Disputed Amount'>
     <>
	    <Stack direction='row' spacing={4} useFlexGap justifyContent="space-between" alignItems='center'>
			<Box>
			   <Typography variant='h3'>$8989</Typography>
			</Box>
			<Box><ButtonStyled component={Link} to="/manage-dispute">View Details  <IconChevronRight  size="16" /></ButtonStyled></Box>
		</Stack>
		<Stack direction='row'>
		   <TypographyStyled variant='body2'marginTop={2}>View all raised disputes till date</TypographyStyled>
        </Stack>
	
	 </>		

	</DashboardCard>
  )
}

export default Disputed;
