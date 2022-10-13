import { ApiService } from './../../services/ApiService';
import { useEffect, useState } from 'react' 
import { Teacher } from '../../@types/teacher';

export function useIndex() {
    const [listTeachers, setListTeachers] = useState<Teacher[]>([]);
    const [name, setName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

    useEffect(() => {
      ApiService.get('/teachers').then(response => {
        setListTeachers(response.data);
      });
    }, []);

      return { 
        listTeachers,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher
    };
}