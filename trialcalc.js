
var type;   var typev;   var cpud=[];    var cpup=[];    var cpum=[]; var cpum1=[]; var cpums=[];var cpupop=[];
var memory; var memv;    var memd=[];    var memp=[];    var memm=[]; var memm1=[]; var memms=[];var mempop=[];
var gpu;    var gpuv;    var gpud=[];    var gpup=[];    var gpum=[]; var gpum1=[]; var gpums=[];var gpupop=[];
var disk;   var diskv;   var diskd=[];   var diskp=[];   var diskm=[]; var diskm1=[]; var diskms=[];var diskpop=[];
var drv;    var drvv;    var drvd=[];    var drvp=[];    var drvm=[]; var drvm1=[]; var drvms=[];var drvpop=[];
var os;     var osv;     var osd=[];     var osp=[];     var osm=[]; var osm1=[]; var osms=[];var ospop=[];
var office; var officev; var officed=[]; var officep=[]; var officem=[]; var officem1=[]; var officems=[];var officepop=[];
var job;    var jobv;    var jobd=[];    var jobp=[];    var jobm=[];  var jobm1=[]; var jobms=[];var jobpop=[];
var kbm;    var kbmv;    var kbmd=[];    var kbmp=[];    var kbmm=[];  var kbmm1=[]; var kbmms=[];var kbmpop=[];
var mon1;   var mon1v;   var mon1d=[];   var mon1p=[];   var mon1m=[]; var mon1m1=[]; var mon1ms=[];var mon1pop=[];
var mon2;   var mon2v;   var mon2d=[];   var mon2p=[];   var mon2m=[]; var mon2m1=[]; var mon2ms=[];var mon2pop=[];
var stnd;   var stndv;   var stndd=[];   var stndp=[];   var stndm=[]; var stndm1=[]; var stndms=[];var stndpop=[];
var ups;    var upsv;    var upsd=[];    var upsp=[];    var upsm=[];var upsm1=[]; var upsms=[];var upspop=[];
var mant;   var mantv;   var mantd=[];   var mantp=[];   var mantm=[];var mantm1=[]; var mantms=[];var mantpop=[];
var setup;  var setupv;  var setupd=[];   var setupp=[];   var setupm=[];var setupm1=[]; var setupms=[];var setuppop=[];
var totalment=[];
var recipe;
var core;

var job1,job2;


var pulldown01=1;
var pulldown02=1;
var pulldown03=1;
var pulldown04=1;
var pulldown05=1;
var pulldown06=1;
var pulldown07=1;
var pulldown08=1;
var pulldown09=1;
var pulldown10=1;
var pulldown11=1;
var pulldown12=1;
var pulldown13=1;
var pulldown14=1;
var pulldown15=1;

function $(id)  { return document.getElementById(id); }
function $F(id) { return parseFloat($(id).value); }
function $V(val) { return parseFloat(val); }

window.onload = function(){
    var stdout = document.getElementById("stdout");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "TW.csv", false);
    xmlHttp.send(null);

    var NL = String.fromCharCode(10);
    var lines = xmlHttp.responseText.split(NL);

