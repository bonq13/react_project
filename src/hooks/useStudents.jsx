import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
    const getGroups = useCallback(async () => {
        try {
            const { data } = await axios.get('/groups');
            return data.groups;
        } catch (e) {
            console.error('Error fetching groups:', e);
            return [];
        }
    }, []);

    const getStudentsByGroup = useCallback(async (groupId) => {
        try {
            const url = groupId ? `/students/group/${groupId}` : '/students';
            const { data } = await axios.get(url);
            return data.students;
        } catch (e) {
            console.error('Error fetching students by group:', e);
            return [];
        }
    }, []);

    const getStudentById = useCallback(async (studentId) => {
        try {
            const { data } = await axios.get(`/students/${studentId}`);
            if (data.error) {
                console.error('Error from API:', data.error);
                return null;
            }
            return data.students;
        } catch (e) {
            console.error('Error fetching student by ID:', e);
            return null;
        }
    }, []);

    const findStudents = useCallback(async (searchPhrase) => {
        try {
            const { data } = await axios.post(`/students/search`, {
                searchPhrase,
            });
            return data;
        } catch (e) {
            console.error('Error searching students:', e);
            return { students: [] };
        }
    }, []);

    return {
        getGroups,
        getStudentsByGroup,
        getStudentById,
        findStudents,
    };
};