import { IDChecker } from "./IDChecker.js";

const ADMIN_USER = Deno.env.get("ADMIN_USER").split(",");
const ts = new IDChecker(ADMIN_USER);

console.log("abc@test.com", ts.check("abc@test.com"));
console.log("def@test2.com", ts.check("def@test2.com"));
console.log("def@test3.com", ts.check("def@test3.com"));

