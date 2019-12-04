#!/usr/bin/env node
const procedural = require("./procedural")

console.log(procedural.pure())


console.log(procedural.statefulGet1())
procedural.statefulUpdate1()
console.log(procedural.statefulGet1())

console.log(procedural.statefulGet2())
procedural.statefulUpdate1()
console.log(procedural.statefulGet1())

console.log(procedural.statefulGet3())
procedural.statefulUpdate1()
console.log(procedural.statefulGet1())