// CPU
    var cpuoption="<select style=\"width:150px\" name=\"type\" id=\"type\" \
     onchange=\"document.getElementById('pulldown'+pulldown01).style.display='none'\; \
     document.getElementById('price'+pulldown01).style.display='none'\; \
     document.getElementById('pulldown'+(pulldown01=(this.selectedIndex+1))).style.display='block'\;  \
     document.getElementById('price'+(pulldown01=(this.selectedIndex+1))).style.display='block'\;  calcCart()\"\; >";
    var memoption="<select  style=\"width:150px\"  name=\"memory\" id=\"memory\" onchange=\"document.getElementById('mem'+pulldown02).style.display='none'\; \
     document.getElementById('memprice'+pulldown02).style.display='none'\; \
     document.getElementById('mem'+(pulldown02=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('memprice'+(pulldown02=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var gpuoption="<select  style=\"width:150px\" name=\"gpu\" id=\"gpu\" onchange=\"document.getElementById('gpu'+pulldown03).style.display='none'\; \
     document.getElementById('gpuprice'+pulldown03).style.display='none'\; \
     document.getElementById('gpu'+(pulldown03=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('gpuprice'+(pulldown03=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var diskoption="<select  style=\"width:150px\" name=\"disk\" id=\"disk\" onchange=\"document.getElementById('disk'+pulldown04).style.display='none'\; \
     document.getElementById('diskprice'+pulldown04).style.display='none'\; \
     document.getElementById('disk'+(pulldown04=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('diskprice'+(pulldown04=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var drvoption="<select  style=\"width:150px\" name=\"drv\" id=\"drv\" onchange=\"document.getElementById('drv'+pulldown05).style.display='none'\; \
     document.getElementById('drvprice'+pulldown05).style.display='none'\; \
     document.getElementById('drv'+(pulldown05=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('drvprice'+(pulldown05=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var osoption="<select style=\"width:150px\"  name=\"os\" id=\"os\" onchange=\"document.getElementById('os'+pulldown06).style.display='none'\; \
     document.getElementById('osprice'+pulldown06).style.display='none'\; \
     document.getElementById('os'+(pulldown06=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('osprice'+(pulldown06=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var officeoption="<select style=\"width:150px\"  name=\"office\" id=\"office\" onchange=\"document.getElementById('office'+pulldown07).style.display='none'\; \
     document.getElementById('officeprice'+pulldown07).style.display='none'\; \
     document.getElementById('office'+(pulldown07=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('officeprice'+(pulldown07=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var joboption="<select style=\"width:150px\"  name=\"job\" id=\"job\"  onchange=\"\
     document.getElementById('job'+pulldown08).style.display='none'\; \
     document.getElementById('jobd'+pulldown08).style.display='none'\; \
     document.getElementById('jobprice'+pulldown08).style.display='none'\; \
     document.getElementById('job'+(pulldown08=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('jobd'+(pulldown08=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('jobprice'+(pulldown08=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var kbmoption="<select style=\"width:150px\"  name=\"kbm\" id=\"kbm\" onchange=\"document.getElementById('kbm'+pulldown09).style.display='none'\; \
     document.getElementById('kbmprice'+pulldown09).style.display='none'\; \
     document.getElementById('kbm'+(pulldown09=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('kbmprice'+(pulldown09=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var mon1option="<select style=\"width:150px\"  name=\"mon1\" id=\"mon1\" onchange=\"document.getElementById('mon1'+pulldown10).style.display='none'\; \
     document.getElementById('mon1price'+pulldown10).style.display='none'\; \
     document.getElementById('mon1'+(pulldown10=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('mon1price'+(pulldown10=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var mon2option="<select style=\"width:150px\"  name=\"mon2\" id=\"mon2\" onchange=\"document.getElementById('mon2'+pulldown11).style.display='none'\; \
     document.getElementById('mon2price'+pulldown11).style.display='none'\; \
     document.getElementById('mon2'+(pulldown11=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('mon2price'+(pulldown11=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var stndoption="<select style=\"width:150px\"  name=\"stnd\" id=\"stnd\" onchange=\"document.getElementById('stnd'+pulldown12).style.display='none'\; \
     document.getElementById('stndprice'+pulldown12).style.display='none'\; \
     document.getElementById('stnd'+(pulldown12=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('stndprice'+(pulldown12=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var upsoption="<select style=\"width:150px\"  name=\"ups\" id=\"ups\" onchange=\"document.getElementById('ups'+pulldown13).style.display='none'\; \
     document.getElementById('upsprice'+pulldown13).style.display='none'\; \
     document.getElementById('ups'+(pulldown13=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('upsprice'+(pulldown13=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var mantoption="<select style=\"width:150px\"  name=\"mant\" id=\"mant\" onchange=\"document.getElementById('mant'+pulldown14).style.display='none'\; \
     document.getElementById('mantprice'+pulldown14).style.display='none'\; \
     document.getElementById('mant'+(pulldown14=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('mantprice'+(pulldown14=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";
    var setupoption="<select style=\"width:150px\"  name=\"setup\" id=\"setup\" onchange=\"document.getElementById('setup'+pulldown15).style.display='none'\; \
     document.getElementById('setupprice'+pulldown15).style.display='none'\; \
     document.getElementById('setup'+(pulldown15=(this.selectedIndex+1))).style.display='block'\; \
     document.getElementById('setupprice'+(pulldown15=(this.selectedIndex+1))).style.display='block'\; calcCart()\"\;>";

    for (var n = 1; n < lines.length; n++) {
        var cols = lines[n].split(",");
        var ii=cols[1]
        if(cols[0]=="CPU"){
            cpud[ii]=cols[3];
            $("cpudescription["+ii+"]").innerHTML=cols[3];
            cpup[ii]=cols[4];
            $("cpuprice["+ii+"]").innerHTML=insertComma(cols[4]);
            cpum[ii]=cols[5];
            if( ii == 0 ){
                cpuoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                cpuoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            cpum1[ii]=cols[6];
            cpums[ii]=cols[7];
            cpupop[ii]=cols[8];
        }else
        if(cols[0]=="MEM"){
            memd[ii]=cols[3];
            $("memdescription["+ii+"]").innerHTML=cols[3];
            memp[ii]=cols[4];
            $("memprice["+ii+"]").innerHTML=insertComma(cols[4]);
            memm[ii]=cols[5];
            $("memmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                memoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                memoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            memm1[ii]=cols[6];
            memms[ii]=cols[7];
            mempop[ii]=cols[8];
        }else
        if(cols[0]=="GPU"){
            gpud[ii]=cols[3];
            $("gpudescription["+ii+"]").innerHTML=cols[3];
            gpup[ii]=cols[4];
            $("gpuprice["+ii+"]").innerHTML=insertComma(cols[4]);
            gpum[ii]=cols[5];
            $("gpumaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                gpuoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                gpuoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            gpum1[ii]=cols[6];
            gpums[ii]=cols[7];
            gpupop[ii]=cols[8];
        }else
        if(cols[0]=="DISK"){
            diskd[ii]=cols[3];
            $("diskdescription["+ii+"]").innerHTML=cols[3];
            diskp[ii]=cols[4];
            $("diskprice["+ii+"]").innerHTML=insertComma(cols[4]);
            diskm[ii]=cols[5];
            $("diskmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                diskoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                diskoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            diskm1[ii]=cols[6];
            diskms[ii]=cols[7];
            diskpop[ii]=cols[8];

        }else
        if(cols[0]=="DRV"){
            drvd[ii]=cols[3];
            $("drvdescription["+ii+"]").innerHTML=cols[3];
            drvp[ii]=cols[4];
            $("drvprice["+ii+"]").innerHTML=insertComma(cols[4]);
            drvm[ii]=cols[5];
            $("drvmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                drvoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                drvoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            drvm1[ii]=cols[6];
            drvms[ii]=cols[7];
            drvpop[ii]=cols[8];
        }else
        if(cols[0]=="OS"){
            osd[ii]=cols[3];
            $("osdescription["+ii+"]").innerHTML=cols[3];
            osp[ii]=cols[4];
            $("osprice["+ii+"]").innerHTML=insertComma(cols[4]);
            osm[ii]=cols[5];
            $("osmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                osoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                osoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            osm1[ii]=cols[6];
            osms[ii]=cols[7];
            ospop[ii]=cols[8];
        }else
        //
        if(cols[0]=="OFFICE"){
            officed[ii]=cols[3];
            $("officedescription["+ii+"]").innerHTML=cols[3];
            officep[ii]=cols[4];
            $("officeprice["+ii+"]").innerHTML=insertComma(cols[4]);
            officem[ii]=cols[5];
            $("officemaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                officeoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                officeoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            officem1[ii]=cols[6];
            officems[ii]=cols[7];
            officepop[ii]=cols[8];
        }else
        if(cols[0]=="JOB"){
            jobd[ii]=cols[3];
            $("jobdescription["+ii+"]").innerHTML=cols[3];
            jobp[ii]=cols[4];
            $("jobprice["+ii+"]").innerHTML=insertComma(cols[4])+"×コア数";
            jobm[ii]=cols[5];
            $("jobmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                joboption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                joboption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            jobm1[ii]=cols[6];
            jobms[ii]=cols[7];
            jobpop[ii]=cols[8];
        }else
        if(cols[0]=="KBM"){
            kbmd[ii]=cols[3];
            $("kbmdescription["+ii+"]").innerHTML=cols[3];
            kbmp[ii]=cols[4];
            $("kbmprice["+ii+"]").innerHTML=insertComma(cols[4]);
            kbmm[ii]=cols[5];
            $("kbmmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                kbmoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                kbmoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            kbmm1[ii]=cols[6];
            kbmms[ii]=cols[7];
            kbmpop[ii]=cols[8];
        }else
        if(cols[0]=="MON1"){
            mon1d[ii]=cols[3];
            $("mon1description["+ii+"]").innerHTML=cols[3];
            mon1p[ii]=cols[4];
            $("mon1price["+ii+"]").innerHTML=insertComma(cols[4]);
            mon1m[ii]=cols[5];
            $("mon1maint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                mon1option+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                mon1option+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            mon1m1[ii]=cols[6];
            mon1ms[ii]=cols[7];
            mon1pop[ii]=cols[8];
        }else
        if(cols[0]=="MON2"){
            mon2d[ii]=cols[3];
            $("mon2description["+ii+"]").innerHTML=cols[3];
            mon2p[ii]=cols[4];
            $("mon2price["+ii+"]").innerHTML=insertComma(cols[4]);
            mon2m[ii]=cols[5];
            $("mon2maint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                mon2option+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                mon2option+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            mon2m1[ii]=cols[6];
            mon2ms[ii]=cols[7];
            mon2pop[ii]=cols[8];
        }else
        if(cols[0]=="STND"){
            stndd[ii]=cols[3];
            $("stnddescription["+ii+"]").innerHTML=cols[3];
            stndp[ii]=cols[4];
            $("stndprice["+ii+"]").innerHTML=insertComma(cols[4]);
            stndm[ii]=cols[5];
            $("stndmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                stndoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                stndoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            stndm1[ii]=cols[6];
            stndms[ii]=cols[7];
            stndpop[ii]=cols[8];
        }else
        if(cols[0]=="UPS"){
            upsd[ii]=cols[3];
            $("upsdescription["+ii+"]").innerHTML=cols[3];
            upsp[ii]=cols[4];
            $("upsprice["+ii+"]").innerHTML=insertComma(cols[4]);
            upsm[ii]=cols[5];
            $("upsmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                upsoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                upsoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            upsm1[ii]=cols[6];
            upsms[ii]=cols[7];
            upspop[ii]=cols[8];
        }else
        if(cols[0]=="MANT"){
            mantd[ii]=cols[3];
            $("mantdescription["+ii+"]").innerHTML=cols[3];
            mantp[ii]=cols[4];
            $("mantprice["+ii+"]").innerHTML=insertComma(cols[4]);
            mantm[ii]=cols[5];
            $("mantmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                mantoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                mantoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            mantm1[ii]=cols[6];
            mantms[ii]=cols[7];
            mantpop[ii]=cols[8];
        }else
        if(cols[0]=="SETUP"){
            setupd[ii]=cols[3];
            $("setupdescription["+ii+"]").innerHTML=cols[3];
            setupp[ii]=cols[4];
            $("setupprice["+ii+"]").innerHTML=insertComma(cols[4]);
            setupm[ii]=cols[5];
            $("setupmaint["+ii+"]").innerHTML=cols[5];
            if( ii == 0 ){
                setupoption+="<OPTION VALUE="+cols[1]+" selected>"+cols[2]+"</OPTION>";
            }else{
                setupoption+="<OPTION VALUE="+cols[1]+">"+cols[2]+"</OPTION>";
            }
            setupm1[ii]=cols[6];
            setupms[ii]=cols[7];
            setuppop[ii]=cols[8];
        }
    }
    cpuoption+="</select>";
    memoption+="</select>";
    gpuoption+="</select>";
    diskoption+="</select>";
    drvoption+="</select>";
    osoption+="</select>";
    officeoption+="</select>";
    joboption+="</select>";
    kbmoption+="</select>";
    mon1option+="</select>";
    mon2option+="</select>";
    stndoption+="</select>";
    upsoption+="</select>";
    mantoption+="</select>";
    setupoption+="</select>";
    $("cpuoptionT").innerText+=cpuoption;

    $("cpuoption").innerHTML+=cpuoption;
    $("memoption").innerHTML+=memoption;
    $("gpuoption").innerHTML+=gpuoption;
    $("diskoption").innerHTML+=diskoption;
    $("drvoption").innerHTML+=drvoption;
    $("osoption").innerHTML+=osoption;
    $("officeoption").innerHTML+=officeoption;
    $("joboption").innerHTML+=joboption;
    $("kbmoption").innerHTML+=kbmoption;
    $("mon1option").innerHTML+=mon1option;
    $("mon2option").innerHTML+=mon2option;
    $("stndoption").innerHTML+=stndoption;
    $("upsoption").innerHTML+=upsoption;
    $("mantoption").innerHTML+=mantoption;
    $("setupoption").innerHTML+=setupoption;

calcCart();
}

function calcCart() {
//    alert(typev);
    typev   = $F("type");
    memv    = $F("memory");
    gpuv    = $F("gpu");
    diskv   = $F("disk");
    drvv    = $F("drv");   
    osv     = $F("os");    
    officev = $F("office");
    jobv    = $F("job");   
    kbmv    = $F("kbm");   
    mon1v   = $F("mon1");  
    mon2v   = $F("mon2");  
    stndv   = $F("stnd");  
    upsv    = $F("ups");   
    mantv   = $F("mant");  
    setupv   = $F("setup");  


var num;
var year;
//    num = $F("num");

     num = document.getElementById("num").value;
//     num = parseFloat(vnum).value; 
//    alert("vnum"+vnum);
//     num = parseFloat(vnum); 
//     num = vnum;
//function $F(id) { return parseFloat($(id).value); }
    if ( typev == 0 ){
       core=4;
    }else{
       core=6;
    }
    $("core").innerHTML = core;

    year = $F("year");
    switch ( mantv ){
    case 0:
    // センドバック
    //alert("sendback"+year);
    totalment = ( $V(cpums[typev]) + $V(memms[memv])+ $V(gpums[gpuv])+ $V(diskms[diskv])+ $V(drvms[drvv])+ $V(osms[osv])+
    $V(officems[officev])+ ( $V(jobms[jobv]) *core )+ $V(kbmms[kbmv])+ $V(mon1ms[mon1v])+ $V(mon2ms[mon2v])+ $V(stndms[stndv])+
    $V(upsms[upsv])+ $V(mantms[mantv])) *year;
    setupprice = ($V(setupms[setupv]));
    break;
    case 1:
    // 翌日
    //alert("翌日"+year);
    totalment = ( $V(cpum1[typev]) + $V(memm1[memv])+ $V(gpum1[gpuv])+ $V(diskm1[diskv])+ $V(drvm1[drvv])+ $V(osm1[osv])+
    $V(officem1[officev])+ ( $V(jobm1[jobv]) *core )+ $V(kbmm1[kbmv])+ $V(mon1m1[mon1v])+ $V(mon2m1[mon2v])+ $V(stndm1[stndv])+
    $V(upsm1[upsv])+ $V(mantm1[mantv])) *year;
    setupprice = ($V(setupm1[setupv]));
    break;
    default:
    // 当日
        totalment = ( $V(cpum[typev]) + $V(memm[memv])+ $V(gpum[gpuv])+ $V(diskm[diskv])+ $V(drvm[drvv])+ $V(osm[osv])+
    $V(officem[officev])+ ( $V(jobm[jobv]) *core )+ $V(kbmm[kbmv])+ $V(mon1m[mon1v])+ $V(mon2m[mon2v])+ $V(stndm[stndv])+
    $V(upsm[upsv])+ $V(mantm[mantv])) *year;
    setupprice = ($V(setupm[setupv]));
    break;
    }
      
//    var total = ( typev + memv + gpuv) * num;
    var hard = ( $V(cpup[typev]) + $V(memp[memv])+ $V(gpup[gpuv])+ $V(diskp[diskv])+ $V(drvp[drvv])+ $V(osp[osv])+
    $V(officep[officev])+ ( $V(jobp[jobv]) *core )+ $V(kbmp[kbmv])+ $V(mon1p[mon1v])+ $V(mon2p[mon2v])+ $V(stndp[stndv])+
    $V(upsp[upsv])+ $V(mantp[mantv])) * num;
//    alert("hard="+hard+" mentenance="+totalment+" setup"+setupprice);
    var total = hard + totalment + setupprice;


    recipe="\n"+
    "TYPE,   "+cpud[typev]+", \\"+cpup[typev]+"\n"+
    "MEM,    "+memd[memv]+", \\"+memp[memv]+"\n"+
    "GPU,    "+gpud[gpuv]+", \\"+gpup[gpuv]+"\n"+
    "DISK,   "+diskd[diskv]+", \\"+diskp[diskv]+"\n"+
    "DRIVE,  "+drvd[drvv]+", \\"+drvp[drvv]+"\n"+
    "OS,     "+osd[osv]+", \\"+osp[osv]+"\n"+
    "OFFICE, "+officed[officev]+", \\"+officep[officev]+"\n"+
    "KB/MOU, "+kbmd[kbmv]+", \\"+kbmp[kbmv]+"\n"+
    "JOB,    "+jobd[jobv]+", \\"+jobp[jobv]+"\n"+
    "MON1,   "+mon1d[mon1v]+", \\"+mon1p[mon1v]+"\n"+
    "MON2,   "+mon2d[mon2v]+", \\"+mon2p[mon2v]+"\n"+
    "STAND,  "+stndd[stndv]+", \\"+stndp[stndv]+"\n"+
    "MAINT,  "+mantd[mantv]+", \\"+mantp[mantv]+"\n"+
    "SETUP,  "+setupd[setupv]+", \\"+setupp[setupv]+"\n"+
    "total,  \\"+total;
//    alert(recipe);
    $("recipe").value = recipe;
//    $("recipe").innerHTML = recipe;

//    alert("num="+num+" total="+total);
//    alert ( cpup[typev] +" "+ memp[memv]+" "+ gpup[gpuv]+" "+ diskp[diskv]+" "+ drvp[drvv]+" "+ osp[osv]+" "+
//    officep[officev]+" "+ jobp[jobv]+" "+ kbmp[kbmv]+" "+ mon1p[mon1v]+" "+ mon2p[mon2v]+" "+ stndp[stndv]+" "+ upsp[upsv]+" "+ mantp[mantv] + " "+num );

//    $("total").value = insertComma(total);
    $("total").innerHTML = insertComma(total);
    $("totalmentn").innerHTML = insertComma(totalment*num);
    $("totalment[0]").innerHTML = insertComma(totalment);
    $("totalment[1]").innerHTML = insertComma(totalment);
    $("totalment[2]").innerHTML = insertComma(totalment);
    $("setupprice[0]").innerHTML = insertComma(setupprice);
    $("setupprice[1]").innerHTML = insertComma(setupprice);


//    alert(cpupop[typev]);
    $("cpupop").innerHTML=cpupop[typev];
    $("mempop").innerHTML=mempop[memv];
    $("gpupop").innerHTML=gpupop[gpuv];
    $("diskpop").innerHTML=diskpop[diskv];
    $("drvpop").innerHTML=drvpop[drvv];
    $("ospop").innerHTML=ospop[osv];
    $("officepop").innerHTML=officepop[officev];
    $("jobpop").innerHTML=jobpop[jobv];
    $("kbmpop").innerHTML=kbmpop[kbmv];
    $("mon1pop").innerHTML=mon1pop[mon1v];
    $("mon2pop").innerHTML=mon2pop[mon2v];
    $("stndpop").innerHTML=stndpop[stndv];
    $("upspop").innerHTML=upspop[upsv];
    $("mantpop").innerHTML=mantpop[mantv];
    $("setuppop").innerHTML=setuppop[setupv];

}
  function insertComma(v) {
    v = "" + Math.floor(v);
    return v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

var displayWidth=screen.width;
var displayHeight=screen.height;

function typedescription(){
    var winWidth=displayWidth/4;
    var winHeight=displayHeight/4;
    var winLeft=displayWidth/4;
    var winTop=displayHeight/4;
    var optionString="toolbar=no,location=no, status=no, menubar=no,scrollbars=no,tilebar=no,directories=no,";
    optionString+="width="+winWidth+",height="+winHeight+",left="+winLeft+",top="+winTop;
    var win1=window.open('type_description.html','newwin1', optionString);
    }

function mailaddress(){
    alert('mailaddress='+memory);
    var winWidth=displayWidth/4;
    var winHeight=displayHeight/4;
    var winLeft=displayWidth/4;
    var winTop=displayHeight/4;
    var optionString="toolbar=no,location=no, status=no, menubar=no,scrollbars=no,";
    optionString+="width="+winWidth+",height="+winHeight+",left="+winLeft+",top="+winTop;
    var win1=window.open('mailaddress.html','newwin1', optionString);
    }
function mailrecipe(){
    alert('mailrecipe='+memv);

    //var cpu = $F("pulldown01");
//    alert("type="+type+"mem="+memory);
    var recipe="type"+type+"mem"+memory;  
    $("recipe").innerHTML=recipe;
    alert(recipe);
}

//function $F(id) { return parseFloat($(id).value); }
