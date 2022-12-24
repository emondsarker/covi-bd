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
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight: 450,
    minHeight: 450,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {

  const [data, setData] = useState([]);
  const [note, setNote] = useState({Header:'',SubHeader:'',Image:'',Link:'',});
  const classes = useStyles();

  const InputEvent = (event) =>{
    const {name, value} = event.target;
    setNote((prevData) =>{
      return {
        ...prevData,
        [name]: value,
      };
    });

    console.log(note);
    console.log(note.CenterName);
    console.log(note.CenterEmail);
  };

  useEffect(() => {
       Axios
           .get("http://localhost/covidbd/covibd_news.php")
           .then(result => setData(result.data));
   }, []);
console.log(data);

const addEvent = () => {
    setNote({ Header:'',SubHeader:'',Image:'', Link:'',});
};

function sub() {
  Axios
      .get("http://localhost/covidbd/covibd_news_update.php",{
        params: {
          Header: note.Header,
          SubHeader: note.SubHeader,
          Image: note.Image,
          Link: note.Link,
        }
      })
      .then();

     setTimeout(function(){
       Axios
           .get("http://localhost/covidbd/covibd_news.php")
           .then(result => setData(result.data));
         }, 500);
}


  return (
    <>
  <div className="body">

  <Grid item container spacing="1">
  <Grid item sm={4} xs={12} className="" >
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={note.Image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {note.Header}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.SubHeader}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>

      <Button size="small" color="black" href={note.Link} target="_blank">
        Learn More
      </Button>
      <ShareIcon/>
    </CardActions>
  </Card>
  </Grid>

  <Grid item sm={8} xs={12} className="" >

  <div className="main_note">
    <h3>News Snippet</h3>
    <p>Preview and create a news snippet for Covi-BD </p>
    <br/>
        <form className="note_form" method="post">
       <input type='text'
            className="mainNoteTextArea"
            name='Header'
            value={note.Header}
            onChange={InputEvent}
            placeholder ="Header"
            autoComplete='off'
            maxlength = "50"
            />
            <input type='text'
              className="mainNoteTextArea"
              name='SubHeader'
              value={note.SubHeader}
              onChange={InputEvent}
              placeholder ="SubHeader"
              autoComplete='off'
              maxlength = "170"
              />
            <input type='text'
              className="mainNoteTextArea"
              name='Image'
              value={note.Image}
              onChange={InputEvent}
              placeholder ="Image Link"
              autoComplete='off'
              />
              <input type='text'
                className="mainNoteTextArea"
                name='Link'
                value={note.Link}
                onChange={InputEvent}
                placeholder ="Source Link"
                autoComplete='off'
                />
        </form>
        <br/>
        <div className="NewsButton">
        <button className="button5" onClick={()=>{addEvent();}}> Cancel <ClearIcon/> </button>
        <button className="button5" onClick={()=>{sub();addEvent();}}> Done <DoneIcon/> </button>
        </div>
        </div>

         </Grid>

         </Grid>



    <Grid item container spacing="1">
    <Grid sm={4} xs={0}spacing="2" ><p></p></Grid>
    <Grid sm={4} xs={12}spacing="2" ><h2>Corona-virus news</h2></Grid>
    <Grid sm={4} xs={0} spacing="2" ><p></p></Grid>
    {data.map((item, index) => {
        return  <div>


        <Grid item sm={12} xs={12} className="" >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.Image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.Header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.SubHeader}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button size="small" color="black" href={item.Link} target="_blank">
              Learn More
            </Button>
            <ShareIcon/>
          </CardActions>
        </Card>
        </Grid>
    </div>})}

    </Grid>

    </div>
    </>
  );
}
