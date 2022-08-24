let names = ["John", "Chris", "Harry","Jamal"];

for(let index = 0; index < names.length; index++)
{
    let letter = names[index].charAt(0);
    if(letter === 'J')
    {
    console.log( "hello " + names[index]);


    }
else 
{
     console.log( "ByBy " + names[index]);

}
}