auto();



function auto() {



    let user = localStorage.getItem("user");

    if (user) {

        document.getElementById(localStorage.getItem("Unit")).checked = true;



        if (localStorage.getItem("Unit") == "feetlb") {



        } else {

            document.getElementById("MetricUnits").click();

        }

        document.getElementById("weightLb").value = parseInt(localStorage.getItem("weightLbVal"))

        document.getElementById("heightFeet").value = parseInt(localStorage.getItem("heightFeetval"))

        document.getElementById("weightKg").value = parseInt(localStorage.getItem("weightKgval"))

        document.getElementById("heightCm").value = parseInt(localStorage.getItem("heightCmval"))

        document.getElementById("shoeSize").value = parseFloat(localStorage.getItem("ShoeSize"))

        document.getElementById(localStorage.getItem("gender")).checked = true;

        document.getElementById(localStorage.getItem("level")).checked = true;

        document.getElementById(localStorage.getItem("BoardType")).checked = true;







    } else {

        localStorage.setItem("user", "UserAvailable")



        document.getElementById("feetlb").checked = true;

        document.getElementById("weightLb").value = 120;

        document.getElementById("heightFeet").value = 1;

        document.getElementById("weightKg").value = 52

        document.getElementById("heightCm").value = 152

        document.getElementById("shoeSize").value = 6.5

        document.getElementById("mens").checked = true;

        document.getElementById("beginner").checked = true;

        document.getElementById("AllMountain").checked = true;

    }



    if (localStorage.getItem("ShowPreviousResult")) {

        let btn = document.querySelectorAll(".previous-result");

        for (var i = 0; i < btn.length; i++) {

            btn[i].style.display = "block"

        }



        let div = document.getElementById("ShowResultDiv");

        div.style.display = "block";

    }







    HandleUnitChange();

    SetShoeManOrWomen()

    CalculateSize()

}

const allRanges = document.querySelectorAll(".range-wrap");

allRanges.forEach(wrap => {

    const range = wrap.querySelector(".range");

    const bubble = wrap.querySelector(".bubble");



    range.addEventListener("input", () => {

        setBubble(range, bubble);

    });

    setBubble(range, bubble);

});



function setInputRangeBubble() {

    const allRanges = document.querySelectorAll(".range-wrap");

    allRanges.forEach(wrap => {

        const range = wrap.querySelector(".range");

        const bubble = wrap.querySelector(".bubble");



        range.addEventListener("input", () => {

            setBubble(range, bubble);

        });

        setBubble(range, bubble);

    });

}



function setBubble(range, bubble) {

    var val = range.value;

    const min = range.min ? range.min : 0;

    const max = range.max ? range.max : 100;

    const newVal = Number(((val - min) * 100) / (max - min));

    let text;

    switch (range.id) {

        case "weightLb":

            if (val == range.max) {



                text = "lb+"

            } else {

                text = "lb"

            }



            break;





        case "weightKg":

            if (val == range.max) {



                text = "Kg+"

            } else {

                text = "Kg"

            }

            break;





        case "heightCm":

            if (val == range.max) {



                text = "cm+"

            } else {

                text = "cm"

            }



            break;



        case "shoeSize":

            if (val >= 11.5) {

                if (val == range.max) {



                    text = "(US)+"

                } else {

                    text = "(US)"

                }

            } else {

                if (val == range.max) {



                    text = " (US)+"

                } else {

                    text = " (US)"

                }

            }





            break;





        case "heightFeet":

            if (val == range.max) {



                text = "+"

            } else {

                text = ""

            }



            let feetDataArr = [`4'10"`, `4'11"`, `5'0"`, `5'1"`, `5'2"`, `5'3"`, `5'4"`, `5'5"`, `5'6"`, `5'7"`, `5'8"`, `5'9"`, `5'10"`, `5'11"`, `6'0"`, `6'1"`, `6'2"`, `6'3"`, `6'4"`]



            val = feetDataArr[range.value]

            break;



        default:

            break;

    }

    bubble.innerHTML = val + text;



    // Sorta magic numbers based on size of the native UI thumb

    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;

}



function modifySlider(v1, v2) {

    if (!v1 || !v2) {

        v1 = 134

        v2 = 144



    }

    $(function () {

        $("#slider-range").slider({

            range: true,

            min: 130,

            max: 170,

            values: [v1, v2],

            slide: function (event, ui) {

                let text = "cm"

                if (ui.values[1] == 170) {

                    text = "cm+"

                }

                $("#amount").val(ui.values[0] + "cm" + " - " + ui.values[1] + text);

                localStorage.setItem("BoardSizeStart", ui.values[0])

                localStorage.setItem("BoardSizeEnd", ui.values[1])



                if (ui.values[0] == 170 && ui.values[1] == 170) {

                    $("#amount").val("170cm+");

                }



            }

        });

        let text = "cm"

        if ($("#slider-range").slider("values", 1) == 170) {

            text = "cm+"

        }





        $("#amount").val($("#slider-range").slider("values", 0) + "cm" +

            " - " + $("#slider-range").slider("values", 1) + text);







        let BoardSizeStart = $("#slider-range").slider("values", 0)

        let BoardSizeEnd = $("#slider-range").slider("values", 1)

        localStorage.setItem("BoardSizeStart", BoardSizeStart)

        localStorage.setItem("BoardSizeEnd", BoardSizeEnd)



        if ($("#slider-range").slider("values", 1) == 170 && $("#slider-range").slider("values", 0) == 170) {

            $("#amount").val("170cm+");



        }



    });

}

