import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  duration: '1m',
  vus: 1000,
  rps: 1000,
};

let randNum = () => Math.floor(Math.random() * 10000000) + 1;

export default function () {
  http.get(`http://localhost:3002/one/${randNum()}`);
  sleep(1);
}