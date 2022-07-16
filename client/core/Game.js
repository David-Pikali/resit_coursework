import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    }
  }
}))

export default function Game(){
  const classes = useStyles()
  return (
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      GAME
    </Typography>
    <CardContent>
    <Typography variant="body1" component="p">
      Score:
    </Typography>
    <h6 id="score_display">0</h6>
    </CardContent>
    <Button
      onClick={() => {
        var score = document.getElementById('score_display');
        var value = score.innerHTML;
        ++value
        console.log(value);
        document.getElementById('score_display').innerHTML = value;
      }}
      >Add Score</Button>

    </Card>
 )
}
