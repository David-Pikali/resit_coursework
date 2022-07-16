import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function ScoreBoard(){
  const classes = useStyles()
  return (
    <Card className={classes.card}>
    <Typography align="center" variant="h2" className={classes.title}>
      Score Board
    </Typography>
    <table width="100%">
      <tr>
        <th>Ranking</th>
        <th>User Name</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Bill</td>
        <td>180</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Bob</td>
        <td>93</td>
      </tr>
      <tr>
        <td>3</td>
        <td>John</td>
        <td>50</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Alex</td>
        <td>39</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Bob2</td>
        <td>4</td>
      </tr>
    </table>
    </Card>

 )
}