function modifySlider1(v1, v2) {

    if (!v1 || !v2) {

        v1 = 235

        v2 = 245



    }

    $(function () {

        $("#slider-range1").slider({

            range: true,

            min: 235,

            max: 260,

            values: [v1, v2],

            slide: function (event, ui) {

                let text = "mm"

                if (ui.values[1] == 260) {

                    text = "mm+"

                }

                $("#amount1").val(ui.values[0] + "mm" + " - " + ui.values[1] + text);

                localStorage.setItem("BoardWidthStart", ui.values[0])

                localStorage.setItem("BoardWidthEnd", ui.values[1])



                if (ui.values[0] == 260 && ui.values[1] == 260) {

                    $("#amount1").val("260mm+");

                }

            }

        });

        let text = "mm"

        if ($("#slider-range1").slider("values", 1) == 260) {

            text = "mm+"

        }

        $("#amount1").val($("#slider-range1").slider("values", 0) + "mm" +

            " - " + $("#slider-range1").slider("values", 1) + text);

        let BoardWidthStart = $("#slider-range1").slider("values", 0)

        let BoardWidthEnd = $("#slider-range1").slider("values", 1)

        localStorage.setItem("BoardWidthStart", BoardWidthStart)

        localStorage.setItem("BoardWidthEnd", BoardWidthEnd)



        if ($("#slider-range1").slider("values", 1) == 260 && $("#slider-range1").slider("values", 0) == 260) {

            $("#amount1").val("260mm+");



        }



    });

}

var Set159 = false;

var UnitChanged = false;

function CalculateSize() {

    let weightLbVal = document.getElementById("weightLb").value;

    let heightFeetval = document.getElementById("heightFeet").value;

    let shoeSizeval = document.getElementById("shoeSize").value;



    let weightKgval = document.getElementById("weightKg").value;

    let heightCmval = document.getElementById("heightCm").value;





    localStorage.setItem("weightLbVal", weightLbVal);

    localStorage.setItem("heightFeetval", heightFeetval);

    localStorage.setItem("weightKgval", weightKgval);

    localStorage.setItem("heightCmval", heightCmval);

    localStorage.setItem("ShoeSize", shoeSizeval)



    UnitChanged = localStorage.getItem("UnitChanged").toString();



    if (UnitChanged == "true") {

        weightLbVal = ConvertKgToLb(weightKgval).toString()

        heightFeetval = ConvertCmToFeet(heightCmval).toString()

    }



    var RangeVal = GetRangeVal(weightLbVal, heightFeetval);

    var shoeVal = GetShoeVal(shoeSizeval);





    modifySlider(RangeVal - 6, RangeVal)

    if (Set159) {

        modifySlider1(shoeVal - 10, 259)

        Set159 = false;

    } else {



        modifySlider1(shoeVal - 10, shoeVal)

    }

    SetShoeManOrWomen()

    let gender = document.querySelector('input[name="Gender"]:checked').value;
    let level = document.querySelector('input[name="level"]:checked').value;
    let BoardType = document.querySelector('input[name="Boardtype"]:checked').value;



}

function FindEvent() {
    let weightLbVal = document.getElementById("weightLb").value;

    let heightFeetval = document.getElementById("heightFeet").value;

    let shoeSizeval = document.getElementById("shoeSize").value;


    let gender = document.querySelector('input[name="Gender"]:checked').value;
    let level = document.querySelector('input[name="level"]:checked').value;
    let BoardType = document.querySelector('input[name="Boardtype"]:checked').value;

    window.parent.postMessage({'label': 'calculator', 'data' :  {
        'value' : 0.01,
        'currency' : 'USD',
        'weight' : weightLbVal,
        'height': heightFeetval,
        'shoeSize' :shoeSizeval,
        'gender':gender,
        'level':level,
        'boardType':BoardType
    }});
}

