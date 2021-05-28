import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, makeStyles, Typography} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
      
    }
  });

export default function Phone() {
    const [loadPhones, setLoadPhones] = useState(false)
    const [data, setData] = useState([])

    const classes = useStyles()

    const getData = () => {
        fetch('http://localhost:3001/api/all')
        .then(res=> res.json())
        .then(result => {
            setData(result)
            setLoadPhones(true)
        })
    }
    const remove = (id) => {
        const url = '/api/delete/' + id;
        console.log('delete: ', id);
        fetch(url)
            .then(res => res.json())
            .then(result => console.log('result: ', result))
    }

    useEffect(() => {
        getData()
    })

    return (
        <div className="phone">
        <Typography
        variant="h3"
        className="center">
        Devices
        </Typography>
        {loadPhones
            ?
            <div 
            className="cards-container">
            {data.map((each) => {
                return (
                    <Card 
                    key={each.id}
                    variant="outlined"
                    className="card">
                        <CardMedia
                        image={each.img}
                        title={each.name}
                        />
                        <img src={each.img} ></img>
                        <CardContent>
                            <Typography 
                            variant="h5"
                            component="h2">
                                {each.name}
                            </Typography>
                            <Typography 
                            variant="subtitle1">
                                Bought: {each.year_bought}
                            </Typography>
                            <Typography 
                            variant="subtitle1">
                                Sold: {each.year_sold}
                            </Typography>
                            <Typography 
                            variant="subtitle1">
                                OS: {each.os}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                            size="small"
                            color="secondary"
                            onClick={() => remove(each.id)}>
                            Delete
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
            </div>
            :
            <div>
            <CircularProgress color="secondary"/>
            </div>
        }
        </div>
    )
}