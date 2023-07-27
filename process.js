import algosdk from 'algosdk';
import { english } from './words.js';
import { die } from './util.js';

let log = true;

const regex = /^x+$/i;

export function run(seed) {
  const unknowns = seed.map((word, i) => regex.test(word) ? i : -1).filter(i => i !== -1);
  const knowns = seed.filter((_, i) => !unknowns.includes(i));
  const invalid = knowns.filter(word => !english.includes(word));
  debugger;
  if (invalid.length) 
    die(`Invalid BIP39 word(s): ${invalid.join(' ')}`);
  let returnTrue = false;
  for(const combo of combinations(english, unknowns.length)) {
    const maybeSeed = [...seed];
    for(let ui=0; ui<unknowns.length; ui++)
      maybeSeed[unknowns[ui]] = combo[ui];
    const res = testSeed(maybeSeed);
    if (res && res.addr) {
      returnTrue = true;
      console.log(res.addr, maybeSeed.join(' '));
    }
  }
  return returnTrue;
}

function * combinations(set, k) {
  const n = set.length;
  if (k > n)
    return;

  // Shift combi indexes to make it the next k-combination. Return true if
  // successful, false otherwise (when there is no next of that length).
  const next = (combi, i) => {
    if (++combi[i] < n)
      return true;
    let limit = n;
    while (i > 0) {
      if (++combi[--i] < --limit) {
        let idx = combi[i];
        while (++i < combi.length)
          combi[i] = ++idx;
        return true;
      }
    }
    return false;
  };

  const combi = Array.from(Array(k), (_, i) => i);
  const i = k-1;

  do yield combi.map(j => set[j]);
  while (next(combi, i));
}

export function testSeed(seed) {
  try {
    const a = algosdk.mnemonicToSecretKey(seed.join(' '));
    // if it succeeded then the seed is valid
    debugger;
    return a;
  } catch(e) {
    switch(e.message) {
      // expected error:
      case 'failed to decode mnemonic': return;
      // unexpected errors, ex "the mnemonic contains a word that is not in the wordlist"
      default: die(`Error: ${e.message}`);
    }
  }
}
