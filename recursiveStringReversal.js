var reverseString = function(s) {
    let recursion = (start, end) => {
        if (start >= end) return s
        let temp
        temp = s[start]
        s[start] = s[end]
        s[end] = temp
        return recursion(start + 1, end - 1)
    }
    recursion(0, s.length - 1)
};