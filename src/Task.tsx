import { Checkbox, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

interface ITask {
    id?: number;
    done?: boolean;
    value?: string;
    createNewTask?: () => void;
    focused?: boolean;
}

export const Task = ({id, done = false, value, createNewTask, focused}: ITask) => {
    const [isChecked, setIsChecked] = useState(done);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && createNewTask) {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            target.blur();
            createNewTask();
        }
    };

    return (
        <Grid display='flex' alignItems='center'>
            <Checkbox checked={isChecked} onChange={() => setIsChecked(checked => !checked)} />
            <TextField
                id={`primary-task-${id}`}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                placeholder='Type here...'
                sx={{ width: '100%', textDecoration: isChecked ? 'line-through' : null }}
                multiline
                value={value}
                onKeyDown={handleKeyDown}
                autoFocus={focused}
            />
        </Grid>
    )
}