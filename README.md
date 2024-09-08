# ROODAY BunnyLOL

## Commands

Command | Name | URL
--- | --- | ---
gmail | Gmail | [https://mail.google.com/mail/u/0](https://mail.google.com/mail/u/0)
gdrive | Google Drive | [https://drive.google.com/drive/u/0](https://drive.google.com/drive/u/0)
ghs | GitHub | [https://github.com/](https://github.com/)
g | Google | [https://google.com/](https://google.com/)
gcal | Google Calendar | [https://calendar.google.com/calendar/r](https://calendar.google.com/calendar/r)
DEFAULT | Default - Google Search | [https://google.com/](https://google.com/)

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `https://rooday.com/bunnylol?search=%s`. Of course, you should change the `rooday.com` part to your own domain.

4. Make this the default search engine.

## Adding a command

1. Run `npm install`.

2. Open up the `src/commands.ts` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Push to GitHub and let the GitHub action build and publish.

## Running locally

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running `npm install`, followed by `npm start`. The server should be up and visible at `localhost:3000`.
