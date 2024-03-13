# eNIS next
> enis is a common name references unofficial client for an electronic school journal used in NIS schools. \
[find more about it here](https://github.com/anyrange/enis2#:~:text=One%20of%20many,approximate%20history)

## Basis
eNIS next is a NIS Mektep mobile app backed web application with PWA support, named after the framework it was builded on - NextJS.

## Getting started
First, you have to clone the repo

```bash
git clone https://github.com/alyxmp4/enis-next
```

Install dependencies and setup .env

```bash
pnpm install
vim .env

...

NEXT_PUBLIC_APP_VERSION=...
NEXT_PUBLIC_APP_CHANNEL=...
NEXT_PUBLIC_REPO_URL=...

GA_THREAD_ID=...

SENTRY_PROJECT=...

...

```

> If you do not need any of that, just modify `src/env.js` or make `skipValidation: true`

Finally, run the application in development mode

```bash
pnpm run dev
```

## Contributing
- Fork the repo and create your branch from main
- Submit the pull request
