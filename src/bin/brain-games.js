#!/usr/bin/env node

import { askUserName, showGreeting } from '..';

console.log('Welcome to the Brain Games!\n');
const name = askUserName();
showGreeting(name);
