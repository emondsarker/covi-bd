import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles({
  root: {
    width: 240,
    height: 297,
    margin: 5,

  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {

  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {

       Axios
           .get("http://localhost/covidbd/covibd_news.php")
           .then(result => setData(result.data));
   }, []);
console.log(data);
  return (
    <>

    <Grid item container spacing="1">


    {data.map((item, index) => {
        return  <div >


        <Grid item sm={12} xs={12} className="" >
        <Card className={classes.root} onClick={()=>{window.open(item.Link)}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.Image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom  component="p">
                {item.Header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.SubHeader}
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        </Grid>
    </div>})}

    </Grid>


    </>
  );
}
