/**
 * TODO:
 * createQueue [done]
 * isQueueFull [done]
 * isQueueEmpty [done]
 * queueSize [done]
 * clearQueue [done]
 * traverseQueue [done]
 * inQueue [done]
 * deQueue [done]
 */

export class QueueEntry {
    constructor(data) {
        this.name = data.name
        this.age = data.age
        this.job = data.job
        this.is_married = data.is_married
    }
}

class QueueNode {
    constructor(qEntry) {
        if (qEntry instanceof QueueEntry) {
            this.entry = qEntry
            this.next = undefined
        } else throw new Error('Entry ARG most be a QueueEntry type')
    }
}

export class Queue {
    // define front ,rear & size as a private to ignore direct access from outside class
    #front
    #rear
    #size

    // Big O of 1
    constructor() {
        this.#front = undefined
        this.#rear = undefined
        this.#size = 0
    }

    // Big O of 1
    isQueueFull() {
        return false
    }

    // Big O of 1
    isQueueEmpty() {
        return this.#size === 0
    }

    // Big O of 1
    queueSize() {
        return this.#size
    }

    // Big O of 1
    inQueue(qEntry) {
        if (qEntry instanceof QueueEntry) {
            const newNode = new QueueNode(qEntry)
            if (this.#size === 0) {
                this.#front = newNode
                this.#rear = newNode
            } else {
                this.#rear.next = newNode
                this.#rear = newNode
            }
            this.#size = this.#size + 1
            return
        }
        throw new Error('Entry ARG most be a QueueEntry type')
    }

    // Big O of 1
    deQueue() {
        const current_node = this.#front
        if (current_node === undefined) {
            this.#front = undefined
            this.#rear = undefined
            this.#size = 0
            return undefined
        }
        this.#front = this.#front.next
        this.#size = this.#size - 1
        delete current_node.next
        return current_node.entry
    }

    // Big O of n (n is equal to items inQueue in the QUEUE)
    traverseQueue(callback) {
        let current_front = this.#front
        while(current_front) {
            callback(current_front.entry)
            current_front = current_front.next
        }
    }

    // Big O of 1 ,JS garbage collection will remove all nodes from memory
    clearQueue() {
        this.#front = undefined
        this.#rear = undefined
        this.#size = 0
    }
}