import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
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
    },
    root: {
      backgroundColor: "#EADDCA"
    }
  }
}))

export default function Home(){
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Typography align="center" variant="h4" className={classes.title}>
        Morro Game
      </Typography>
    <CardContent>
    <Typography align="justify" variant="body1" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo fermentum mi in tincidunt. Suspendisse enim massa, dignissim sit amet purus quis, fermentum dapibus risus. Donec non nunc faucibus, fermentum eros id, auctor dui. Suspendisse non orci bibendum sem pellentesque viverra. Morbi mattis egestas urna, eget ornare massa. Aenean faucibus lacus erat, at posuere felis fermentum sit amet. Etiam congue ipsum mauris, venenatis dapibus arcu mollis vel. Sed gravida sem nibh, quis sollicitudin turpis convallis id. Morbi faucibus ornare orci.
    </Typography>
    </CardContent>
    <Box textAlign='center'>
      <Link to="/game">
        <Button variant="contained">Play Game</Button>
      </Link>
    </Box>
    </Card>
 )
}
