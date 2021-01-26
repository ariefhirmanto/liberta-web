import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const BatteryVoltage = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Voltase Baterai
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              5,1 V
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <BatteryStdIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={100}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

BatteryVoltage.propTypes = {
  className: PropTypes.string
};

export default BatteryVoltage;
