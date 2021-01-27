// here we just change our import use [linked-based or array-based] one only
import {Queue ,QueueEntry} from './linked-based.js'

// initialize the QUEUE
const queue = new Queue

// start inQueue some entries to our queue
console.log(`start inqueue with size : ${queue.queueSize()}`)

queue.inQueue(new QueueEntry({
    name: 'Ahmed Hesham',
    age: '25',
    job: 'Backend Engineer',
    is_married: true,
}))
queue.inQueue(new QueueEntry({
    name: 'Gehan Samir',
    age: '23',
    job: 'Wife',
    is_married: true,
}))
queue.inQueue(new QueueEntry({
    name: 'Ali Hesham',
    age: '15',
    job: 'Student',
    is_married: false,
}))

console.log(`end inqueue with size : ${queue.queueSize()}`)
// end inQueue some entries to our queue

// start Traverse through queue
console.log('****************** Traverse Here ******************')
queue.traverseQueue(entry => {
    console.log(entry)
})
console.log('****************** Traverse Here ******************')
// end Traverse through queue

// this has been hashed to check deQueue mechanism
// start clear queue
// console.log(`before clear queue ,size : ${queue.queueSize()}`)
// queue.clearQueue()
// console.log(`after clear queue ,size : ${queue.queueSize()}`)
// end clear queue

// start deQueue entries from our queue
console.log(`start dequeue with size : ${queue.queueSize()}`)
let current_entry = queue.deQueue()
while(current_entry) {
    console.log(current_entry)
    current_entry = queue.deQueue()
}
console.log(`end dequeue with size : ${queue.queueSize()}`)
// end deQueue entries from our queue
