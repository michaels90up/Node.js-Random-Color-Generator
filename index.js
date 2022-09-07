import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

// from kuler library: const str = kuler('foo', color);

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('####                       ####', color));
console.log(kuler(`####        ${color}        ####`, color));
console.log(kuler('####                       ####', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
console.log(kuler('###############################', color));
