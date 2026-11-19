// GitHub Pages only knows the files in build/, so /lockpray/privacy used to be
// served by 404.html with an HTTP 404 status before the app redirected itself.
// A copy of index.html per route makes each URL return 200 directly.
const fs = require("fs");
const path = require("path");

const routes = ["privacy", "support"];
const build = path.join(__dirname, "..", "build");
const index = fs.readFileSync(path.join(build, "index.html"));

for (const route of routes) {
  fs.writeFileSync(path.join(build, `${route}.html`), index);
}
console.log(`Copied index.html to ${routes.map((r) => `${r}.html`).join(", ")}`);
