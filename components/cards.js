import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'linear-gradient (45deg, white 30%, #FF8E53 90%)',
    color: 'black',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    background: 'blue',
  }
});

export default function SimpleCard(postData) {
  const {id, title} = postData;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent style={{background: 'linear-gradient(to right, #E3E0FC, #FFFFFF, #E3E0FC)'}}>
        <Typography variant="h6" component="h4">
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{background: 'linear-gradient(to right, #E3E0FC, #FFFFFF, #E3E0FC)'}}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}