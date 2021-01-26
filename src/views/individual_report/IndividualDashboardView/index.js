import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import OverallQuality from './OverallQuality';
import DataTemperature from './DataTemperature';
import DataTurbidity from './DataTurbidity';
import DataPH from './DataPH';
import DataHumidity from './DataHumidity';
import DataVoltage from './DataVoltage';
import BatteryVoltage from './BatteryVoltage';
import TotalSpot from './TotalSpot';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const IndividualDashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Data Pengguna"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <OverallQuality />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xl={6}
            xs={12}
          >
            <BatteryVoltage />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <DataTemperature />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <DataHumidity />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <DataPH />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <DataTurbidity />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default IndividualDashboard;
