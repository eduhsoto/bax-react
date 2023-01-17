import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = p => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
const render = (await import('./dist/server/entry-server.js')).SSRRender;

const routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map((file) => {
const name = file.replace(/\.jsx$/, '').toLowerCase();
return name == 'home' ? '/' : `/${name}`;
});

(async () => {
    for (const url of routesToPrerender){
        const appHTML = render(url);

        const html = template.replace(`<!--app-html-->`, appHTML);

        const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
        fs.writeFileSync(toAbsolute(filePath), html);
    }
})


