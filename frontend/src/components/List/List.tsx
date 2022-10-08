import { Button } from '@mui/material';
import type { NextPage } from 'next';
import { captureRejectionSymbol } from 'stream';
import { Teacher } from '../../@types/teacher';
import { EmptyList, ItemDescription, ItemInfo, ItemName, ItemPhoto, ItemPrice, ListItem, MainList } from './ListStyle';

interface ListProps {
    teachers: Teacher[];
}

const List = (props: ListProps) => {
  return (
    <>
      {props.teachers.length > 0 ? (
        <MainList>
        {props.teachers.map(teacher  => (
            <ListItem key={teacher.id}>
                <ItemPhoto src={teacher.photo} />
                <ItemInfo>
                    <ItemName>{teacher.name}</ItemName>
                    <ItemPrice>{teacher.hour_value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</ItemPrice>
                    <ItemDescription>{teacher.description}</ItemDescription>
                    <Button sx={{ width: '70%' }}>Marcar aula com {teacher.name}</Button>
                </ItemInfo>
            </ListItem>
        ))}
        
      </MainList>
      ) : (
        <EmptyList>
          <h2>Nenhum professor encontrado!</h2>
        </EmptyList>
      )}
    </>
  )
}

export default List;
