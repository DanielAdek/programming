import express from 'express';
import redis from 'redis';

const app = express();
const client = redis.createClient({
  host: "redis-server"
})

client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits);
    client.set('visits', parseInt(visits) + 1);
  })
});

app.listen(3001, () => {
  console.log("Server started on port: ", 3001);
})