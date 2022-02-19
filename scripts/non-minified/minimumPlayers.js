function twoPlayers() {
    $(".twoPlayers").addClass("highlighted");
    $(".twoPlayerChoice").addClass("playerPressed");

    $(".threePlayers").removeClass("highlighted");
    $(".fourPlayers").removeClass("highlighted");
    $(".sixPlayers").removeClass("highlighted");
    $(".threePlayerChoice").removeClass("playerPressed");
    $(".fourPlayerChoice").removeClass("playerPressed");
    $(".sixPlayerChoice").removeClass("playerPressed");
}

function threePlayers() {
    $(".threePlayers").addClass("highlighted");
    $(".threePlayerChoice").addClass("playerPressed");

    $(".twoPlayers").removeClass("highlighted");
    $(".fourPlayers").removeClass("highlighted");
    $(".sixPlayers").removeClass("highlighted");
    $(".twoPlayerChoice").removeClass("playerPressed");
    $(".fourPlayerChoice").removeClass("playerPressed");
    $(".sixPlayerChoice").removeClass("playerPressed");
}

function fourPlayers() {
    $(".fourPlayers").addClass("highlighted");
    $(".fourPlayerChoice").addClass("playerPressed");

    $(".twoPlayers").removeClass("highlighted");
    $(".threePlayers").removeClass("highlighted");
    $(".sixPlayers").removeClass("highlighted");
    $(".twoPlayerChoice").removeClass("playerPressed");
    $(".threePlayerChoice").removeClass("playerPressed");
    $(".sixPlayerChoice").removeClass("playerPressed");
}

function sixPlayers() {
    $(".sixPlayers").addClass("highlighted");
    $(".sixPlayerChoice").addClass("playerPressed");

    $(".threePlayers").removeClass("highlighted");
    $(".fourPlayers").removeClass("highlighted");
    $(".twoPlayers").removeClass("highlighted");
    $(".threePlayerChoice").removeClass("playerPressed");
    $(".fourPlayerChoice").removeClass("playerPressed");
    $(".twoPlayerChoice").removeClass("playerPressed");
}