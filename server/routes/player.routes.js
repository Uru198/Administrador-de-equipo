const PlayerControllers = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players", PlayerControllers.get_all);
    app.post("/api/players", PlayerControllers.create_player);
    app.get("/api/players/:id", PlayerControllers.get_player);
    app.put("/api/players/:id", PlayerControllers.update_player);
    app.delete("/api/players/:id", PlayerControllers.delete_player);
}
