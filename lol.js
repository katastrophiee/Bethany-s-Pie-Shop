// == compares while excluding type and converts it, 1+1 = "2" returns true
// === copares while NOT excluding the type and will NOT convert, 1+1 = "2" returns false

function test()
{
    if ((1+1) == "2")
    {
        console.log(true);
        return true;
    }
    else
    {
        console.log(false);
        return false;
    }
}