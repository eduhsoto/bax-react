// "use strict";
// import fs from "node:fs";
// import path from "node:path";
// import { fileURLToPath } from "url";
// import express from "express";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const app = express();

// export async function createServer() {
//   const resolve = (p) => path.resolve(__dirname, p);

//   let vite = null;

//   app.use((await import("compression")).default());
//   app.use(
//     (await import("serve-static")).default(resolve("dist/client"), {
//       index: false,
//     })
//   );

//   app.use("*", async (req, res) => {
//     const url = "/";

//     const template = fs.readFileSync(
//       resolve("dist/client/index.html"),
//       "utf-8"
//     );
//     const render = (await import("./dist/server/entry-server.js")).SSRRender;

//     const appHTML = render(url);
//     const html = template.replace(`<!--ap-html-->`, appHTML);

//     res.status(200).set({ "Content-Type": "text/html" }).end(html);
//   });

//   return { app, vite };
// }

// createServer().then(({ app }) =>
//   app.listen(3033, () => {
//     console.log("http://localhost:3033");
//   })
// );

// "use strict";
// import fs from 'node:fs'
// import path from 'node:path'
// import { fileURLToPath } from 'url'
// import express from 'express'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const app = express()

// export async function createServer(
//   root = process.cwd(),
//   isProd = process.env.NODE_ENV === 'production',
//   hmrPort
// ) {
//   const resolve = (p) => path.resolve(__dirname, p)

//   let vite = null
//   if (!isProd) {
//     vite = await (
//       await import('vite')
//     ).createServer({
//       root,
//       logLevel: 'info',
//       server: {
//         middlewareMode: true,
//         hmr: {
//           port: hmrPort
//         }
//       },
//       appType: 'custom'
//     })
//     app.use(vite.middlewares)
//   } else {
//     app.use((await import('compression')).default())
//     app.use(
//       (await import('serve-static')).default(resolve('dist/client'), {
//         index: false
//       })
//     )
//   }

//   app.use('*', async (req, res) => {
//     const url = '/'
//     let template, render
//     if (!isProd && vite) {
//       template = fs.readFileSync(resolve('index.html'), 'utf-8')
//       template = await vite.transformIndexHtml(url, template) // Inserting react-refresh for local development
//       render = (await vite.ssrLoadModule('/src/entry-server.js')).SSRRender
//     } else {
//       template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
//       render = (await import('./dist/server/entry-server.js')).SSRRender
//     }

//     const appHtml = render(url) //Rendering component without any client side logic de-hydrated like a dry sponge
//     const html = template.replace(`<!--root-html-->`, appHtml) //Replacing placeholder with SSR rendered components

//     res.status(200).set({ 'Content-Type': 'text/html' }).end(html) //Outputing final html
//   })

//   return { app, vite }
// }

// createServer().then(({ app }) =>
//   app.listen(5173, () => {
//     console.log('http://localhost:5173')
//   })
// )

// "use strict";
// import fs from 'node:fs'
// import path from 'node:path'
// import express from 'express';
// import { fileURLToPath } from 'url'

// const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// async function createServer(
//   root = process.cwd(),
//   isProd = process.env.NODE_ENV === "production"
// ) {
//   const resolve = (p) => path.resolve(__dirname, p);

//   const indexProd = isProd
//     ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
//     : "";

//   const app = express();

//   /**
//    * @type {import('vite').ViteDevServer}
//    */
  
//   let vite;
//   if (!isProd) {
//     vite = await (await import('vite')).createServer({
//       root,
//       logLevel: isTest ? "error" : "info",
//       server: {
//         middlewareMode: true,
//         watch: {
//           // During tests we edit the files too fast and sometimes chokidar
//           // misses change events, so enforce polling for consistency
//           usePolling: true,
//           interval: 100,
//         },
//       },
//     });
//     // use vite's connect instance as middleware
//     app.use(vite.middlewares);
//   } else {
//     app.use((await import('compression')).default());
//     app.use((await import('serve-static')).default(resolve('dist/client'), {
//         index: false,
//       })
//     );
//   }

//   app.use("*", async (req, res) => {
//     try {
//       const url = req.originalUrl;

//       let template, render;
//       if (!isProd) {
//         // always read fresh template in dev
//         template = fs.readFileSync(resolve("index.html"), "utf-8");
//         template = await vite.transformIndexHtml(url, template);
//         (await vite.ssrLoadModule("/src/App.tsx")).setup();
//         render = (await vite.ssrLoadModule("/src/entry-server.jsx")).SSRRender;
//         console.log("render", render);
//       } else {
//         template = indexProd;
//         render = (await import('./dist/server/entry-server.js')).SSRRender;
//       }

//       const appHtml = render(url);

//       if (url) {
//         // Somewhere a `<Redirect>` was rendered
//         return res.redirect(301, url);
//       }

//       const html = template.replace(`<!--root-html-->`, appHtml);

//       res.status(200).set({ "Content-Type": "text/html" }).end(html);
//     } catch (e) {
//       !isProd && vite.ssrFixStacktrace(e);
//       console.log(e.stack);
//       res.status(500).end(e.stack);
//     }
//   });

//   return { app, vite };
// }

// if (!isTest) {
//   createServer().then(({ app }) =>
//     app.listen(3000, () => {
//       console.log("http://localhost:3000");
//     })
//   );
// }