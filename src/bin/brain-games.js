#!/usr/bin/env node

import { askUser, showToUser } from '..';

showToUser('Welcome to the Brain Games!\n');
const name = askUser('May I have your name? ');
showToUser(`Hello, ${name}!`);
