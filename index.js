#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

import { upperCase, kebabCase } from './helpers.js';
import { order, save, bork, flarp } from './api.js';

program.option('-s, --stuffed', 'Stuffed Crust', true)
program.option('-p, --pizza-type <type>', 'flavour of pizza', 'Spicy Pineapple With A Side Of Aanchovies.')

program.option('-v, --verbosity', 'Output extra information.');


async function main(){

  program.parse(process.argv);

  const options = program.opts();

  if (options.verbosity){
    // Printing extra options because verbosity is enabled.
    console.log(options);
  }

  console.log('Pizza Details:');
  if (options.stuffed) console.log('- Stuffed Crust');
  if (options.pizzaType) console.log(`- ${options.pizzaType}`);

  console.log('Example of using helper functions:');

  console.log('upperCase -pizza-type', upperCase(options.pizzaType));
  console.log('kebabCase -pizza-type', kebabCase(options.pizzaType));

  // remember to await all your async functions, otherwise console.log will run before the order is actually made.
  const receipt = await order({email: 'alice@example.com', type: options.pizzaType});

  console.log(receipt);

  console.log(await save({}));

}

main()
