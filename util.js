import algosdk from 'algosdk';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const { generateAccount, secretKeyToMnemonic } = algosdk;

export function genSeed() {
  return secretKeyToMnemonic(generateAccount().sk);
}

export function swapWords(seed, leftIdx, rightIdx) {
  const nextSeed = [...seed];
  if (rightIdx > seed.length - 1)
    rightIdx = rightIdx % seed.length;
  const [right, left] = [seed[leftIdx], seed[rightIdx]];
  nextSeed[leftIdx] = left;
  nextSeed[rightIdx] = right;
  return nextSeed;
}

export function moveWord(seed, leftIdx, rightIdx) {
  const nextSeed = [...seed];
  const [word] = nextSeed.splice(leftIdx, 1, '');
  if (rightIdx > seed.length - 1)
    rightIdx = (rightIdx + 1) % seed.length
  if (leftIdx < rightIdx)
    rightIdx++;
  nextSeed.splice(rightIdx, 0, word);
  return nextSeed.filter(Boolean);
}

function getCWD() {
  return dirname(fileURLToPath(import.meta.url));
}

function getPackageInfo() {
  return JSON.parse(readFileSync(join(getCWD(), 'package.json')));
}

export function die(message, withUsage) {
  console.error(message);
  if (withUsage) {
    const { name, version } = getPackageInfo();
    console.error("\nProvide the parts of the seed word you have, replacing the missing words with XXX\n");
    console.error(`Example:\nnpx ${name}@${version} spend injury island truth wool crater much cream undo nice dream mirror enroll whale gaze acoustic ski when shrug lift XXX quantum enact able narrow\n`);
    console.error(`Detailed instructions: https://github.com/d13co/algorand-find-missing-seed-word`);
  }
  process.exit(1);
}

