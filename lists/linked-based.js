/**
 * Hint:
 * its main core in positioning nodes
 * 
 * TODO:
 * createList [done]
 * listEmpty [done]
 * listFull [done]
 * listSize [done]
 * destroyList [done]
 * traverseList [done]
 * insertToList [done]
 * removeFromList [done]
 * retrieve [done]
 * replace [done]
 */

class ListNode {
    constructor(entry) {
        this.entry = entry
        this.next = undefined
    }
}

export default class List {
    #head
    #size

    // Big O of 1
    constructor() {
        this.#head = undefined
        this.#size = 0
    }

    // Big O of 1
    listEmpty() {
        return this.#size === 0
    }

    // Big O of 1
    listFull() {
        return false
    }

    // Big O of 1
    listSize() {
        return this.#size
    }

    // Big O of 1
    destroyList() {
        this.#head = undefined
        this.#size = 0
    }

    // Big O of n
    traverseList(callback) {
        let current_node = this.#head
        while (current_node) {
            callback(current_node.entry)
            current_node = current_node.next
        }
    }

    // Big O of n OR Big O of 1 "position = 1"
    insertToList(entry ,position = 1) {
        if (position < 1) position = 1
        else if (position > this.#size) position = this.#size + 1
        const node = new ListNode(entry)
        let current_node = this.#head
        if (current_node == undefined || position == 1) {
            node.next = this.#head
            this.#head = node
        } else {
            let counter = 2
            while (current_node && counter < position) {
                counter++
                current_node = current_node.next
            }
            node.next = current_node.next
            if (current_node) current_node.next = node
        }
        this.#size = this.#size + 1
    }

    // Big O of n OR Big O of 1 "position = 1"
    removeFromList(position = 1) {
        if (position < 1) position = 1
        else if (position > this.#size) position = this.#size + 1
        let current_node = this.#head
        if (current_node == undefined) return undefined
        if (position == 1) {
            this.#head = this.#head.next
            return current_node.entry
        } else {
            let counter = 2
            while (current_node && counter < position) {
                counter++
                current_node = current_node.next
            }
            const entry = current_node.entry
            current_node.next = current_node.next.next
            return entry
        }
    }

    // Big O of n OR Big O of 1 "position = 1"
    retrieve(position = 1) {
        if (position < 1) position = 1
        else if (position > this.#size) position = this.#size + 1
        let current_node = this.#head
        if (current_node == undefined) return undefined
        if (position == 1) {
            return current_node.entry
        } else {
            let counter = 1
            while (current_node && counter < position) {
                counter++
                current_node = current_node.next
            }
            return current_node.entry
        }
    }

    // Big O of n OR Big O of 1 "position = 1"
    replace(entry ,position = 1) {
        if (position < 1) position = 1
        else if (position > this.#size) position = this.#size + 1
        let current_node = this.#head
        if (current_node == undefined) return false
        if (position == 1) {
            current_node.entry = entry
            return true
        } else {
            let counter = 1
            while (current_node && counter < position) {
                counter++
                current_node = current_node.next
            }
            current_node.entry = entry
            return true
        }
    }
}