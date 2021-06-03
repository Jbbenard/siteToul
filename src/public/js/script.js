$("#btnMenu").click(function(){
    let d = document.documentElement;
    let w = d.clientWidth;
    let h = d.clientHeight;

    if(w < 992){
        $("#menu").toggle()
    }else{
        $("#menu").style.display = "block"
        $("#menu").style.visibility = "visible"



    }
});