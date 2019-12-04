#!/usr/bin/env node
const StateManager1 = require("./StateManager1")
const StateManager2 = require("./StateManager2")
const StateManager3 = require("./StateManager3")
const PureService = require("./PureService")

const stateManager1 = new StateManager1()
const stateManager2 = new StateManager2()
const stateManager3 = new StateManager3()
const pureService = new PureService()


console.log(pureService.pure())


console.log(stateManager1.statefulGet1())
stateManager1.statefulUpdate1()
console.log(stateManager1.statefulGet1())

console.log(stateManager2.statefulGet2())
stateManager2.statefulUpdate2()
console.log(stateManager2.statefulGet2())

console.log(stateManager3.statefulGet3())
stateManager3.statefulUpdate3()
console.log(stateManager3.statefulGet3())