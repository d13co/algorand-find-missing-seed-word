# Algorand find missing seed word

## Overview

Find a missing word in an Algorand seed phrase.

## Requirements

node & npm. Find out how to install these on your platform [here](https://nodejs.org/).

## Security & Dependencies

The code does not include any network code or any other way to exfiltrate your seed phrase.

The only package imported is the official JS algorand sdk `algosdk`, which is used to validate the seed phrase.

The code is immutably published to npm as version 1.0.0 and there is a call for [community developers to audit it here](https://github.com/d13co/algorand-find-missing-seed-word/issues/1).

## Usage

You can run this directly like so, replacing any seed word you don't know with XXX:

```
npx algorand-find-missing-seed-word@1.0.0 [your 25 seed words]
```

The first time you run this, it will ask if it is OK to install the package.

```
Need to install the following packages:
  algorand-find-missing-seed-word@1.0.0
Ok to proceed? (y) y
```

Type `y` and press ENTER to proceed.

### ⚠️  Windows issue 

If you have just installed nodejs on Windows for this, you may get an error while trying to run the command: `code ENOENT ... C:\Users\User\AppData\Roaming\npm ...`

You can try running `npm install -g npm` which should fix the issue.

## Example output

Correct seed phrase: merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

Replacing the first one with XXX (pretend it is missing) yields this:

```
$ npx algorand-find-missing-seed-word@1.0.0 XXX kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

Need to install the following packages:
  algorand-find-missing-seed-word@1.0.0
Ok to proceed? (y) y

DCUWLEDKUEVNLDV5LLP5EXJ42D6W36RT52QFYGUR76NO5V65BFWITNIEVM merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when
DRNB3K645UMEP4US4QSZ3L4VVWQGVUPF4I7VEGRXNW5BIVZHI2UBVXPQI4 shallow kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

Done!
AFTER RECOVERY, MAKE SURE TO REKEY YOUR ADDRESS OR MOVE YOUR FUNDS TO A NEW ONE
```

You may have multiple matches output, as in the above example. If you have more than one missing words, you will almost certainly get a lot of matches.

## Contributions

If this helps you recover your funds, consider sending us a cup of coffee or two at the following address:

```
DTHIRTEENNLSYGLSEXTXC6X4SVDWMFRCPAOAUCXWIXJRCVBWIIGLYARNQE
```

## Support & Socials

This code is provided as-is.

If we aren't busy we will be happy to help you out. 

You can get in touch on [Twitter](https://twitter.com/d13_co/) or post on our subreddit: [/r/D13](https://reddit.com/r/D13).
