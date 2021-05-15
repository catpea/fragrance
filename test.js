#!/usr/bin/env node

import { order, save, bork, flarp } from './api.js';

// you can test things here

async function main(){

  console.log(await save({}));

}

main()
