// TODO: Stack class
// TODO: StackNode class {data & next}
// TODO: InitializeStack
// TODO: Push
// TODO: Pop
// TODO: IsEmpty
class StackNode {
    constructor(data) {
        this.data = data
        this.next = undefined
    }
}

class Stack {
    constructor() {
        this.top = undefined
    }

    push(node) {
        if (node instanceof StackNode) {
            node.next = this.top
            this.top = node
            return 1
        }
        throw new Error('Node most be a StackNode object')
    }

    pop() {
        if (this.top === undefined) throw new Error('Stack is empty')
        const current_node = this.top
        this.top = this.top.next
        return current_node.data
    }

    isEmpty() {
        return this.top === undefined
    }
}

const stack = new Stack()
const data = ['A' ,'B' ,'C' ,'D' ,'E' ,'F' ,1]
data.forEach(el => {
    try {
        if (el === 1) stack.push(el)
        else stack.push(new StackNode(el))
    } catch (err) {
        console.log(err.message)
    }
})

console.log(stack.isEmpty() ? 'Stack now empty' : 'Stack has at least 1 element')

let element = stack.pop()
while(element) {
    console.log(element)
    try {
        element = stack.pop()
    } catch (err) {
        console.log(err.message)
        element = undefined
    }
}
console.log(stack.isEmpty() ? 'Stack now empty' : 'Stack has at least 1 element')