import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography,Avatar } from '@mui/material';
import {IconClock,IconBriefcase, IconCoinPound} from '@tabler/icons-react';
import BarChart from './BarChart';


const AuditTime = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.white,
	  }));
    const AvatarStyled = styled(Avatar)(({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      borderRadius: '7px',
     '& svg':{
        color:theme.palette.primary.main,
      }

      }));
  return (
    <DashboardCard title='Audit Time Period'>
     <>
	    <Stack direction='row' spacing={2} alignItems='center'>
        <Box>
          <TypographyStyled variant='h6' marginBottom={1}>Contribution to Total Findings</TypographyStyled>
        </Box>
        <BarChart />
		</Stack>
		<Stack direction='column'marginTop={3}>
      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
        <Stack direction='row' spacing={1} alignItems="center" marginBottom={2}>
          <AvatarStyled sizes='21'>
              <IconClock />
          </AvatarStyled>
          <Box>
            <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
          </Box>
        </Stack>
        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
      </Stack>
      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
        <Stack direction='row'spacing={1} alignItems="center">
          <AvatarStyled sizes='21'>
            <IconBriefcase />
          </AvatarStyled>
          <Box>
            <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
          </Box>
        </Stack>
        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
      </Stack>
      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
        <Stack direction='row'spacing={1} alignItems="center">
          <AvatarStyled sizes='21'>
            <IconCoinPound />
          </AvatarStyled>
          <Box>
            <Typography variant='h6' className='card-text text-dark'>Money Saved</Typography>
          </Box>
        </Stack>
        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
      </Stack>       
    </Stack>    
	 </>		

	</DashboardCard>
  )
}

export default AuditTime;
