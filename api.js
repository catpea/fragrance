import { upperCase, kebabCase } from './helpers.js'; // helpers are best used in the API, keep index simple.

// Remember to export all your functrions
export { order, save, bork, flarp };

async function order({ email, pizzaType }) {
  // put your main code in here...
  return "TEST-ORDER-ID-123";
}

async function save({ something, someOtherThing }) {
  // put your main code in here...
  // this is an async function to remember to await it: const result = await save({something:'=<^o.0^>=', someOtherThing:'You are a programmer!'})
  return `    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)`;
}

function bork(options) {
  const { something, someOtherThing } = options;
}

function flarp(options) {
  const something = options.something;
  const someOtherThing = options.someOtherThing;

  // or use options.someOtherThing directly'
}
