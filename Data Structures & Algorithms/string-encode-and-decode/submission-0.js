class Solution {
    encode(strs) {
        let result = "";
        for(const str of strs){
            result += str.length + '#' +str;
        }
        return result;
    }

    decode(s) {
        let result = []
        let i = 0;

        while(i < s.length){
            let j = i

            while( s[j] !== "#"){
                j++;
            }

            let length = Number(s.slice(i , j))
            let word = s.slice(j+1 , j+1+length)

            result.push(word)

            i = j+1+length
        }
        return result
    }
}






