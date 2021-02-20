/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//one value in the array is highest
//pre:I have an array with a highest value and seprate int
//post: I will have added the seperate int to the int at each index of the array
//post: and compare each new value against the preexsisting highest value 


var kidsWithCandies = function(candies, extraCandies) {
    mostCandy = 0
    output = []
    
    for (i = 0; i < candies.length; i++) {
        if (candies[i] > mostCandy) {
            mostCandy = candies[i];
        }}

    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= mostCandy) {
            output.push(true)
        }else{
            output.push(false)
        }}
 
    return output
};