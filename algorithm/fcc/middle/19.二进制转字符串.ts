function binaryAgent(str: string): string {
  return str.split(' ').reduce((perv: string, next: string) => {
    perv += String.fromCharCode(parseInt(next, 2));
    return perv
  }, '')
}

console.log(binaryAgent("01001001 00100000 01100001 01101101 00100000 01100010 01101001 01100111 00100000 01100010 01101001 01100111 00100000 01100111 01101111 01101111 01100100"));
