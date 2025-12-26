# IDChecker

![IDChecker logo](IDChecker.jpg)

簡易ワイルドカード対応文字列判定ライブラリ / Simple Wildcard-Based String Matching Library

## 説明

`IDChecker` は、先頭または末尾にワイルドカード（`*`）を含む簡易的なパターンマッチングに対応した文字列チェック用ライブラリです。  
指定した文字列リストに対し、以下のルールで判定を行います:

| パターン例 | 意味 | 判定内容 |
|------------|------|---------|
| `"abc"` | 完全一致 | `s === "abc"` |
| `"abc*"` | 前方一致 | `s` が `"abc"` で始まる |
| `"*abc"` | 後方一致 | `s` が `"abc"` で終わる |

### 使い方

```js
import { IDChecker } from "https://code4fukui.github.io/IDChecker/IDChecker.js";

const checker = new IDChecker(["hello*", "*world", "foo"]);

checker.check("hello123"); // true (前方一致)
checker.check("myworld");  // true (後方一致)
checker.check("foo");      // true (完全一致)
checker.check("bar");      // false
```

軽量で依存関係がなく、小規模なフィルタリングや簡易トークンチェックに適しています。

# reference

`IDChecker` is a minimal string matching utility that supports simple wildcard patterns at the **beginning** or **end** of tokens.  
It evaluates an input string according to the following rules:

| Pattern | Meaning | Match condition |
|---------|---------|----------------|
| `"abc"` | Exact match | `s === "abc"` |
| `"abc*"` | Starts with | `s` begins with `"abc"` |
| `"*abc"` | Ends with | `s` ends with `"abc"` |

## usage

```js
import { IDChecker } from "https://code4fukui.github.io/IDChecker/IDChecker.js";

const checker = new IDChecker(["hello*", "*world", "foo"]);

checker.check("hello123"); // true (starts with)
checker.check("myworld");  // true (ends with)
checker.check("foo");      // true (exact match)
checker.check("bar");      // false
```

## example with Deno

prepare .env file
```sh
eno -A --env-file example_with_env.js
```
