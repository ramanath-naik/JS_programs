// Javascript closure

function init()
{
    message="Hello, How are you?" //message is local variable created by init()

    function display()  //display is the inner function
    {
        console.log(message)  //using a variable from parent function
    }
    return display;  //returning the inner function to the outer function
}

const c = init();
c();