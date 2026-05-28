const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

execFileSync(
  process.execPath,
  [
    path.join(root, "node_modules", "tailwindcss", "lib", "cli.js"),
    "-i",
    "./src/input.css",
    "-o",
    "./dist/output.css",
    "--minify"
  ],
  { cwd: root, stdio: "inherit" }
);

const html = fs
  .readFileSync(path.join(root, "index.html"), "utf8")
  .replace('href="dist/output.css"', 'href="output.css"');

fs.writeFileSync(path.join(dist, "index.html"), html);
fs.copyFileSync(path.join(root, "script.js"), path.join(dist, "script.js"));
fs.cpSync(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });
