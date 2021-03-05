const controller = require("../controllers/demande.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post("/api/accessoire/add",[authJwt.verifyToken,authJwt.isUser], controller.addAccessoire);
    app.get("/api/accessoire/findAllAccessoire",[authJwt.verifyToken,authJwt.isUser], controller.findAllAccessoire);
    app.put("/api/accessoire/update",[authJwt.verifyToken,authJwt.isUser], controller.updateAccessoire);
    app.delete("/api/accessoire/delete",[authJwt.verifyToken,authJwt.isUser], controller.deleteAccessoire);
    app.get("/api/accessoire/findAllAccessoireByCategorie",[authJwt.verifyToken,authJwt.isUser], controller.findAllAccessoireByCategorie);
}
