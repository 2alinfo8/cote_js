const controller = require("../controllers/perdus.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    
    app.post("/api/perdus/add",[authJwt.verifyToken], controller.addPerdus);
    app.post("/api/perdus/update",[authJwt.verifyToken], controller.updatePerdus);
    app.post("/api/perdus/delete",[authJwt.verifyToken], controller.deletePerdus);
    app.post("/api/perdus/findAllPerdus",[authJwt.verifyToken], controller.findAllPerdus);
    app.post("/api/perdus/findAllPerdusByRegion",[authJwt.verifyToken], controller.findAllPerdusByRegion);

    
}
