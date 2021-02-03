import List from './linked-based.js'

class ListEntry{
    constructor(character ,priority) {
        this.character = character
        this.priority = priority
    }
}

const traverseMe = entry => console.log(`Character : ${entry.character} ,Priority : ${entry.priority}`)

// create list
const list = new List

// check size
console.log(list.listSize() ? 'Have entries' : 'Empty Dude')

// insert some entries
list.insertToList(new ListEntry('A' ,1) ,1)
list.insertToList(new ListEntry('B' ,2) ,2)
list.insertToList(new ListEntry('C' ,3) ,3)
list.insertToList(new ListEntry('D' ,1) ,1)
list.insertToList(new ListEntry('E' ,5) ,5)
list.insertToList(new ListEntry('F' ,6) ,6)
list.insertToList(new ListEntry('G' ,7) ,7)

// check size
console.log(list.listSize() ? 'Have entries' : 'Empty Dude')
console.log("**********************")
// traverse through listed
// most show as this [D ,A ,B ,C ,E ,F ,G]
list.traverseList(traverseMe)

console.log("**********************")

// remove from list
list.removeFromList(4)

// traverse through listed
// most show as this [D ,A ,B ,E ,F ,G]
list.traverseList(traverseMe)

// replace item
list.replace(new ListEntry('Z' ,5) ,5)

console.log("**********************")
// traverse through listed
// most show as this [D ,A ,B ,E ,Z ,G]
list.traverseList(traverseMe)