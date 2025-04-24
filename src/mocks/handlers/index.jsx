import { http, HttpResponse } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
    http.get('/students', () => {
        return HttpResponse.json({ students }, { status: 200 });
    }),

    http.get('/students/:id', ({ params }) => {
        const { id } = params;
        const matchingStudent = students.find(
            (student) => student.id === String(id)
        );
        if (!matchingStudent) {
            return HttpResponse.json(
                { error: 'No matching student' },
                { status: 404 }
            );
        }
        return HttpResponse.json({ students: matchingStudent }, { status: 200 });
    }),

    http.get('/students/group/:group', ({ params }) => {
        const { group } = params;
        const matchingStudents = students.filter(
            (student) => student.group === group
        );
        return HttpResponse.json({ students: matchingStudents }, { status: 200 });
    }),

    http.get('/groups', () => {
        return HttpResponse.json({ groups }, { status: 200 });
    }),

    http.post('/students/search', async ({ request }) => {
        const { searchPhrase } = await request.json();
        const matchingStudents = searchPhrase
            ? students.filter((student) =>
                  student.name.toLowerCase().includes(searchPhrase.toLowerCase())
              )
            : [];
        return HttpResponse.json({ students: matchingStudents }, { status: 200 });
    }),
];