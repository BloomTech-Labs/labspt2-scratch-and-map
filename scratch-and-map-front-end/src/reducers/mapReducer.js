import { TEST_ACTION } from '../actions/mapActions';

const initialState = {
    someData: 'blank'
}
export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {}
        default:
            return state;
    }
}