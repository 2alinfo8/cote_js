const controller = require("../controllers/demande.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post("/api/demandes/add",[authJwt.verifyToken,authJwt.isUser], controller.addNewDemande);
    app.put("/api/demandes/update",[authJwt.verifyToken,authJwt.isUser], controller.updateDemande);
    app.delete("/api/demandes/delete",[authJwt.verifyToken,authJwt.isUser], controller.deleteDemande);
    app.get("/api/demandes/findAll",[authJwt.verifyToken,authJwt.isUser], controller.findAllDemande);
    app.get("/api/demandes/findAllByLocation", [authJwt.verifyToken,authJwt.isUser],controller.findAllDemandeByLocation);
    app.get("/api/demandes/findAllByType", [authJwt.verifyToken,authJwt.isUser],controller.findAllDemandeByType);
}
