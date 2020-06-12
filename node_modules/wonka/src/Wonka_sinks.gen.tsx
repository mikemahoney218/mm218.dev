/* TypeScript file generated from Wonka_sinks.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Wonka_sinksBS = require('./Wonka_sinks.bs');

import {sourceT as Wonka_types_sourceT} from './Wonka_types.gen';

import {subscriptionT as Wonka_types_subscriptionT} from './Wonka_types.gen';

// tslint:disable-next-line:interface-over-type-literal
export type subscribeConsumerT<a> = (_1:Wonka_types_sourceT<a>) => Wonka_types_subscriptionT;

// tslint:disable-next-line:interface-over-type-literal
export type forEachConsumerT<a> = (_1:Wonka_types_sourceT<a>) => void;

export const subscribe: <a>(_1:((_1:a) => void)) => subscribeConsumerT<a> = Wonka_sinksBS.subscribe;

export const forEach: <a>(_1:((_1:a) => void)) => forEachConsumerT<a> = Wonka_sinksBS.forEach;

export const publish: <a>(_1:Wonka_types_sourceT<a>) => Wonka_types_subscriptionT = Wonka_sinksBS.publish;

export const toArray: <a>(_1:Wonka_types_sourceT<a>) => a[] = Wonka_sinksBS.toArray;
