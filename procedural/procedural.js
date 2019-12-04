/* If this module had only pure functions, it would abide by SRP
    Saddly it does not
*/
/**
 * A module-level state variable
 */
let state1 = 1;
let state2 = 2;
let state3 = 3;

/**
 * A statefulFunction in procedural style
 */
const statefulGet1 = () => state1 + 2
const statefulGet2 = () => state2 + 2
const statefulGet3 = () => state3 + 2


/**
 * A statefulFunction in procedural style
 */
const statefulUpdate1 = () => {
    state1 = state1 + 2
}
const statefulUpdate2 = () => {
    state2 = state2 + 2
}
const statefulUpdate3 = () => {
    state3 = state3 + 2
}



/**
 * a pure function in procedural style
 */
const pure = () => 5

// this could be a header file in c
module.exports = {
    statefulGet,
    statefulUpdate,
    pure
}