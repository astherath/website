function update()
{
    var x = document.getElementsByClassName("name");
    x[0].innerHTML = "name";
    
    var y = document.getElementsByClassName("desc");
    for (var i = 0; i < y.length; i ++)
        {
            y[i].innerHTML = "desclol";
        }
}