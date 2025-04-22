import { http, HttpResponse } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
	http.get('/students', () => {
		return HttpResponse.json({ students }, { status: 200 });
	}),

	http.get('/students/:group', ({ params }) => {
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
