const controller = require("../controllers/consultation.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post("/api/consultations/add",[authJwt.verifyToken,authJwt.isUser], controller.addConsultation);
    app.put("/api/consultations/update",[authJwt.verifyToken,authJwt.isUserOrVeto], controller.updateConsultation);
    app.delete("/api/consultations/delete",[authJwt.verifyToken,authJwt.isVeto], controller.deleteConsultation);
    app.get("/api/consultations/findAll",[authJwt.verifyToken,authJwt.isUserOrVeto], controller.findAllConsultation);
    // app.get("/api/consultations/findAllByLocation", [authJwt.verifyToken,authJwt.isUser],controller.findAllDemandeByLocation);
    // app.get("/api/consultations/findAllByType", [authJwt.verifyToken,authJwt.isUser],controller.findAllDemandeByType);
}