function GetRangeVal(weightLbVal, heightFeetval) {

    var WeightLbsArr = ["90", "95", "100", "105", "110", "115", "120", "125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "175", "180", "185", "190", "195", "200", "205", "210", "215", "220", "225", "230", "235", "240", "245", "250", "255", "260", "265", "270"]

    var DataArr = []

    switch (heightFeetval) {

        case "0":

            DataArr = ["133", "134", "135", "137", "138", "138", "138", "139", "140", "142", "142", "143", "143", "144", "144", "145", "145", "146", "146", "147", "147", "148", "148", "149", "149", "150", "150", "151", "152", "152", "153", "153", "154", "154", "155", "155", "156"]

            break;

        case "1":

            DataArr = ["135", "136", "137", "138", "139", "140", "140", "140", "141", "143", "144", "144", "145", "145", "146", "146", "147", "147", "148", "148", "149", "149", "150", "150", "151", "151", "152", "152", "153", "153", "154", "154", "155", "155", "156", "156", "157"]

            break;



        case "2":

            DataArr = ["135", "136", "137", "138", "139", "140", "141", "141", "141", "142", "144", "145", "145", "146", "146", "147", "147", "148", "148", "149", "149", "150", "150", "151", "151", "151", "152", "152", "153", "153", "154", "154", "155", "155", "156", "156", "157"]

            break;

        case "3":

            DataArr = ["136", "136", "137", "138", "139", "141", "142", "142", "142", "143", "143", "145", "146", "146", "147", "147", "148", "148", "149", "149", "149", "150", "150", "151", "151", "152", "152", "153", "153", "154", "154", "155", "155", "156", "156", "157", "157"]

            break;

        case "4":

            DataArr = ["138", "139", "140", "141", "142", "143", "144", "145", "145", "145", "146", "147", "148", "149", "149", "150", "150", "151", "151", "151", "152", "152", "153", "153", "154", "154", "155", "155", "156", "156", "156", "157", "157", "158", "158", "159", "159"]

            break;

        case "5":

            DataArr = ["138", "139", "140", "141", "142", "143", "144", "145", "146", "146", "146", "147", "148", "149", "150", "150", "151", "151", "151", "152", "152", "153", "154", "154", "155", "155", "155", "156", "156", "157", "157", "157", "158", "158", "159", "159", "159"]

            break;

        case "6":

            DataArr = ["140", "141", "142", "143", "143", "144", "145", "146", "147", "148", "148", "148", "149", "150", "151", "151", "152", "153", "153", "153", "154", "154", "155", "155", "156", "156", "156", "157", "157", "158", "158", "159", "159", "159", "160", "160", "161"]

            break;

        case "7":

            DataArr = ["140", "141", "142", "143", "144", "145", "145", "146", "148", "148", "149", "149", "149", "150", "151", "152", "153", "153", "153", "154", "154", "155", "155", "156", "156", "156", "157", "157", "158", "158", "158", "159", "159", "160", "160", "161", "161"]

            break;

        case "8":

            DataArr = ["143", "144", "145", "145", "146", "147", "148", "149", "149", "151", "151", "152", "152", "152", "153", "154", "155", "156", "156", "156", "157", "157", "158", "158", "158", "159", "159", "160", "160", "160", "161", "161", "162", "162", "162", "163", "163"]

            break;

        case "9":

            DataArr = ["144", "144", "145", "146", "147", "148", "148", "149", "150", "151", "152", "153", "153", "153", "153", "154", "155", "156", "157", "157", "157", "158", "158", "159", "159", "159", "160", "160", "161", "161", "161", "162", "162", "162", "163", "163", "164"]

            break;

        case "10":

            DataArr = ["145", "146", "147", "147", "148", "149", "150", "151", "151", "152", "153", "154", "155", "155", "155", "155", "156", "157", "158", "159", "159", "159", "160", "160", "160", "161", "161", "162", "162", "162", "163", "163", "164", "164", "164", "165", "165"]

            break;

        case "11":

            DataArr = ["146", "147", "147", "148", "149", "149", "150", "151", "152", "152", "153", "154", "155", "156", "156", "156", "156", "157", "158", "159", "160", "160", "160", "161", "161", "161", "162", "162", "162", "163", "163", "164", "164", "164", "165", "165", "165"]

            break;

        case "12":

            DataArr = ["147", "148", "149", "150", "150", "151", "152", "152", "153", "154", "155", "155", "156", "157", "158", "158", "158", "158", "159", "160", "161", "162", "162", "162", "163", "163", "163", "164", "164", "164", "165", "165", "165", "166", "166", "167", "167"]

            break;

        case "13":

            DataArr = ["148", "149", "149", "150", "151", "152", "152", "153", "154", "154", "155", "156", "156", "157", "158", "159", "159", "159", "159", "160", "161", "162", "163", "163", "163", "163", "164", "164", "165", "165", "165", "166", "166", "166", "167", "167", "167"]

            break;

        case "14":

            DataArr = ["149", "149", "150", "151", "151", "152", "153", "153", "154", "155", "155", "156", "157", "158", "159", "159", "160", "160", "160", "160", "161", "162", "163", "164", "164", "164", "164", "165", "165", "165", "166", "166", "166", "167", "167", "167", "168"]

            break;

        case "15":

            DataArr = ["148", "149", "150", "150", "151", "152", "152", "153", "154", "154", "155", "156", "156", "157", "159", "160", "160", "161", "161", "161", "161", "162", "163", "164", "165", "165", "165", "165", "166", "166", "166", "167", "167", "167", "168", "168", "168"]

            break;

        case "16":

            DataArr = ["149", "150", "150", "151", "152", "152", "153", "154", "154", "155", "155", "156", "157", "157", "158", "160", "161", "161", "162", "162", "162", "162", "163", "164", "164", "166", "166", "166", "166", "167", "167", "167", "168", "168", "168", "169", "169"]

            break;

        case "17":

            DataArr = ["150", "150", "151", "152", "152", "153", "153", "154", "155", "155", "156", "157", "157", "158", "158", "159", "161", "162", "162", "163", "163", "163", "163", "164", "164", "165", "166", "168", "168", "168", "168", "169", "169", "169", "170", "170", "170"]

            break;

        case "18":

            DataArr = ["150", "151", "152", "152", "153", "153", "154", "155", "155", "156", "157", "157", "158", "158", "159", "160", "160", "162", "163", "163", "164", "164", "164", "164", "165", "165", "166", "167", "169", "169", "169", "169", "170", "170", "170", "171", "171"]

            break;



        default:

            break;

    }

    let gender = document.querySelector('input[name="Gender"]:checked').value;

    localStorage.setItem("gender", gender)

    gender = localStorage.getItem("gender")

    if (gender == "womens") {

        DataArr = DataArr.map(function (element) {

            let parseEle = parseInt(element) - 1;

            return parseEle;

        })

    } else { }

    // levels

    let level = document.querySelector('input[name="level"]:checked').value;

    localStorage.setItem("level", level)

    level = localStorage.getItem("level")



    switch (level) {

        case "beginner":



            break;

        case "intermediate":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 1;

                return parseEle;

            })

            break;

        case "advanced":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 2;

                return parseEle;

            })

            break;

        case "expert":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 2;

                return parseEle;

            })

            break;



        default:

            break;

    }



    let BoardType = document.querySelector('input[name="Boardtype"]:checked').value;

    localStorage.setItem("BoardType", BoardType)

    BoardType = localStorage.getItem("BoardType")





    switch (BoardType) {

        case "AllMountain":



            break;

        case "Freestyle":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) - 2;

                return parseEle;

            })

            break;

        case "Freeride":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 2;

                return parseEle;

            })

            break;

        case "PowderBoard":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 2;

                return parseEle;

            })

            break;

        case "Splitboard":

            DataArr = DataArr.map(function (element) {

                let parseEle = parseInt(element) + 2;

                return parseEle;

            })

            break;



        default:

            break;

    }



    let WeightIndex = WeightLbsArr.indexOf(weightLbVal)

    let returnData = DataArr[WeightIndex]

    return returnData

}



