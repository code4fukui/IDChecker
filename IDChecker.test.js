import * as t from "https://deno.land/std/testing/asserts.ts";
import { IDChecker } from "./IDChecker.js";

Deno.test("simple", () => {
  const ts = new IDChecker([
    "*@test.com",
    "abc@test2.com",
    "ghi@*",
  ]);
  t.assertEquals(ts.check("abc@test.com"), true);
  t.assertEquals(ts.check("def@test.com"), true);
  t.assertEquals(ts.check("@test.com"), true);
  t.assertEquals(ts.check("test.com"), false);
  t.assertEquals(ts.check("abc@test2.com"), true);
  t.assertEquals(ts.check("abc@test3.com"), false);
  t.assertEquals(ts.check("ghi@test3.com"), true);
  t.assertEquals(ts.check("ghi@test4.com"), true);
});
