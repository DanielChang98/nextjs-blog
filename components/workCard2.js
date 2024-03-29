import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 300,
  },
  image: {
      height: 110,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.image}
          alt="United Business Media"
          image="/ubm.jpeg"
          title="United Business Media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            United Business Media (UBM)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Public Relations Department (Contract Staff) <br/> <br/>
            3 months contract <br/>
            Worked on organising MIFF 2018
          </Typography>
        </CardContent>
    </Card>
  );
}