function GetShoeVal(shoeSizeval) {

    let gender = document.querySelector('input[name="Gender"]:checked').value;

    var SendVal = 4;



    if (gender == "womens") {

        switch (true) {

            case (4 <= shoeSizeval && shoeSizeval <= 9):

                SendVal = 245;

                break;

            case (9.5 <= shoeSizeval && shoeSizeval <= 11):

                SendVal = 256;

                break;

            case (11.5 <= shoeSizeval && shoeSizeval <= 12.5):

                Set159 = true;

                SendVal = 265;

                break;

            case (13 <= shoeSizeval && shoeSizeval <= 14):

                SendVal = 270;

                break;



            default:

                break;

        }

    } else {

        switch (true) {

            case (4 <= shoeSizeval && shoeSizeval <= 7.5):

                SendVal = 245;

                break;

            case (8 <= shoeSizeval && shoeSizeval <= 10):

                SendVal = 256;

                break;

            case (10.5 <= shoeSizeval && shoeSizeval <= 11.5):



                SendVal = 265;

                break;

            case (12 <= shoeSizeval && shoeSizeval <= 14):

                SendVal = 270;

                break;



            default:

                break;

        }

    }



    return SendVal;



}



function ConvertKgToLb(weightKg) {

    let lb = weightKg * 2.2046226218;

    lb = Math.round(lb);



    var WeightLbsArr = ["90", "95", "100", "105", "110", "115", "120", "125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "175", "180", "185", "190", "195", "200", "205", "210", "215", "220", "225", "230", "235", "240", "245", "250", "255", "260", "265", "270"]



    lb = WeightLbsArr.reduce((a, b) => {

        return Math.abs(b - lb) < Math.abs(a - lb) ? b : a;

    });



    return lb;

}



function ConvertCmToFeet(heightCm) {

    let feet = heightCm / 2.54;

    let quotient = Math.floor(feet / 12)

    let remainder = feet % 12;

    remainder = Math.round(remainder)

    if (remainder == 12 || remainder > 12) {

        remainder = 11;

    }

    feet = `${quotient}'${remainder}"`



    let feetDataArr = [`4'10"`, `4'11"`, `5'0"`, `5'1"`, `5'2"`, `5'3"`, `5'4"`, `5'5"`, `5'6"`, `5'7"`, `5'8"`, `5'9"`, `5'10"`, `5'11"`, `6'0"`, `6'1"`, `6'2"`, `6'3"`, `6'4"`]

    feet = feetDataArr.findIndex(x => x === feet)

    return feet;



}



function HandleUnitChange() {

    let unit = document.querySelector('input[name="Unit"]:checked').value;

    if (unit == "feetlb") {

        document.getElementById("weightLbdiv").style.display = "block"

        document.getElementById("weightKgdiv").style.display = "none"

        document.getElementById("heightFeetdiv").style.display = "block"

        document.getElementById("heightCmdiv").style.display = "none"

        UnitChanged = false;

        localStorage.setItem("UnitChanged", UnitChanged)

        localStorage.setItem("Unit", unit)



    } else {

        document.getElementById("weightLbdiv").style.display = "none"

        document.getElementById("weightKgdiv").style.display = "block"

        document.getElementById("heightFeetdiv").style.display = "none"

        document.getElementById("heightCmdiv").style.display = "block"

        UnitChanged = true;

        localStorage.setItem("UnitChanged", UnitChanged)

        localStorage.setItem("Unit", unit)







    }



}



function GetLinks() {

    let gender = document.querySelector('input[name="Gender"]:checked').value;

    let level = document.querySelector('input[name="level"]:checked').value;

    let width = getMyWidthValue(gender)

    let BoardType = document.querySelector('input[name="Boardtype"]:checked').value;



    let SizeValueIndex = getSizeIndex();

    var linkArr = []

    if (gender == "mens") {

        switch (level) {

            case "beginner":

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]

                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]

                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]

                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fwidth_regular`]

                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fwidth_regular`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fwidth_mid-wide%2Fwidth_ultra-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fwidth_mid-wide%2Fwidth_wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fwidth_ultra-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fwidth_ultra-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fwidth_ultra-wide%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fwidth_narrow%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]

                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]

                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fwidth_narrow%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_142-cm%2Fsize_146-cm%2Fsize_149%2Fability_beginner-intermediate`,`https://www.evo.com/shop/snowboard/snowboards/backcountry/size_152/size_152-cm/size_155/size_156-cm/size_157/size_158/size_159-cm/ability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_162-cm%2Fsize_164w%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_142-cm%2Fsize_146-cm%2Fsize_149%2Fability_beginner-intermediate%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_152%2Fsize_152-cm%2Fsize_155%2Fsize_156-cm%2Fsize_157%2Fsize_158%2Fsize_159-cm%2Fability_beginner-intermediate%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_161%2Fsize_162-cm%2Fability_beginner-intermediate%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_regular`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fability_beginner-intermediate%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }



                break;

            case "intermediate":

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_ultra-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_regular%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_137%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_142%2Fsize_143%2Fsize_145%2Fsize_146%2Fsize_146-cm%2Fsize_147%2Fsize_148%2Fsize_149%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_150-cm%2Fsize_151%2Fsize_152%2Fsize_153%2Fsize_154-cm%2Fsize_155%2Fsize_156%2Fsize_156l%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_159%2Fsize_159l%2Fsize_159w%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_regular`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_137%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fsize_142%2Fsize_143%2Fsize_145%2Fsize_146%2Fsize_146-cm%2Fsize_147%2Fsize_148%2Fsize_149%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_150-cm%2Fsize_151%2Fsize_152%2Fsize_153%2Fsize_154-cm%2Fsize_155%2Fsize_156%2Fsize_156l%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_159%2Fsize_159l%2Fsize_159w%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_regular`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_154%2Fsize_155%2Fsize_156%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_159%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fsize_165%2Fability_intermediate-advanced%2Fwidth_mid-wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_intermediate-advanced%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_152%2Fsize_154%2Fsize_155%2Fsize_156%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_158w%2Fsize_159%2Fability_intermediate-advanced%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_161w%2Fsize_162%2Fsize_162-cm%2Fsize_162w%2Fsize_163%2Fsize_164%2Fsize_164w%2Fsize_165%2Fsize_166-cm%2Fability_intermediate-advanced%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_161%2Fsize_161w%2Fsize_162%2Fsize_162-cm%2Fsize_162w%2Fsize_163%2Fsize_164%2Fsize_164w%2Fsize_165%2Fsize_166-cm%2Fability_intermediate-advanced%2Fwidth_ultra-wide%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }

                break;



            case ("advanced" || "expert"):

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens%2Fsize-r_170-179-cm`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_narrow%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_narrow%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_regular`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_mid-wide%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_150-159-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_160-169-cm%2Fability_advanced-expert%2Fwidth_wide`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens%2Fsize-r_170-179-cm%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_narrow`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_147%2Fsize_148%2Fsize_148-cm%2Fsize_149%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_150%2Fsize_151%2Fsize_152%2Fsize_152-cm%2Fsize_153%2Fsize_154%2Fsize_155%2Fsize_156%2Fsize_156-cm%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_158w%2Fsize_159%2Fsize_159-cm%2Fsize_159w%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_160-cm%2Fsize_161%2Fsize_162%2Fsize_163%2Fsize_163w%2Fsize_164%2Fsize_164-cm%2Fsize_165%2Fsize_167%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_regular`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_148%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_152%2Fsize_154%2Fsize_155%2Fsize_156%2Fsize_157%2Fsize_158%2Fsize_158-cm%2Fsize_158w%2Fsize_159%2Fsize_159w%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_160%2Fsize_160-cm%2Fsize_161%2Fsize_162%2Fsize_163%2Fsize_163mw%2Fsize_163w%2Fsize_164%2Fsize_164-cm%2Fsize_165%2Fsize_167%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_mid-wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_145w-cm%2Fsize_147%2Fability_advanced-expert%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_152%2Fsize_156%2Fsize_157%2Fsize_158w%2Fsize_159w%2Fability_advanced-expert%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fsize_161w%2Fsize_162%2Fsize_162w%2Fsize_163w%2Fsize_165w%2Fsize_167w%2Fability_advanced-expert%2Fwidth_ultra-wide%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens%2Fability_advanced-expert%2Fwidth_ultra-wide%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }

                break;



            default:

                break;

        }

    } else {



        switch (level) {

            case "beginner":

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_beginner-intermediate`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_beginner-intermediate`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm`]

                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_beginner-intermediate`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }



                break;

            case "intermediate":

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_130-139-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_130-139-cm`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_intermediate-advanced`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_intermediate-advanced`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_142%2Fsize_143%2Fsize_145%2Fsize_146%2Fsize_146-cm%2Fsize_147%2Fsize_148%2Fsize_149%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_150-cm%2Fsize_151%2Fsize_152%2Fsize_153%2Fsize_154%2Fsize_154-cm%2Fsize_155%2Fsize_156%2Fsize_158%2Fsize_158-cm%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_161%2Fsize_162%2Fsize_162-cm%2Fsize_163%2Fsize_164%2Fability_intermediate-advanced%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_mid-wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_intermediate-advanced%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }

                break;



            case ("advanced" || "expert"):

                switch (BoardType) {

                    case "AllMountain":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freestyle":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Freeride":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "PowderBoard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_140-149-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_150-159-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fsize-r_160-169-cm%2Fability_advanced-expert`, `https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens%2Fability_advanced-expert`]



                                break;



                            default:

                                break;

                        }

                        break;

                    case "Splitboard":

                        switch (width) {

                            case "Narrow":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_narrow`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_narrow`]



                                break;

                            case "Regular":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_142%2Fsize_143%2Fsize_145%2Fsize_146%2Fsize_146-cm%2Fsize_147%2Fsize_148%2Fsize_148-cm%2Fsize_149%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_150%2Fsize_151%2Fsize_152%2Fsize_152-cm%2Fsize_154%2Fsize_155%2Fsize_156%2Fsize_156-cm%2Fsize_158%2Fsize_159%2Fsize_159-cm%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fsize_160%2Fsize_162%2Fsize_163%2Fsize_163w%2Fsize_164%2Fsize_164-cm%2Fsize_165%2Fability_advanced-expert%2Fwidth_regular`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_regular`]



                                break;

                            case "Mid-wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_mid-wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_mid-wide`]



                                break;

                            case "wide":

                                linkArr = [`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_wide`,`https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens%2Fability_advanced-expert%2Fwidth_wide`]



                                break;



                            default:

                                break;

                        }

                        break;



                    default:

                        break;

                }

                break;



            default:

                break;

        }



    }





    var link = linkArr[SizeValueIndex];

    if (link) {

    } else {

        link = getDeafultLink(gender, BoardType);

    }



    link = link + "&ctc=Snowboardsizecalculator"



    OpenLink(link);







}



