import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardBusiness from './CardBusiness'
import CardParking from './CardParking';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2
  },
  card: {
    ...theme.mixins.gutters(), 
    padding: theme.spacing.unit
  }
});

const Contact = props => {
  const { classes, type, data } = props
  return(
    <Grid container justify="center" className={ classes.root }>
      <Grid item xs={10}>
        <Paper className={classes.card}>
          <Typography variant="title">
            {data.name}
          </Typography>
          {type === "business" ? <CardBusiness data={data} /> : <CardParking data={data} />}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Contact);