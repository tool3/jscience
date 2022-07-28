class Node {
  constructor(value) {
    this.value = value;
    this.letters = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
    this.depth = 0;
  }

  addWord(word, node = this.root) {
    const letter = word[0];
    const newNode = new Node(letter);
    const substring = word.substring(1);
    if (word.length) {
      if (node.letters[letter]) {
        this.addWord(substring, node.letters[letter]);
      } else {
        node.letters[letter] = newNode;
        this.addWord(substring, newNode);
      }
    } else {
      node.isWord = true;
    }
  }

  traverse(node, string = '', results = []) {
    const length = Object.keys(node.letters).length;
    if (length) {
      if (node.value && !node.isWord) {
        string += node.value;
      }

      for (const letter in node.letters) {
        if (node.letters[letter].isWord) {
          string += node.letters[letter].value;
          results.push(string);
        }
        this.traverse(node.letters[letter], string, results);
      }
    } else {
      results.concat(string);
    }
    return results;
  }

  print() {
    if (!this.root) return undefined;
    return this.traverse(this.root);
  }

  getCompletions(letter) {
    if (!letter) return undefined;
    const node = this.root.letters[letter];
    return this.traverse(node);
  }

  hasWord(word, node = this.root) {
    const letter = word[0];
    const subword = word.substring(1);
    if (!node.letters[letter] && !letter === '.') return false;
    if (subword.length) {
      if (letter === '.') {
        const next = subword[1];
        for (const foundLetter in node.letters[letter]) {
          const target = node.letters[foundLetter];
          const found = target && Object.keys(target.letters).indexOf(next) !== -1;
          if (found) {
            return this.hasWord(subword.substring(1), current);
          }
        }
      } else {
        return this.hasWord(subword, node.letters[letter]);
      }
    } else {
      return node.letters[letter]?.isWord;
    }
  }

  search(word) {
    let current = this.root;
    let currentWord = word;

    while (current) {
      const letter = currentWord[0];
      if (!current.letters[letter] && !letter === '.') return false;
      if (currentWord.length) {
        // support wildcard
        if (letter === '.') {
          const next = currentWord[1];
          for (const foundLetter in current.letters) {
            const target = current.letters[foundLetter];
            const found = target && Object.keys(target.letters).indexOf(next) !== -1;
            if (found) {
              currentWord = currentWord.substring(1);
              current = target;
            }
          }
        } else {
          currentWord = currentWord.substring(1);
          current = current.letters[letter];
        }
      } else {
        break;
      }
    }

    return current.isWord;
  }
}

const trie = new Trie();
trie.addWord('boy');
trie.addWord('boycot');
trie.addWord('bro');
trie.addWord('broke');
trie.addWord('gems');
trie.addWord('germs');
trie.addWord('genuine');
trie.addWord('genuine');
trie.addWord('genuine');
console.log(trie);
console.log(trie.hasWord('boy'));
console.log(trie.hasWord('b.'));
console.log(trie.print());
console.log(trie.getCompletions('g'));
console.log(trie.getCompletions('b'));
console.log(trie.search('g'));
