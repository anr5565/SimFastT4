function addCharacter(character) {
    const textField = document.getElementById("keyboardtextfield");
    textField.value += character;
  }

  function deleteCharacter() {
    const textField = document.getElementById("keyboardtextfield");
    textField.value = textField.value.slice(0, -1);
  }

  function displayflightstrip(){

  const textField = document.getElementById("callsigntext");
  const ticketid = document.getElementById("ticketid");
  const type = document.getElementById("type");
  const fixpair = document.getElementById("fixpair");
  const sp1 = document.getElementById("sp1");
  const sp2 = document.getElementById("sp2");
  const pos = document.getElementById("pos");
  const ad = document.getElementById("ad");
  const time = document.getElementById("time");
  const etg= document.getElementById("etg");

  textField.value = "";
  ticketid.value = "";
  type.value = "";
  fixpair.value = "";
  sp1.value = "";
  sp2.value = "";
  pos.value = "";
  ad.value = "";
  time.value = "";
  etg.value = "";

  textField.value += "AAL4401";
  ticketid.value += "001";
  type.value += "B350";
  fixpair.value += "RBV.VCN";
  sp1.value += "VCN";
  sp2.value += "";
  pos.value += "1V";
  ad.value += "E";
  time.value += "00:02:32";
  etg.value += "A090H195";
  }

//

  function displayflightstrip2(){

    const textField2 = document.getElementById("callsigntext");
    const ticketid2 = document.getElementById("ticketid");
    const type2 = document.getElementById("type");
    const fixpair2 = document.getElementById("fixpair");
    const sp12 = document.getElementById("sp1");
    const sp22 = document.getElementById("sp2");
    const pos2 = document.getElementById("pos");
    const ad2 = document.getElementById("ad");
    const time2 = document.getElementById("time");
    const etg2 = document.getElementById("etg");
  
    textField2.value += "DAL5689";
    ticketid2.value += "002";
    type2.value += "A320";
    fixpair2.value += "ORD.PHL";
    sp12.value += "PHL";
    sp22.value += "";
    pos2.value += "1V";
    ad2.value += "A";
    time2.value += "00:02:32";
    etg2.value += "A090H195";

  }
//

  function displayflightstrip3(){
    
  }
//

  function displayflightstrip4(){
    
  }
//

  function displayflightstrip5(){
    
  }

  //
  function displayflightstrip6(){
    
  }
//

  function displayflightstrip7(){
    
  }
//

  function displayflightstrip8(){
    
  }
//

  function displayflightstrip9(){
    
  }
//

  function displayflightstrip10(){
    
  }

//
