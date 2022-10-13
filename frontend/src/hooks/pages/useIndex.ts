import { ApiService } from './../../services/ApiService';
import { useEffect, useState } from 'react' 
import { Teacher } from '../../@types/teacher';

export function useIndex() {
    const [listTeachers, setListTeachers] = useState<Teacher[]>([]);
    const [name, setName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [message, setMessage] = useState<String>('');

    useEffect(() => {
      ApiService.get('/teachers').then(response => {
        setListTeachers(response.data);
      });
    }, []);

    useEffect(() => {
      clearForm();
    }, [selectedTeacher]);


    function bookClass() {
      if (selectedTeacher !== null) {
        if(validateClassroomData()) {
          ApiService.post(`/teachers/${selectedTeacher.id}/classrooms/`, {
            name,
            email
          }).then(response => {
            setSelectedTeacher(null);
            setMessage('Aula agendada com sucesso!');
          }).catch(error => {
            setMessage(error.response?.data?.message);
          });
        }
        else {
          setMessage('Preencha todos os campos corretamente!');
        }
      }
    }

    function validateClassroomData() {
      return name.length > 0 && email.length > 0 && selectedTeacher !== null;
    }

    function clearForm() {
      setName('');
      setEmail('');
    }

      return { 
        listTeachers,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        bookClass,
        message,
        setMessage,
    };
}