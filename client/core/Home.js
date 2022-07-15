import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

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

export default function Home(){
  const classes = useStyles()
  return (
    <Card className={classes.card}>
    <Typography variant="h6" className={classes.title}>
      Morro Game
    </Typography>
    <CardContent>
    <Typography variant="body1" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo fermentum mi in tincidunt. Suspendisse enim massa, dignissim sit amet purus quis, fermentum dapibus risus. Donec non nunc faucibus, fermentum eros id, auctor dui. Suspendisse non orci bibendum sem pellentesque viverra. Morbi mattis egestas urna, eget ornare massa. Aenean faucibus lacus erat, at posuere felis fermentum sit amet. Etiam congue ipsum mauris, venenatis dapibus arcu mollis vel. Sed gravida sem nibh, quis sollicitudin turpis convallis id. Morbi faucibus ornare orci. Aliquam vitae diam diam. Duis quam est, pretium sit amet tortor nec, hendrerit volutpat eros. Morbi dictum nisi nec nibh malesuada, eu sagittis leo tincidunt. Integer dictum fringilla dolor ac pharetra. In euismod interdum libero, id feugiat neque feugiat ut. Quisque nec nisi id erat blandit ullamcorper. Integer tortor quam, consequat id enim fringilla, faucibus vestibulum lectus. Vestibulum libero lectus, pharetra at bibendum eu, vulputate eu justo. Nullam sagittis fermentum quam quis lacinia. Sed ac felis faucibus, bibendum sapien sed, consectetur urna. Phasellus quis augue elit. Nam auctor turpis non rhoncus luctus. Maecenas at velit nec nunc ornare viverra tristique eu orci.
    </Typography>
    </CardContent>
    <Button>Play Game</Button>
    </Card>
 )
}
