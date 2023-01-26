sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-Login-Page.controller.View1", {
		
		onBtnClick : function(){
			var oUser = this.getView().byId("user").getValue();
			var oPwd = this.getView().byId("pwd").getValue();
			
			if(oUser==="admin" && oPwd==="admin"){
				document.write("Login Successfully");
			}else{
				alert("Re-Enter your Detail");
			}
			
			
		}

	});
});