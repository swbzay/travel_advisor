import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";

import useStyles from './styles'

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [rating, setRating] = useState('');
    return (
        <div className={classes.container}>
            <Typography variant="h6">Restaurants, Hotels & Attractions Around You</Typography>

            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) =>setType(e.target.value)}>
                        <MenuItem value = "restaurants">Restaurants</MenuItem>
                        <MenuItem value = "hotels">Hotels</MenuItem>
                        <MenuItem value = "attractions">Attractions</MenuItem>
                </Select>

            </FormControl>


            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) =>setRating(e.target.value)}>
                        <MenuItem value = "restaurants">★ Star</MenuItem>
                        <MenuItem value = "hotels">★★ Star</MenuItem>
                        <MenuItem value = "attractions">★★★ Star</MenuItem>
                        <MenuItem value = "attractions">★★★★ Star</MenuItem>
                        <MenuItem value = "attractions">★★★★★ Star</MenuItem>
                </Select>

            </FormControl>
        </div>
    );

}

export default List;