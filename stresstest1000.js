import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 200 },
    { duration: '30s', target: 400 },
    { duration: '30s', target: 600 },
    { duration: '30s', target: 800 },
    { duration: '30s', target: 1000 },
    { duration: '3m', target: 1000 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 0 },
  ] }

let randNum = () => Math.floor(Math.random() * 10000000) + 1;

export default function () {
  http.get(`http://localhost:3002/one/${randNum()}`);
  sleep(1);
}