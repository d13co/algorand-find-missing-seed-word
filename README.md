# Algorand Reorder Seed Words

## Overview

Find a missing word in an Algorand seed phrase.

## Requirements

node & npm. Find out how to install these on your platform [here](https://nodejs.org/).

## Usage

```
git clone git@github.com:d13co/algorand-find-missing-seed-word.git
cd algorand-find-missing-seed-word
npm install
node index.js [your 25 seed words here with the unknown one(s) replaced as "xxxxx"]
```

## Security & Dependencies

The code does not include any network code or any other way to exfiltrate your seed phrase.

The only package imported is the official JS algorand sdk `algosdk`, which is used to validate the seed phrase.

## Example output

Correct seed phrase: merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

Replacing the first one with xxxxx (pretend it is missing) yields this:

```

$ node index.js xxxx kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when  06:53:52
DCUWLEDKUEVNLDV5LLP5EXJ42D6W36RT52QFYGUR76NO5V65BFWITNIEVM merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when
DRNB3K645UMEP4US4QSZ3L4VVWQGVUPF4I7VEGRXNW5BIVZHI2UBVXPQI4 shallow kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when
Finished
```

You may have multiple matches output, as in the above example.

## Contributions

If this helps you recover your funds, consider sending us a cup of coffee or two at the following address:

```
DTHIRTEENNLSYGLSEXTXC6X4SVDWMFRCPAOAUCXWIXJRCVBWIIGLYARNQE
```

## Support & Socials

This code is provided as-is.

If we aren't busy we will be happy to help you out. 

You can get in touch on [Twitter](https://twitter.com/d13_co/) or post on our subreddit: [/r/D13](https://reddit.com/r/D13).
