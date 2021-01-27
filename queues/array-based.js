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

const MAXSIZE = 9

export class QueueEntry {
    constructor(data) {
        this.name = data.name
        this.age = data.age
        this.job = data.job
        this.is_married = data.is_married
    }
}

export class Queue {
    // define front ,rear & size as a private to ignore direct access from outside class
    #front
    #rear
    #size
    #items

    // Big O of 1
    constructor() {
        this.#size = 0
        this.#front = 0
        this.#rear = -1
        this.#items = []
    }

    // Big O of 1
    isQueueFull() {
        return this.#size === MAXSIZE
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
    clearQueue() {
        this.#size = 0
        this.#front = 0
        this.#rear = -1
    }

    // Big O of n (n : maxsize)
    traverseQueue(callback) {
        let current_front = this.#front
        let current_node = undefined
        let iterated = 0
        while (iterated !== this.#size) {
            current_node = this.#items[current_front]
            if (current_node == undefined) {
                break
            }
            callback(current_node)
            current_front = current_front === MAXSIZE ? 0 : (current_front + 1)
            iterated++
        }
    }

    // Big O of 1
    inQueue(node) {
        if (this.#size <= MAXSIZE && node instanceof QueueEntry) {
            this.#rear = this.#rear === MAXSIZE ? -1 : this.#rear
            this.#rear = this.#rear + 1
            this.#items[this.#rear] = node
            this.#size = this.#size + 1
            return
        }
        throw new Error('Can`t add node to this Queue')
    }

    // Big O of 1
    deQueue() {
        if (this.#size > 0) {
            const node = this.#items[this.#front]
            this.#front = this.#front < MAXSIZE ? (this.#front + 1) : 0
            this.#size = this.#size - 1
            return node
        }
        return undefined
    }
}