import { Grid } from '@mui/material';
import { Task } from './Task';

export const DoneTasks = () => {

    return (
        <Grid display='flex' flex='1' width='33.33%' sx={{backgroundColor: '#b3ffe0'}} flexDirection='column'>
            <Task done value="Completed task" />
        </Grid>
    )
}