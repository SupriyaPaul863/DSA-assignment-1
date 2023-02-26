//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function getPairsCount(arr, n, sum)
{
    let count = 0; 
   
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum){
              console.log(`${arr[i]}"+" ${arr[j]}`)
                count++;
            }
    return count;
}
 
    let arr = [ 1, 5, 7, -1, 5 ,8,9,-2,1,12];
    let n = arr.length;
    let sum = parseInt(prompt("enter the target number to check: "));
    document.write("Count of pairs is "+ getPairsCount(arr, n, sum)+"<br/>");

document.write("<br/>")

//Q2. Write a program to reverse an array in place.

function reverseArray(oArray) {

  let leftIndex = 0;
  let rightIndex = oArray.lenght - 1;

  while (leftIndex < rightIndex) {

    // Swap the elements with temp variable
    let temp = oArray[leftIndex];
    oArray[leftIndex] = oArray[rightIndex];
    oArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
}
let myArray = [2,3,5,8,9,4,7,1,6];
document.write("Before: "+ myArray+"<br/><br/>")
reverseArray(myArray);
document.write("After: " + myArray+"<br/>");
document.write("<br/>")


//Q3. Write a program to check if two strings are a rotation of each other?
var rotatecheck = function (s1,s2,){
    if (s1.length!=s2.length)
    return false
    
    var s3= s1+ s1
    
    return s3.includes(s2)
    }
    
    var s1= "hello"
    var s2= "llohe"
    console.log(rotatecheck(s1,s2))
    
    var s1= "hello"
    var s2= "fgohe"
    console.log(rotatecheck(s1,s2))
document.write("<br/>")


//Q4. Write a program to print the first non-repeated character from a string?
function notReapting(str){
  const obj={}
  
  for(let elem of str){
    if(obj[elem]){
      obj[elem]=obj[elem]+1
    }
    else{
      obj[elem]=1
    }
  }
  for(let elem in obj){
    if(obj[elem] === 1){
      return elem +"  is first non repeating element"
    }
  }
    return "all are repeating element"
}

let str = prompt("enter any element and get the first non-repeating element:")
document.write(notReapting(str))
document.write("<br/>")


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(x ,fromR, toR, usingR){
  if(x===1){
    document.write(`Move disk 1 from ${fromR} to ${toR}`+"<br/>")
    return
  }
  towerOfHanoi(x-1, fromR, usingR, toR)
  document.write(`Move disk ${x} from ${fromR} to ${toR}`+"<br/>")
  towerOfHanoi(x-1, usingR, toR, fromR)
}

let disk =parseInt(prompt("Enter the number of disk you want to insert:"))
towerOfHanoi(disk, 'A', 'C', 'B')

document.write("<br/>")


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  

    function postToPre(post_exp)
    {
        let s = [];
        let length = post_exp.length;
        for (let i = 0; i < length; i++) {
          
            if (isOperator(post_exp[i])) {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
               
                let temp = post_exp[i] + op2 + op1;
  
                s.push(temp);
            }
            else {
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "AB+CD-*";
    document.write("Postfix: " + post_exp + "<br/>")
    document.write("Converted Prefix : " + postToPre(post_exp) +"<br/>");

document.write("<br/>") 


//Q7. Write a program to convert prefix expression to infix expression.
    function expression(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
 
    function convert(str)
    {
        let s1 = [];
        let l = str.length;

        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (expression(c))
            {
                let op1 = s1[s1.length - 1];
                s1.pop()
                let op2 = s1[s1.length - 1];
                s1.pop()
 
                
                let temp = "(" + op1 + c + op2 + ")";
                s1.push(temp);
            }
            else{
                 s1.push(c + "");
            }
        }
        return s1[s1.length - 1];
    }
     
    let exp = "+hgh*nnm/we-jh";
    document.write("Prefix: " + exp + "<br/>")
    document.write("Converted Infix : " + convert(exp));

document.write("<br/>")




//Q8. Write a program to check if all the brackets are closed in a given code snippet.


 function brackets(a)
{
  
    let arr8 = [];
 
    for(let i = 0; i < a.length; i++)
    {
        let x = a[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            arr8.push(x);
            continue;
        }
 
        if (arr8.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = arr8.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = arr8.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = arr8.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    return (arr8.length == 0);
}
 

let a = prompt("enter a parten of  brackets like this '([{}])':");
 

if (brackets(a))
    document.write(`${a} this code snippet is having there closing barcket`);
else
    document.write(`${a} this code snippet missing there closing barcket `);
 
document.write("<br/>")



//Q9. Write a program to reverse a stack.

let arr9 = [];

function down(x)
{
    if(arr9.length==0)
        arr9.push(x);
    else
    {
            let a = arr9.pop();
            down(x);
            arr9.push(a);
    }
     
     
}
 

function reverseStack(){
    if(arr9.length > 0)
        {
            let x = arr9.pop();
            reverseStack();
            down(x);
        }
}
 
arr9.push('1');
arr9.push('2');
arr9.push('3');
arr9.push('4');
arr9.push('5');
arr9.push('6');
arr9.push('7');
arr9.push('8');

 
document.write("Original Stack<br>");
 
document.write(arr9.join(" ")+"<br>");

reverseStack();
 
document.write("Reversed Stack<br>");
 
document.write(arr9.join(" "));
document.write("<br/>")


//Q)10 . Find smallest number using stack
class smallestNum{
    constructor(){
      this.items = []
      this.length = 0
      this.push = (element) => {
        this.items.push(element)
        this.length+=1
      }
      this.pop = () => {
        if(this.length==0){
          return -1;
        }
        this.length-=1
        return this.items.pop()
      }
      this.peek = () => {
        if(this.length==0){
          return -1;
        }
        return this.items[this.length-1]
      }
    }
  }
  let smallestno=new smallestNum();
  smallestno.push(3)
  smallestno.push(4)
  smallestno.push(65)
  smallestno.push(39)
  smallestno.push(369)
  smallestno.push(2)
  smallestno.push(70)
  smallestno.push(55)
  let smallest=smallestno.pop(),x;
  
  let y=smallestno.length;
  for( var i=0;i<y-1;i++){
    x=smallestno.peek();
    if(x<smallest)
    smallest=x
    smallestno.pop()
  }
 document.write("the smallest number from stack is " + smallest)

//----------------------------------------------------------------------





