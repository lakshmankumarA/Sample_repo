   
context.setVariable("orderStatus", context.getVariable("ServiceCallout.response"));

var errorFlag ="false";
if (!context.getVariable("ServiceCallout.response"))
{
context.setVariable("errorFlag", "true");

}



var requestContent = context.getVariable("ServiceCallout.response");
var ptsRespObject= JSON.parse(requestContent);
var ptsCodeId;
ptsCodeId = ptsRespObject.codeId;
context.setVariable("ptsRespObject",ptsRespObject)
context.setVariable("ptsCodeId", ptsCodeId);

//if ( ptsCodeId == 503 || !(ptsCodeId) ){
if ( ptsCodeId == 503 ) {
    context.setVariable("ptsCodeId", "true")
}