function OpenLink(link) {
    window.open(link, "_blank");
    window.parent.postMessage({'label': "conversion", 'link': link});
}



function getDeafultLink(gender, BoardType) {

    var link;

    if (gender == "mens") {

        switch (BoardType) {

            case "AllMountain":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fmens"



                break;

            case "Freestyle":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fmens"



                break;

            case "Freeride":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fmens"



                break;

            case "PowderBoard":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fmens"



                break;

            case "Splitboard":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fmens"



                break;



            default:

                break;

        }

    } else {

        switch (BoardType) {

            case "AllMountain":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fall-mountain%2Fwomens"



                break;

            case "Freestyle":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpark-pipe%2Fwomens"



                break;

            case "Freeride":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Ffreeride%2Fwomens"



                break;

            case "PowderBoard":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fpowder%2Fwomens"



                break;

            case "Splitboard":

                link = "https://www.avantlink.com/click.php?tt=cl&merchant_id=33a96c45-e1ba-48ba-8258-f6d85aa68cfa&website_id=b63ec173-ca6b-44d8-a0a6-1c7265d153f8&url=https%3A%2F%2Fwww.evo.com%2Fshop%2Fsnowboard%2Fsnowboards%2Fbackcountry%2Fwomens"



                break;



            default:

                break;

        }

    }



    return link;

}



