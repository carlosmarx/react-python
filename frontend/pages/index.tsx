import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Teacher } from '../src/@types/teacher';
import List from '../src/components/List/List';

const Home: NextPage = () => {

  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Carlos Marx',
      photo: 'https://github.com/carlosmarx.png',
      hour_value: 60,
      description: 'Desenvolvedor Web, Desenvolvimento Web'
    },
    {
      id: 2,
      name: 'Pedro Fausto',
      photo: 'https://github.com/hantys.png',
      hour_value: 120,
      description: 'Desenvolvedor Fullstack'
    },
    {
      id: 3,
      name: 'Elias Junior',
      photo: 'https://github.com/eliaswebdev.png',
      hour_value: 110,
      description: 'Desenvolvedor Rails'
    },
    {
      id: 4,
      name: 'Denilson Silva',
      photo: 'https://github.com/dbsdenis.png',
      hour_value: 200,
      description: 'Advogado'
    },
  ]; 

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List teachers={teachers }></List>
    </Box>
  )
}

export default Home;
