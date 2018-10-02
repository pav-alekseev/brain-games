#!/usr/bin/env node

import { askUserName, playGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const name = askUserName();
console.log('\n');
console.log(playGame(name));
