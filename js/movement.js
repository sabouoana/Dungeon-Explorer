let movementLock = false;

document.onkeydown = function (e) {
    if (movementLock === false) {
        switch (e.keyCode) {
            case 37:
                moveLeft();
                break;
            case 38:
                moveUp();
                break;
            case 39:
                moveRight();
                break;
            case 40:
                moveDown();
                break;
        }
    }
};


function moveUp() {
    if ($("#row").text() > 0) {
        movementLock = true;
        decrementRow();
        $("#adventurer").animate({ top: '-=64px' }, 1000, function () {
            movementLock = false;
        });
    }
}

function moveDown() {
    if ($("#row").text() < 5) {
        movementLock = true;
        incrementRow();
        console.log('down');
        $("#adventurer").animate({ top: '+=64px' }, 1000, function () {
            movementLock = false;
        });
    }
}

function moveLeft() {
    if ($("#column").text() > -5) {
        movementLock = true;
        decrementColumn();
        $("#adventurer").animate({ left: '-=64px' }, 1000, function () {
            movementLock = false;
        });
    }
}

function moveRight() {
    if ($("#column").text() < 5) {
        movementLock = true;
        incrementColumn();
        $("#adventurer").animate({ left: '+=64px' }, 1000, function () {
            movementLock = false;
        });
    }
}

function incrementColumn() {
    let x = parseInt($("#column").text());
    $("#column").text(x + 1);
}

function decrementColumn() {
    let x = parseInt($("#column").text());
    $("#column").text(x - 1);
}

function incrementRow() {
    let x = parseInt($("#row").text());
    $("#row").text(x + 1);
}

function decrementRow() {
    let x = parseInt($("#row").text());
    $("#row").text(x - 1);
}
