import Queue from 'bull';
import redisConfig from '../config/redis.js';
import * as jobs from '../jobs/index.js';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}));

export default {
    queues,

    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name);

        return queue.bull.add(data, queue.options);
    },

    process() {
        this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log(`🔥 Job failed: ${queue.name}, ${queue.key}`);
                console.log('Data:', job.data);
                console.log('Error:', err);
            });
        });
    }
};
