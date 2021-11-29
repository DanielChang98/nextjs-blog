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
    maxWidth: 800,
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
          alt="CoinGecko"
          image="/cg.png"
          title="CoinGecko"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CoinGecko
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Software Engineering Intern - Full Stack <br/> <br/>
            6 months internship (March - August 2021) <br/>
            Freelance software engineer (September - Present)
          </Typography>
        </CardContent>
    </Card>
  );
}