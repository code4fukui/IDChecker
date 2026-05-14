# IDChecker

シンプルなワイルドカードベースの文字列マッチングライブラリ

## 特徴
- 文字列の先頭および末尾に対するシンプルなワイルドカードパターン（`"abc*"`、`"*abc"`）をサポート
- 軽量で依存関係なし
- 小規模なフィルタリングやトークンチェックに最適

## 使い方

```js
import { IDChecker } from "https://code4fukui.github.io/IDChecker/IDChecker.js";

const checker = new IDChecker(["hello*", "*world", "foo"]);

checker.check("hello123"); // true (starts with)
checker.check("myworld");  // true (ends with)
checker.check("foo");      // true (exact match)
checker.check("bar");      // false
```

## Denoでの使用例

`.env` ファイルを準備します:
```
ADMIN_USER=abc@test.com,*@test2.com
```

```js
import { IDChecker } from "./IDChecker.js";

const ADMIN_USER = Deno.env.get("ADMIN_USER").split(",");
const ts = new IDChecker(ADMIN_USER);

console.log("abc@test.com", ts.check("abc@test.com"));
console.log("def@test2.com", ts.check("def@test2.com"));
console.log("def@test3.com", ts.check("def@test3.com"));
```

## ライセンス
MIT License
