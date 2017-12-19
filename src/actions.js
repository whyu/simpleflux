import {
    foobar,
} from './reducers.js';


const actions = {
    "foo.click": (currentStore, extras) => {
        console.log('hit action file');
        return foobar(currentStore, extras);
    },
}

export default actions;