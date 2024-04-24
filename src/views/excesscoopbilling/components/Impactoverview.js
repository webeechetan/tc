import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography,Avatar,Grid } from '@mui/material';
import {IconClock,IconBriefcase, IconCoinPound} from '@tabler/icons-react';
import BarChart from '../../../components/pages/BarChart';
import { useTheme } from '@emotion/react';


const Impactoverview = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	  }));
    const AvatarStyled = styled(Avatar)(({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      borderRadius: '7px',
     '& svg':{
        color:theme.palette.primary.contrastText,
      }

      }));
      const theme = useTheme();
  return (
    <DashboardCard title={
      <TypographyStyled variant='h2' sx={{ color: theme.palette.secondary.main }}>
        Impact Overview
      </TypographyStyled>
    } >
     <>
	   <Grid container spacing={2} alignItems='center'>
          <Grid item lg={6}>
            <Box>
              <TypographyStyled variant='h6' marginBottom={1} sx={{ color: theme.palette.accent.main }} >Recouped Amount</TypographyStyled>
              <Typography variant='h1' className='text-dark' sx={{ color: theme.palette.accent.main }} >$ 1,280</Typography>
            </Box>
          </Grid>
          <Grid item lg= {6}>
              <BarChart  color={theme.palette.accent.main} percentage={77.5} width='70px'  />
          </Grid>
     </Grid>
		<Stack direction='column'marginTop={3}>
      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
        <Stack direction='row' spacing={2} alignItems="center" marginBottom={2}>
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
        <Stack direction='row'spacing={2} alignItems="center">
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
        <Stack direction='row'spacing={2} alignItems="center">
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

export default Impactoverview;
