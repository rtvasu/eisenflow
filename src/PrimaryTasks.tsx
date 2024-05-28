import { Grid } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { Task } from './Task';

export const PrimaryTasks = () => {
    const [tasks, setTasks] = useState<Array<ReactNode>>([]);
    const [taskCount, setTaskCount] = useState(0);

    const createNewTask = () => {
        setTaskCount(prevTaskCount => prevTaskCount + 1);
    };

    useEffect(() => {
        setTasks([...tasks, <Task key={taskCount - 1} id={taskCount - 1} createNewTask={createNewTask} focused />]);
    }, [taskCount]);

    return (
        <Grid
            display='flex'
            flexDirection='column'
            flex='1'
            width='33.33%'
            sx={{backgroundColor: '#fabbbb', paddingRight: '10px'}}
        >
            {tasks}
        </Grid>
    )
}