function SetShoeManOrWomen() {

    let gender = document.querySelector('input[name="Gender"]:checked').value;

    if (gender == "mens") {



        document.getElementById("shoeMenOrWomen").innerHTML = "Men's Shoe Size"

    } else {

        document.getElementById("shoeMenOrWomen").innerHTML = "Women's Shoe Size"



    }

}



function getMyWidthValue(gender) {

    let StartSize = localStorage.getItem("BoardWidthStart")

    let EndSize = localStorage.getItem("BoardWidthEnd")

    var width;

    if (gender == "mens") {

        switch (true) {

            case (235 <= StartSize && EndSize <= 245):

                width = "Narrow"

                break;

            case (246 <= StartSize && EndSize <= 256):

                width = "Regular"

                break;

            case (260 == StartSize && EndSize == 260):

                width = "wide"

                break;

            case (255 <= StartSize && EndSize <= 260):



                width = "Mid-wide"

                break;



            default:

                width = "all"

                break;

        }

    } else {

        switch (true) {

            case (235 <= StartSize && EndSize <= 245):

                width = "Narrow"

                break;

            case (246 <= StartSize && EndSize <= 256):

                width = "Regular"

                break;

            case (260 == StartSize && EndSize == 260):

                width = "wide"

                break;

            case (255 <= StartSize && EndSize <= 259):



                width = "Mid-wide"

                break;



            default:

                width = "all"

                break;

        }

    }



    return width;

}



