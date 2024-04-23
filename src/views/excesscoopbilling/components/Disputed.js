import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; 
import { useTheme } from '@emotion/react';
const Disputed = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		fontSize: '16px',
	  }));
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		border: '1px solid currentColor',
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '4px 10px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
	  const theme = useTheme();
  return (
    <DashboardCard title={
		<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>
			Disputed Amount
		</Typography>
	} action={
		<ButtonStyled component={Link} to="/manage-dispute">View Details <IconChevronRight  size="15" /></ButtonStyled>
	}>
     <>
	    <Stack direction='row' spacing={1} alignItems='center'>
			<Box>
			   <Typography variant='h1' sx={{ color: theme.palette.primary.main }}>$8989</Typography>
			</Box>
			
		</Stack>
		<Stack direction='row'>
		   <TypographyStyled variant='body2'marginTop={2} sx={{ color: theme.palette.primary.main }}>View all raised disputes till date</TypographyStyled>
        </Stack>
	
	 </>		

	</DashboardCard>
  )
}

export default Disputed;
