// npm modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    extendObject,
    deferred as D
} from './Utils';

// flux app

const flux = {
    wrapFlux: function wrapFlux(MainApp, availableActions, defaultStore) {
        return (

            class Capacitor extends Component {
                constructor(props){
                    super(props);
                    this.dispatcher = this.dispatcher.bind(this);
                    this.state = extendObject(true, {}, defaultStore, this.props.additionalData);
                }

                dispatcher(action, extras) {
                    const deferred = new D;
                    if (Array.isArray(action)) {
                        const firstAction = availableActions[action[0]];
                        const promiseChain = action.slice(1).reduce((_prom, currentAction) => {
                            return _prom.then((newState) => {
                                return availableActions[currentAction](newState, extras);
                            }, (error) => {
                                deferred.reject(error);
                            });
                        }, firstAction(this.state, extras));

                        promiseChain.then((value) => {
                            this.setState(extendObject(true, {}, value));
                            deferred.resolve(value);
                        }, (error) => {
                            deferred.reject(error);
                        })

                        return deferred.promise;
                    }

                    const actionToDo = availableActions[action];
                    if (!actionToDo) {
                        return;
                    }
                    actionToDo(this.state, extras).then((newState) => {
                        this.setState(newState);
                        deferred.resolve(newState);
                    }, (error) => {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }

                render() {
                    return <MainApp store={this.state} dispatcher={this.dispatcher} />
                }
            }
        )
    },
    composeActions: function composeActions(actions) {
        if (!Array.isArray(actions)) {
            return {};
        }

        const emptyObject = {};
        const extendArguments = [emptyObject].concat(actions);
        return extendObject.apply(null, extendArguments);
    }
}

export default flux;