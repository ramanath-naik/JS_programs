//  Example for closure

function returnfun()
{
    const a = ()=>
    {
        let x=1;
        console.log(x);

        const b = () => 
        {
            // let x=2;
            console.log(x);

            const c = () => 
            {
                // let x=3;
                console.log(x);
            }
            c();
            
        }
        x=111
        b();
        
        
    }
    return a;
    

}
let p = returnfun();
p();