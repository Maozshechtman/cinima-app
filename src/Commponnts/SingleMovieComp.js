import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 250 ,
  },
 
});

export default function MediaMoiveCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
            <img src={props.image} height='140' width='180'/>
        </CardMedia>
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Geners}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="secondery">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
