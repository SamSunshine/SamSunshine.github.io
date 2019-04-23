 /*
# 1 
(15pt) Write a JavaScript function min1() that takes an array of numbers as 
argument and returns the smallest number in the array. You must implement this 
function using a loop statement.
*/
function min1(a,b,c,d,e)
{
    
    var array=[a,b,c,d,e];
    var min1;

   if(a==null && b==null && c==null && d==null && e==null)
   {
       return null;
   }
    
   else
   {
        min1=array[0];
       for(var i=0;i<array.length-1;i++)
        {
                if(min1>array[i])
                {
                    min1=array[i];
                }
        }
        
        return min1;
   }
}

console.log(min(1,2,3,4,5));


/*
#2
 (15pt) Write a JavaScript function min2() that takes an array of numbers as argument 
 and returns the smallest number in the array. You must implement this function using 
 the forEach() method in Array.
*/
function min2(a,b,c,d,e)
{   
    var array=[a,b,c,d,e];
    var min2;   
       min2=array[0];
       array.forEach(function(i){
           if(min2>array[i])
            {
                min2=array[i];
            }
       });
       return min2;
}
console.log(min2(1,2,3,4,5));

/*
#3
(15pt) Write a JavaScript function factorial() that takes an positive integer n 
and returns n!, which is 1*2*..*(n-1)*n. You must implement this function using 
recursion.
*/

function factorialize(num) {
    if (num < 0)
          return -1;
    else if (num == 0)
        return 1;
    else {   
        return (num * factorialize(num - 1)); 
    } 
   } 
   factorialize(5);
   
  /*
  #4
 (15pt) Write a JavaScript function palindrome() that takes a string and determine
  if it's a plindrome, i.e. a word that reads the same forward and backward, e.g. 
  "racecar". You must implement this function using String methods.
  */
function palindrome(a) {
    for(i = 0; i < a.length; i++)
    if(a[i]==a[a.length-1])
    return "palindrome";
    else return "not palindrome";
}


function palindromes(s){
    for(var i = 0; i<s.length; i++){
        if (s[i] !== s[s.length - i -1]){
            return false;
        }
    }
    return true;
 }
 console.log(palindromes("dad"));