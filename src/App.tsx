import { Grid } from '@mui/material';

import './App.css';
import { PrimaryTasks } from './PrimaryTasks';
import { SecondaryTasks } from './SecondaryTasks';
import { DoneTasks } from './DoneTasks';

function App() {
  return (
    <Grid container display='flex' height='100vh'>
      <PrimaryTasks />
      <SecondaryTasks />
      <DoneTasks />
    </Grid>
  );
}

export default App;
