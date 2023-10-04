#!/usr/bin/env node

import { testSeed, run } from './process.js';
import { die } from './util.js';

function getSeed() {
  let seed;
  const args = process.argv[2];
  if (!args) {
    die('Error: expected seed words.', true);
  }
  if (!args.includes(' ')) {
    seed = process.argv.slice(2).map(s => s.trim().toLowerCase()).filter(Boolean);
  } else {
    seed = args.split(' ').map(s => s.trim().toLowerCase()).filter(Boolean);
  }
  if (seed.length !== 25) {
    die(`Invalid seed, expected 25 words but instead found ${seed.length}`);
  }
  return seed;
}

const seed = getSeed();

if (run(seed, true)) {
  console.log('\nDone!\nAFTER RECOVERY, MAKE SURE TO REKEY YOUR ADDRESS OR MOVE YOUR FUNDS TO A NEW ONE');
  process.exit(0);
}

console.error('not found');
