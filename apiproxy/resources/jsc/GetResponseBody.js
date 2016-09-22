 

var orderStatusAPGFlag;
var subscriptionId ;


if (!context.getVariable("orderStatus"))
{
context.setVariable("orderStatusAPGFlag", "false");

} else {
context.setVariable("orderStatusAPGFlag", "true");
 context.setVariable("ptsCodeId", "true");

}

//ntext.setVariable("response.content", context.getVariable("orderStatus"));
context.setVariable("orderStatusAPGFlag", context.getVariable("orderStatusAPGFlag")); 

 
subscriptionId = context.getVariable("subscriptions.subscriptionId");
context.setVariable("subscriptionId", subscriptionId);

var errorFlag ="false";
if (!context.getVariable("orderStatus"))
{
  
context.setVariable("errorFlag", "true");

}