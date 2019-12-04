class StateManager1 {
    state1 = 1;
    statefulGet1 = () => state1 + 2
    statefulUpdate1 = () => {
        state1 = state1 + 2
    }
}


module.exports = StateManager1