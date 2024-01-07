// let i = 0;
//
// const postI = i++
// console.log("POST INCREMENT: ", postI)
//
// let ii = 0
// const preI = ++ii;
// console.log("PRE INCREMENT: ", preI)
//
// let iii = 0
// const compoundI = iii += 1;
// console.log("COMPOUND ASSIGNMENT: ", compoundI);


// const step = (lines) => {
//   for (let rol=0; rol < lines; rol++) {
//     let downStairs = "";
//     let upStairs = "";
//
//     for (let col=0; col < lines; col++) {
//       downStairs += rol > col ? " " : "#";
//       upStairs += col <= rol ? "#" : " ";
//     }
//
//     console.log(upStairs, downStairs, upStairs, downStairs, upStairs, downStairs, upStairs, downStairs);
//   }
// }
//
// step(4)



// function areAnagrams(word1, word2) {
//   return word1.split("").sort().join("") === word2.split("").sort().join("");
// }


// function funWithAnagrams(text) {
//   const nonAnagrams = [];
//
//   for (let i = 1; i < text.length; i++) {
//
//     for (let j=0; j < text.length; j++) {
//       if ((text[i].split("").sort().join("") !== text[j].split("").sort().join(""))) {
//         nonAnagrams.push(text[i])
//       }
//     }
//
//     if (!nonAnagrams.length) {
//       nonAnagrams.push(text[0])
//     }
//
//     return nonAnagrams;
//   }
//
// }
// const text = ["poke", "pkoe", "okpe", "ekop"];
// console.log(funWithAnagrams(text));


const anagrams = (str, string) => {
  const onlyWord = str.replace(/\W/g, "").toLowerCase();
  const onlyWrd = string.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();

//   if (onlyWord.length != onlyWrd.length) return false;
//
//   const frqWord = {};
//   const frqWrd = {};
//
//   for (const w of onlyWord) {
//     frqWord[w] = (frqWord[w] || 0) + 1;
//   }
//
//   for (const w of onlyWrd) {
//     frqWrd[w] = (frqWrd[w] || 0) + 1;
//   }
//
//   for (const w in frqWord) {
//     // check if a key in one is missing in the other
//     if (!(w in frqWrd)) return false;
//
//     if (frqWord[w] !== frqWrd[w]) return false;
//   }


   // if (onlyWord.length !== onlyWrd.length) return false;
   //
   // const freqCounter = {};
   //
   // for (const l of onlyWord) {
   //   freqCounter[l] = (freqCounter[l] || 0) + 1;
   // }
   //
   // for (const l of onlyWrd) {
   //   if (!freqCounter[l]) return false;
   //   else freqCounter[l] -= 1;
   // }

  if (onlyWord.length !== onlyWrd.length) return false;

  const freqCounter = new Map();

  for (const w of onlyWord) {
    freqCounter.set(w, (freqCounter.get(w) || 0) + 1);
  }

  for (const w of onlyWrd) {
    if (!freqCounter.get(w)) return false;
    else {
      freqCounter.set(w, freqCounter.get(w) - 1);
    }
  }

  return true;
}

console.log(anagrams("Fairy tale!!", "Tale fairy!"));
