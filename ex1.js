
// Example 1: Longest Substring Without Repeating Characters

// Normal case
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let seenChars = new Set();

    for (let i = 0; i < s.length; i++) {
        
        for (let j = i; j < s.length; j++) {
            if (seenChars.has(s[j])) {
                break;
            }
            seenChars.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
}
// Time complexity O(n²)
// Space complexity O(n)



// Sliding window technique
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
// Input s = "abcabcbb"
// The longest substring without repeating characters is "abc" with length 3.
// Time complexity O(n)
// Space complexity O(1)




// Example 2: Is palindrome

// String Reversal with Concatenation
// LEAST EFFICIENT
function isPalindromeReversal(s) {
    const lower = s.toLowerCase();
    let reversed = '';

    for (let i = lower.length - 1; i >= 0; i--) {
        reversed += lower[i]; // O(n) operation per iteration!
    }

    return lower === reversed;
}
// Time: O(n²) - string concatenation is expensive
// Space: O(n) - stores lower + reversed strings



//using array
const reversed = [];
for (let i = lower.length - 1; i >= 0; i--) {
    reversed.push(lower[i]); // O(1) operation
}
return lower === reversed.join(''); // O(n) join
// Time: O(n)
// Space: O(n)

//NOTE: The hidden cost is in reversed += lower[i]. Because strings are immutable in JavaScript, 
// each concatenation creates an entirely new string and copies all existing characters, making it quadratic time.



// Two pointer method

// O(n) Space Complexity - Pre-converts entire string
function isPalindromePreConverted(s) {
    let left = 0;
    let right = s.length - 1;
    const lower = s.toLowerCase(); // Creates new string of length n

    while (left < right) {
        if (lower[left] !== lower[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
// Time complexity O(n)
// Space complexity O(n)



// O(1) Space Complexity - Inline character conversion
function isPalindromeInline(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Convert characters inline during comparison
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
// Time complexity O(n)
// Space complexity O(1)




/**
 * Merge Two Sorted Arrays - Normal and Optimized Approaches
 */

// APPROACH 1: NORMAL (Concatenate and Sort)
// ============
function mergeNormal(arr1, arr2) {
    /**
     * Concatenate both arrays and sort the result
     * 
     * Time Complexity: O((m+n) log(m+n)) - due to sorting
     * Space Complexity: O(m+n) - for the merged array
     * where m = arr1.length, n = arr2.length
     */
    const merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);
    return merged;
}


// APPROACH 2: OPTIMIZED (Two Pointer Technique)
// ================
function mergeOptimized(arr1, arr2) {
    /**
     * Use two pointers to merge in linear time
     * 
     * Time Complexity: O(m+n) - single pass through both arrays
     * Space Complexity: O(m+n) - for the result array
     * where m = arr1.length, n = arr2.length
     */
    const m = arr1.length;
    const n = arr2.length;
    const merged = [];
    let i = 0, j = 0;
    
    // Compare elements from both arrays and add smaller one
    while (i < m && j < n) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements from arr1 (if any)
    while (i < m) {
        merged.push(arr1[i]);
        i++;
    }
    
    // Add remaining elements from arr2 (if any)
    while (j < n) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// APPROACH 3: IN-PLACE MERGE (for special case)
// ==========
function mergeInPlace(nums1, m, nums2, n) {
    /**
     * Merge nums2 into nums1 in-place
     * nums1 has size m+n with last n elements as 0
     * 
     * Time Complexity: O(m+n)
     * Space Complexity: O(1) - in-place modification
     */
    // Start from the end to avoid overwriting
    let p1 = m - 1;      // pointer for nums1
    let p2 = n - 1;      // pointer for nums2
    let p = m + n - 1;   // pointer for merged position
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // Copy remaining elements from nums2 (if any)
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    
    return nums1;
}





class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class singleLL{
    constructor(){
        this.head =null;
    }

    insertAtHead(value){
        const newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(value){
        const newNode = new node(value);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let 

    }
}