function getSizeIndex() {

    let StartSize = parseInt(localStorage.getItem("BoardSizeStart"))

    let EndSize = parseInt(localStorage.getItem("BoardSizeEnd"))



    let MatchingArr = Array.from({ length: EndSize - StartSize - 3 }, (_, index) => index + StartSize);

    let MatchingArr2 = Array.from({ length: EndSize - StartSize - 2 }, (_, index) => index + StartSize + 3);

    let SizeText;



    switch (true) {

        case (MatchingArr.length == 0):



            SizeText = 4

            break;

        case (CheckArrPresent([130, 131, 132, 133, 134, 135, 136, 137, 138, 139], MatchingArr) || CheckArrPresent([130, 131, 132, 133, 134, 135, 136, 137, 138, 139], MatchingArr2)):

            SizeText = 0;

            break;

        case (CheckArrPresent([140, 141, 142, 143, 144, 145, 146, 147, 148, 149], MatchingArr) || CheckArrPresent([140, 141, 142, 143, 144, 145, 146, 147, 148, 149], MatchingArr2)):

            SizeText = 1

            break;

        case (CheckArrPresent([150, 151, 152, 153, 154, 155, 156, 157, 158, 159], MatchingArr) || CheckArrPresent([150, 151, 152, 153, 154, 155, 156, 157, 158, 159], MatchingArr2)):

            SizeText = 2

            break;

        case (CheckArrPresent([160, 161, 162, 163, 164, 165, 166, 167, 168, 169], MatchingArr) || CheckArrPresent([160, 161, 162, 163, 164, 165, 166, 167, 168, 169], MatchingArr2)):



            SizeText = 3

            break;



        default:

            SizeText = "allSize"

            break;

    }



    return SizeText;



}



function CheckArrPresent(parent, child) {

    var isfound;

    if (parent.join("").search(child.join("")) == -1) {

        isfound = false

    } else {

        isfound = true



    }



    return isfound

}



function goto(url) {

    window.location = url;

}



function setHeightandWeightVicaVersa() {

    UnitChanged = localStorage.getItem("UnitChanged").toString();

    if (UnitChanged == "false") {

        let weightLbVal = document.getElementById("weightLb").value;

        let heightFeetval = document.getElementById("heightFeet").value;



        weightLbVal = ConvertLbtoKg(weightLbVal);

        heightFeetval = ConvertFeettoCm(heightFeetval);



        document.getElementById("weightKg").value = weightLbVal

        document.getElementById("heightCm").value = heightFeetval





    } else {

        let weightKgval = document.getElementById("weightKg").value;

        let heightCmval = document.getElementById("heightCm").value;



        let weightLbVal = ConvertKgToLb(weightKgval).toString()

        let heightFeetval = ConvertCmToFeet(heightCmval).toString()



        document.getElementById("weightLb").value = weightLbVal;

        document.getElementById("heightFeet").value = heightFeetval;

    }

    // let min = document.getElementById("heightFeet").min;
    // let max = document.getElementById("heightFeet").max;
    // let val = document.getElementById("heightFeet").value;
    // let percent = ((val - min) / (max - min)) * 100;

    // document.getElementById("heightFeet").style.background = `linear-gradient(to right, rgb(139, 0, 0) ${percent}%, rgb(255, 255, 255) ${percent}%)`;

    // linear-gradient(to right, #8B0000 ${percentage}%, #ffffff ${percentage}%)
    sliders.forEach((slider) => {
        updateSliderBackground(slider.id, slider.min, slider.max);
      });
    setInputRangeBubble()



}

const sliders = [
    { id: "heightFeet", min: 0, max: 18 },
    { id: "heightCm", min: 148, max: 194 },
    { id: "weightLb", min: 90, max: 270 },
    { id: "weightKg", min: 40, max: 120 },
    { id: "shoeSize", min: 4, max: 14 },
  ];

function updateSliderBackground(sliderId, minValue, maxValue) {
    const rangeInput = document.getElementById(sliderId);
    const value = Number(rangeInput.value);
  
    let percentage = ((value - minValue) / (maxValue - minValue)) * 100;
  
    if (value === minValue + 1 || value === minValue + 2) {
      percentage += 1; 
    }
  
    
    rangeInput.style.background = `linear-gradient(to right, #8B0000 ${percentage}%, #ffffff ${percentage}%)`;
  }
  window.onload = function () {
    sliders.forEach((slider) => {
      updateSliderBackground(slider.id, slider.min, slider.max);
      document.getElementById(slider.id).addEventListener("input", function () {
        updateSliderBackground(slider.id, slider.min, slider.max);
      });
    });
  };

  function MetricUnitsFn() {
    // ✅ Same work again here:
    // sliders.forEach((slider) => {
    //   updateSliderBackground(slider.id, slider.min, slider.max);
    // });
    HandleUnitChange();
  }



function ConvertLbtoKg(lb) {

    let kg = lb / 2.20462;

    kg = kg.toFixed(0)

    return kg;

}



function ConvertFeettoCm(feet) {

    let feetDataArr = [`4'10"`, `4'11"`, `5'0"`, `5'1"`, `5'2"`, `5'3"`, `5'4"`, `5'5"`, `5'6"`, `5'7"`, `5'8"`, `5'9"`, `5'10"`, `5'11"`, `6'0"`, `6'1"`, `6'2"`, `6'3"`, `6'4"`]



    let cm = feetDataArr[feet]

    cm = cm.split("'");



    let feetvalue = cm[0];

    let inchValue = cm[1].match(/(\d+)/)[0]



    let cmvalue = (feetvalue * 30.48) + (inchValue * 2.54);



    cmvalue = cmvalue.toFixed(0);

    return cmvalue;

}



function MetricUnitsFn() {

    let checkbox = document.getElementById("MetricUnits");





    if (checkbox.checked) {

        document.getElementById("cmkg").checked = true;



    } else {

        document.getElementById("feetlb").checked = true;





    }

    HandleUnitChange();

}



