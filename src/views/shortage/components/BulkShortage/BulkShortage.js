import { Grid,styled, Typography,Box} from '@mui/material'
import React from 'react'
import YearlyTrend from '../../../../components/pages/YearlyTrend';
import Audit from './components/Audit';
import CurrentStage from './components/CurrentStage';
import ShortageFindingAmount from './components/ShortageFindingAmount';

const BulkShortage = () => {
const TypographyTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.dark,
	marginBottom: '15px',
	}));
  return (
	<Box>
		<Grid container spacing={2}>
           <Grid item xs={12}>
              <TypographyTitle variant='h3'>Bulk Shortage Dispute - Historical</TypographyTitle>
		   </Grid>
		   <Grid item>
             <ShortageFindingAmount />
		   </Grid>
		   <Grid item>
             <YearlyTrend />
		   </Grid>
		   <Grid item xs={12} lg={2} >
             <CurrentStage />
		   </Grid>
		   <Grid item>
             <Audit />
		   </Grid>
		</Grid>
	</Box>
  )
}

export default BulkShortage;
