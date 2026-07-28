# Forbole Ventures

The official website for [Forbole Ventures](https://ventures.forbole.com/).

## Requirements

- Node.js 20.9 or newer
- Yarn 1.x

## Local development

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
yarn type-check
yarn lint
yarn build
```

To optimize SVG assets after adding or changing artwork:

```bash
yarn optimize:assets
```

## Production

The project builds a standalone Next.js server and includes a multi-stage
Dockerfile:

```bash
docker build -t forbole-ventures .
docker run --rm -p 3000:3000 forbole-ventures
```

Set `NEXT_PUBLIC_URL` when deploying to a different hostname so canonical and
social metadata use that origin.

## Cloudflare deployment

The site is packaged for Cloudflare Workers with OpenNext. To test the Worker
runtime locally:

```bash
yarn preview
```

The GitHub Actions workflow in `.github/workflows/deploy-cloudflare.yml`
deploys pushes to `master` and also supports manual runs. Configure these
encrypted repository secrets before running it:

- `CLOUDFLARE_API_TOKEN`: a token with the Edit Cloudflare Workers permission
- `CLOUDFLARE_ACCOUNT_ID`: the target Cloudflare account ID
