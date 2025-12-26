export class IDChecker {
  constructor(list) {
    this.list = list;
  }
  check(s) {
    for (const item of this.list) {
      if (item.startsWith("*")) {
        if (s.endsWith(item.substring(1))) return true;
      } else if (item.endsWith("*")) {
        if (s.startsWith(item.substring(0, item.length - 1))) return true;
      } else if (item == s) {
        return true;
      }
    }
    return false;
  }
}
