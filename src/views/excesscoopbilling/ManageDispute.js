import { Grid, Stack } from '@mui/material';
import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from './components/Breadcrumb';
import DisputeTable from './components/DisputeTable';
import Header from './components/Header';


const ManageDispute = () => {
  return (
        <PageContainer  title="Manage Dispute">
			<Grid container spacing={3}>
		      <Grid item xs={12}>
                <Breadcrumb titles={['Excess Coop', 'Manage Dispute']} />
              </Grid>		
			  <Grid item xs={12}>
				<Header title='Manage Dispute'/>
			  </Grid>
			  <Grid item xs={12}>
			   <DisputeTable />
			  </Grid>
			</Grid>
	    </PageContainer>
  )
}

export default ManageDispute;
