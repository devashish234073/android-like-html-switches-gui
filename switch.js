

function setEventListener(switch_, btn) {
    switch_.addEventListener("click", function() {
        if (switch_.getAttribute("status") === "off") {
            switch_.setAttribute("status", "on");
            btn.style.left = "30px";
            switch_.style.backgroundColor = "lightgreen";
        } else {
            switch_.setAttribute("status", "off");
            btn.style.left = "0px";
            switch_.style.backgroundColor = "rgb(45,45,45)";
        }
    });
}

function setUp() {
    var switches_ = document.querySelectorAll("switch_");
    for (var i = 0; i < switches_.length; i++) {
        var switch_ = switches_[i];
        var btn = document.createElement("btn");
        switch_.appendChild(btn);
        var t = switch_.offsetTop + 5;
        var l = switch_.offsetLeft;
        switch_.style.backgroundColor = "rgb(45,45,45)";
        switch_.style.position = "absolute";
        switch_.style.width = "55px";
        switch_.style.height = "20px";
        switch_.style.display = "block";
        switch_.style.borderRadius = "10px";
        switch_.style.top = t + "px";
        btn.style.backgroundColor = "rgb(205,205,205)";
        btn.style.position = "absolute";
        btn.style.top = "-2px";
        btn.style.width = "25px";
        btn.style.height = "25px";
        btn.style.borderRadius = "12px";
        switch_.setAttribute("status", "off");
        setEventListener(switch_, btn, l);
    }
}

setUp();
