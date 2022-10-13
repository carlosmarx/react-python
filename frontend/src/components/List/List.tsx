import { Button } from '@mui/material';
import type { NextPage } from 'next';
import { captureRejectionSymbol } from 'stream';
import { Teacher } from '../../@types/teacher';
import { FormaterService } from '../../services/FormaterService';
import { EmptyList, ItemDescription, ItemInfo, ItemName, ItemPhoto, ItemPrice, ListItem, MainList } from './ListStyle';

interface ListProps {
    teachers: Teacher[];
    onSelect: (teacher: Teacher) => void;
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
                    <ItemPrice>{FormaterService.formatPrice(teacher.hour_value)} por hora</ItemPrice>
                    <ItemDescription>{FormaterService.limitText(teacher.description, 50)}</ItemDescription>
                    <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }}>Marcar aula com {teacher.name}</Button>
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
