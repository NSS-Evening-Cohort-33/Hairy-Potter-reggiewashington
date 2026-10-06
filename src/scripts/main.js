// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 3, 6)
const bowl = makePottery("Bowl", 4, 5)
const dish = makePottery("Dish", 7, 2)
const vase = makePottery("Vase", 5, 8)
const statue = makePottery("Statue", 6, 5)

console.log(mug)
console.log(bowl)
console.log(dish)
console.log(vase)
console.log(statue)


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedBowl = firePottery(bowl, 2100)
const firedDish = firePottery(dish, 2300)
const firedVase = firePottery(vase, 2200)
const firedStatue = firePottery(statue, 2150)

console.log(firedMug)
console.log(firedBowl)
console.log(firedDish)
console.log(firedVase)
console.log(firedStatue)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


