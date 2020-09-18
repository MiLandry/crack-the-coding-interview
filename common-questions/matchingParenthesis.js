//Validate the parenthesis in a string, ensuring each is correctly paired

// assume that () or {} or [] are all valid

// valid
/*
(())
({})
()()zz{}
(()())

*/

// invalid
/*
())
(
({)}


*/


/*
SPOILER, this problem is trivialized by using a stack. Opening parens trigger a push, closing parens trigger a pop.
popping an empty stack means the parens are invalid.
popping a mismatched type means the parents are invalid
reaching the end of the string with elements still on the stack is also invalid

*/

function isParethesisBalanced(str)
{
    const openings =
    {
        '(': true,
        '{': true,
        '[': true,
    }

    const closeToOpening =
    {
        ')' : '(',
        '}' : '{',
        ']' : '[',

    }
    const stack = []


    for (const c of str)
    {
        // console.log('c', c);
        if (openings[c])
        {
            stack.push(c)
        }
        if (closeToOpening[c])
        {
            // console.log('stack', stack);
            if (stack.pop() !== closeToOpening[c])
            {
                return false
            }
        }
    }
    return stack.length === 0

}


console.log('true', isParethesisBalanced('()()zz{}'));
console.log('false', isParethesisBalanced('({)}'));



// valid
/*
(())
({})
()()zz{}
(()())

*/

// invalid
/*
())
(
({)}


*/

//todo set up test scaffold
//todo set up debugger