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
    if (!node.letters[letter]) return false;
    if (subword.length) {
      return this.hasWord(subword, node.letters[letter]);
    } else {
      return node.letters[letter].isWord || false;
    }
  }
}

// const trie = new Trie();
// trie.addWord('boy');
// trie.addWord('boycot');
// trie.addWord('bro');
// trie.addWord('broke');
// trie.addWord('gems');
// trie.addWord('germs');
// trie.addWord('genuine');
// console.log(trie);
// console.log(trie.hasWord('boy'));
// console.log(trie.print());
// console.log(trie.getCompletions('g'));
