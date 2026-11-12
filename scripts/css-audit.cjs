const fs = require("fs");
const path = require("path");

const css = fs.readFileSync("src/index.css", "utf8");
let src = "";
function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(f.name)) src += fs.readFileSync(p, "utf8");
  }
}
walk("src");
src += fs.readFileSync("index.html", "utf8");

const sels = new Set();
for (const m of css.matchAll(/\.([a-zA-Z][\w-]*)/g)) sels.add(m[1]);

const stateful = /(:hover|:focus|\.is-|\.has-|\.reveal|::|:active|:disabled|:focus-visible|:last|:first|:nth)/;
const dead = [];
for (const sel of css.split(/[{}]/).filter((_, i) => i % 2 === 0)) {
  // handled below instead
}
for (const c of sels) {
  const inMarkup =
    src.includes(`"${c}"`) ||
    src.includes(`"${c} `) ||
    src.includes(` ${c}"`) ||
    src.includes(`"${c}-`) ||
    src.includes(` ${c}-`) ||
    src.includes(`.${c}`) ||
    src.includes(`${c} `) ||
    src.includes(`${c}"`) ||
    src.includes(`className={\``) && src.includes(c);
  const stateRule = new RegExp(`\\.${c}(:|\\b(is-|has-))`).test(css) && !new RegExp(`class(Name)?[={].*\\b${c}\\b`).test(src);
  if (!inMarkup) dead.push(c);
}
console.log("CLASSES NOT FOUND IN MARKUP (check manually, state classes may appear):\n" + (dead.join("\n") || "(none)"));
