// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let seenChars = new Set();

//     for (let i = 0; i < s.length; i++) {
        
//         for (let j = i; j < s.length; j++) {
//             if (seenChars.has(s[j])) {
//                 break;
//             }
//             seenChars.add(s[j]);
//             maxLength = Math.max(maxLength, j - i + 1);
//         }
//     }

//     return maxLength;
// }

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcddabvx"));