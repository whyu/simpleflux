import {
    deferred,
    extendObject,
} from './Utils';

const foobar = function foobar(currentStore, extras){
    console.log('running the reducer to transform the store');
    const newStore = extendObject(true, {}, currentStore);
    newStore.test = 'foo';
    return Promise.resolve(newStore);
}

export {
    foobar,
}