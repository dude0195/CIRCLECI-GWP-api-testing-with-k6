import http from 'k6/http';
import { check, group } from 'k6';

export let options = {
    vus: 1,
};

export default function () {
    group('API uptime check', () => {
        const response = http.get('http://todo-backend-restify-redux.herokuapp.com');
        check(response, {
            "status code should be 200": res => res.status === 200,
        });
    })
}