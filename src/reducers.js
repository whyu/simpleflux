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

// this is not hooked up to anything yet, but is how async operations are handled
const asyncFoo = function asyncFoo(currentStore, extras) {
    const newStore = extendObject(true, {}, currentStore);
    const d = new Deferred;
    // do something async
    // if (){
    //     d.resolve(newStore)
    // }
    // else {
    //     d.reject(error)
    // }

    return d.promise;
}

export {
    foobar,
    asyncFoo,
}