# Preact Start | SSR with Preact and Bun

Bun based SSR + loader pattern implementation of Preact

## Setup Instructions

1. Install bun
1. Run `bun install`
1. Run `bun dev` to start dev server

## Framework roles

- Pages directory is used for Page level routing
- Use Preact with JSX and TS enabled (thanks Bun)
- Export named metadata object with title from pages for SEO
- Export default Component for page level component
- Export named async loader function for loader data processing (streaming and suspense yet to be implemented)

## Some facts

Routing - Filesystem based routing like NextJS from bun
Bundler/Runtime - Bun
Library - Preact
Inspiration - NextJS (Pages router), Remix, React Router v7

## TODO

- [ ] complete streaming
- [ ] implement hudration
- [ ] fix type system bugs for loader data
- [ ] form action controls
- [ ] other SEO level implementations
- [ ] smooth page transition fixes
- [ ] whatever else comes to my head

## Stretch goals

MCP for LLMs
RSC implementation for preact (like waku/twofold/vite-react-server/redwoodSDK/App router/etc.)

### If anyone has any queries or questions, please feel free to raise an issue or message me on Discord! Thanks
