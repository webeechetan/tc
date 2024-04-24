import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
const RecoupedAmount = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
	  }));
	  const theme = useTheme();
	  const secondary = theme.palette.secondary.main;
	  const success = 'theme.palette.success.main';
	  const errorlight = '#fdede8';
	
	  // chart
	  const optionscolumnchart = {
		chart: {
		  type: 'area',
		  fontFamily: "'Plus Jakarta Sans', sans-serif;",
		  foreColor: '#adb0bb',
		  toolbar: {
			show: false,
		  },
		  height: 60,
		  sparkline: {
			enabled: true,
		  },
		  group: 'sparklines',
		},
		stroke: {
		  curve: 'smooth',
		  width: 2,
		},
		fill: {
		  colors: [success],
		  type: 'solid',
		  opacity: 0.05,
		},
		markers: {
		  size: 0,
		},
		tooltip: {
		  theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
		},
	  };
	  const seriescolumnchart = [
		{
		  name: '',
		  color: secondary,
		  data: [25, 66, 20, 40, 12, 58, 20],
		},
	  ];
  return (
    <DashboardCard  title={
		<TypographyStyled variant='h4' sx={{ color: theme.palette.accent.main }}>
			 Recoupened Amount
		</TypographyStyled>
	} 
	footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />
      }>
     <>
	    <Stack direction='row' spacing={4} useFlexGap justifyContent="space-between" alignItems='center'>
			<Box>
			   <TypographyStyled variant='h1' sx={{ color: theme.palette.accent.main }}>$ 4,942,234.43</TypographyStyled>
			</Box>
		</Stack>
		<Stack direction='row'>
		  
        </Stack>
	
	 </>		

	</DashboardCard>
  )
}

export default RecoupedAmount;
