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
import Box from '@material-ui/core/Box'

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
    <Typography align="center" variant="h2" className={classes.title}>
      The Game
    </Typography>
    <CardContent>
    <Typography align="center" variant="h5" component="p">
      Score:
    </Typography>
    <Box textAlign='center'>
    <h1 id="score_display">0</h1>
    </Box>
    </CardContent>

    <Box textAlign='center'>
    <Button variant="contained"
      onClick={() => {
        var score = document.getElementById('score_display');
        var value = score.innerHTML;
        ++value
        console.log(value);
        document.getElementById('score_display').innerHTML = value;
      }}
      >Add Score</Button>
      </Box>

    </Card>
 )
}
