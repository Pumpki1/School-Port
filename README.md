# School Portfolio

A school works portfolio for Khen Mhar B. Ilao, built with plain HTML, CSS, and JavaScript.

## Publish on GitHub Pages
1. Open the repository and delete the old files, or upload over them.
2. Upload everything inside this folder (not the folder itself), including the hidden file `.nojekyll`.
3. Go to Settings, then Pages, choose the main branch and the root folder, and save.
4. Wait for the Actions run named "pages build and deployment" to finish, then hard refresh the site.

## Edit your content
Open `data/content.js`. Every piece of text on the site is in that one file.

- Profile, tagline, section, and contact links: `profile`
- About Me text, skills, goals, and involvements: `about`
- Courses and artifacts: `courses`
- Certificates and awards: `achievements`
- Contact page message: `contact`

## Add your files
- PDFs go in the `files` folder, with an optional preview image in `assets/img/thumbs`.
- Certificate images go in `assets/img/achievements`.
- Your profile photo is `assets/img/profile.jpg`.
- Videos and web links use `type: "video"` or `type: "link"` with the full web address.
