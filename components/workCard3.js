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
          alt="Big Bad Wolf"
          image="/bbw2.jpg"
          title="Big Bad Wolf"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Big Bad Wolf
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            BBW Book Fair (Part time) <br/> <br/>
            Floor crew for the night shift - Fiction, Children, Customer Storage <br/>
            BBW Book Fair 2017 and 2018
          </Typography>
        </CardContent>
    </Card>
  );
}