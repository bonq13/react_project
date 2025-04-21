import { http, HttpResponse } from 'msw';
import { students } from '../data/students';

export const handlers = [
    http.get('/students', () => {
        return HttpResponse.json({ students }, { status: 200 });
    }),
];