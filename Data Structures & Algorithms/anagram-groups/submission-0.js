class Solution {
    groupAnagrams(strs) {
        const map = new Map();

        for(let i= 0 ;i < strs.length ; i++){
            let word = strs[i];

            let count = new Array(26).fill(0)

            for(let j = 0 ; j < word.length ; j++){
                let index = word.charCodeAt(j) - "a".charCodeAt(0)
                count[index]++;
            }
                let key = count.join(',')
            if(!map.has(key)){
                map.set(key , [])
            }

            map.get(key).push(word)
        }
        return Array.from(map.values())
    }
}
