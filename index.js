const {execSync} = require("child_process");
const fs = require("fs");
const {resolve : r} = require("path");

const repo = "https://github.com/Abhay2133/apps" || process.env.repo
const dir = repo.split("/").at(-1);
const clone = `rm ${dir} -rfv ; rm src -rf; git clone ${repo}`
const mv = `mv ${dir}/src ../src` || process.env.mv;
const start = "./src/app.js"  || process.env.start

console.time("clone");
execSync(clone); 
console.timeEnd("clone");
console.time("move");
fs.renameSync(r(dir, "src"), r("src"));
//execSync(mv);
console.timeEnd("move");

require(start)();