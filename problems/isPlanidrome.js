function isPlanidrome(string) {
    if (string.length === 0) return false;
    let start = 0;
    let end = string.length - 1;
    if (string[start] !== string[end]) return false
    isPlanidrome(string.substring(1, end - 1));
    return true;
}

console.log(isPlanidrome('TAKAKAT'));