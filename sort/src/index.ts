import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([1000, -2000, 0, 100, -1])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)
