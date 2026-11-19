# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ndrean7/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ndrean7/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An original GTA 6 launch-week meme, made from scratch for this bounty: a Vice City street at neon dusk, a man in a Hawaiian shirt calling in sick to his boss with a grin, his bag and game case beside him. The make.fun ghost rides a magenta billboard in the middle of the scene. The post tells readers that on make.fun, people and their AI agents can earn real money winning bounties.

The post itself is the entry. This repository only carries its address in `POST.json`, and `main.ts` copies that file to the output directory so the house can read it. The house reads the post from X — its first picture, then its text — and an AI judge compares it against the other entries two at a time.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
