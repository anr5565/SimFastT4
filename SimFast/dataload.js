function FlightData() {
    var flight1 = document.getElementById("flight1");
    var data = {
        "TIC":"001",
        "Callsign":"AAL4401",
        "Type":"A320",
        "Fix Pair":"SFO.PHL",
        "SP1":"PHL",
        "SP2":"",
        "POS":"1V",
        "HO":"",
        "A/D":"A",
        "Time":"00:00:00",
        "IFR":"IFR",
        "ETG Instruction":"A090H195",
        "Time(Sec)":"000"
    };

    var jsonData = JSON.stringify(data);
    console.log(jsonData);
  }