var clicks = 0;

// clicks
function tryk(number) {
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = prettify(clicks);
}
var amount_autoclickers = 0;
var cost_autoclickers = 10;

// buy autoclickers. 
function buy_auto_1() {
    var cost_autoclickers = Math.floor(10 * Math.pow(1.08, amount_autoclickers));
    if (clicks >= cost_autoclickers) {
        amount_autoclickers = amount_autoclickers + 1;
        clicks = clicks - cost_autoclickers;
        document.getElementById("clicks").innerHTML = prettify(clicks);
        document.getElementById("amount_autoclickers").innerHTML = amount_autoclickers;
    }
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autoclickers));
    document.getElementById("cost_autoclickers").innerHTML = nextcost;
}

//auto calls function every 100ms 
window.setInterval(function () {
    tryk(amount_autoclickers / 10);
}, 100);










// Removes decimals
function prettify(input) {
    var output = Math.round(input * 1000000) / 1000000;
	return output;
}

// saves files to storage
function save() {
    var saves = {
        clicks: clicks,
        amount_autoclickers: amount_autoclickers,
        cost_autoclickers: cost_autoclickers
    
    };
    localStorage.setItem("saves", JSON.stringify(saves));
}

// loads files from storage
function load() {
    var savegame = JSON.parse(localStorage.getItem("saves"));
    
    // clicks
    if (typeof savegame.clicks !== "undefined") {
        clicks = savegame.clicks;
    }
    
    // autoclickers
    if (typeof savegame.amount_autoclickers !== "undefined") {
        amount_autoclickers = savegame.amount_autoclickers;
    }
    
    // calculate costs
    var nextcost = Math.floor(10 * Math.pow(1.08, amount_autoclickers));
    document.getElementById("cost_autoclickers").innerHTML = nextcost;
    
    
    // update visuals
    document.getElementById("amount_autoclickers").innerHTML = amount_autoclickers;
    
        
}
// resetter values
function reset() {
    localStorage.removeItem("saves");
    clicks = 0;
    amount_autoclickers = 0;
    
    // updates visuals
    document.getElementById("amount_autoclickers").innerHTML = amount_autoclickers;
    
    document.getElementById("cost_autoclickers").innerHTML = cost_autoclickers;
}

// auto saver
window.setInterval(function () {
    save();
}, 2000);