function ShowPopUp(Id) {

    var content = `<button type="button"  id="close" onclick="ClosePopUp()">&times;</button>

    <h2>Automatic Pop-Up</h2>

    <p>

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio fugiat alias iure qui, commodi minima magni ullam aliquam dignissimos?

    </p>

    <a onclick="ClosePopUp()">Close</a>`



    let btn1 = `<svg type="button"  id="close" onclick="ClosePopUp()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-x-circle-fill" viewBox="0 0 16 16">

    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>

  </svg>`

    let btn2 = `<a onclick="ClosePopUp()">Close</a>`

    switch (Id) {

        case "GenderPopUp":

            content = `

            <h2>Choose Your Gender</h2>

            <div>Women's boards are generally designed for lighter riders with smaller feet. They are often narrower and softer flexing.<br><br> This isn't ideal for some women, who may instead choose to ride a "men's" board. The choice is yours!</div>



                `

            break;

        case "AbilityPopUp":

            content = `<h2>Ability Level</h2>



            <div>Beginner boards are cheaper and more forgiving, but often lack the advanced features of more premium boards.<br><br> <strong>Choose your ability level carefully.</strong></div>



            <div>

                <h5>

                    Beginner

                </h5>

                I just started snowboarding. I can maybe make it down a green slope, but with skidded turns and a few falls.



            </div>



            <div>

                <h5>

                    Intermediate

                </h5>

               I can ride blue runs at reasonable speed. I'm linking turns together pretty smoothly. I'm experimenting in the park.



            </div>



            <div>

                <h5>

                    Advanced

                </h5>

               I am comfortable riding the whole mountain.



            </div>



            <div>

                <h5>

                    Expert

                </h5>

                After years of riding, I have mastered the art of snowboarding.

            </div>`

            break;

        case "BoardTypePopUp":

            content = `<h2>Riding Style</h2>

            <div>

                <h5>

                    All Mountain

                </h5>

                These versatile snowboards are designed to handle the whole mountain. They're the best bet for most riders.

            </div>



            <div>

                <h5>

                    Freestyle 

                </h5>

                Specifically designed for terrain parks and performing tricks.

            </div>



            <div>

                <h5>

                    Freeride 

                </h5>

                Designed with speed in mind. These boards are carving machines, both on and off piste.

            </div>



            <div>

                <h5>

                    Powder Boards

                </h5>

                One for the powder hounds. These boards have optimal float in deep snow, perfect for backcountry terrain.

            </div>



            <div>

                <h5>

                    Splitboards 

                </h5>

                Also designed for the backcountry, however these boards can be split into two. This allows them to be used like skis for the ascent.

            </div>`

            break;

        case "ResultPopUp":

            content = `<h2>Find Your Size</h2>

            <div style="text-align: center;">  <strong> Please enter your height, weight and shoe size.</strong></div><br>

            Our calculator will then reveal your recommended size range.

            <br><br><strong>Happy riding!</strong><br><br>

            `

            break;



        default:

            break;

    }



    document.querySelector(".popup").innerHTML = btn1 + content + btn2;

    OpenPopUp()

}





function OpenPopUp() {

    document.querySelector(".popup").style.display = "block";

}



function ClosePopUp() {

    document.querySelector(".popup").style.display = "none";

}



function ShowPreviousResult() {

    localStorage.setItem("ShowPreviousResult", "Yes");

    let btn = document.querySelectorAll(".previous-result");

    for (var i = 0; i < btn.length; i++) {

        btn[i].style.display = "block"

    }



    let div = document.getElementById("ShowResultDiv");

    div.style.display = "block";

}



setInterval(() => {

    getBodyHeight()

}, 500);



function getBodyHeight() {

    var offsetHeight = document.getElementById('getHeight').offsetHeight;



    sessionStorage.setItem("bodyHeight",offsetHeight)

   

}





const navigateToFormStep = (stepNumber) => {

    /**

     * Hide all form steps.

     */



    document.querySelectorAll(".form-step").forEach((formStepElement) => {

        formStepElement.classList.add("d-none");

    });

    /**

     * Mark all form steps as unfinished.

     */

    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {

        formStepHeader.classList.add("form-stepper-unfinished");

        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");

    });

    /**

     * Show the current form step (as passed to the function).

     */

    document.querySelector("#step-" + stepNumber).classList.remove("d-none");

    /**

     * Select the form step circle (progress bar).

     */

    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');

    /**

     * Mark the current form step as active.

     */

    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");

    formStepCircle.classList.add("form-stepper-active");

    /**

     * Loop through each form step circles.

     * This loop will continue up to the current step number.

     * Example: If the current step is 3,

     * then the loop will perform operations for step 1 and 2.

     */

    for (let index = 0; index < stepNumber; index++) {

        /**

         * Select the form step circle (progress bar).

         */

        const formStepCircle = document.querySelector('li[step="' + index + '"]');

        /**

         * Check if the element exist. If yes, then proceed.

         */

        if (formStepCircle) {

            /**

             * Mark the form step as completed.

             */

            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");

            formStepCircle.classList.add("form-stepper-completed");

        }

    }

};



document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {

    /**

     * Add a click event listener to the button.

     */

    formNavigationBtn.addEventListener("click", () => {

        /**

         * Get the value of the step.

         */

        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));

        /**

         * Call the function to navigate to the target form step.

         * 

         */



        sessionStorage.setItem("pageNo", stepNumber)

        navigateToFormStep(stepNumber);

    });

});