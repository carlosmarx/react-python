import { Box, Dialog, DialogActions, Grid, TextField, Button } from '@mui/material';
import type { NextPage } from 'next';
import { Teacher } from '../src/@types/teacher';
import List from '../src/components/List/List';
import { useIndex } from '../src/hooks/pages/useIndex'; 

const Home: NextPage = () => {

  const { listTeachers, 
    name, 
    setName, 
    email, 
    setEmail,
    selectedTeacher,
    setSelectedTeacher
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List teachers={ listTeachers } 
        onSelect={(teacher) => setSelectedTeacher(teacher)}></List>
      </Box>

      <Dialog open={ selectedTeacher !== null } fullWidth PaperProps={{
        sx: {p: 5}
      }} onClose={() => setSelectedTeacher(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Digite o nome"
              type="text"
              fullWidth
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Digite o email"
              type="text"
              fullWidth
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
          <Button>Marcar</Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}

export default Home;
