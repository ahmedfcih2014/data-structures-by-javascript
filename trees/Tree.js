/**
 * Main Funcinality :
 * -----------------
 * tree empty [done]
 * tree full [done]
 * tree size [done]
 * clear tree [done]
 */

export default class Tree {
    #root
    #size

    constructor() {
        this.#root = undefined
        this.#size = 0
    }

    treeEmpty() {
        return this.#size === 0
    }

    treeFull() {
        return false
    }

    treeSize() {
        return this.#size
    }

    clearTree() {
        this.#root = undefined
        this.#size = 0
    }

    getRoot() {
        return this.#root
    }

    setRoot(node) {
        this.#root = node
    }
}