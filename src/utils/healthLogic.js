function getHealthStatus(moisture){

if (moisture < 30){
return "Critical";
}

if ( moisture <= 60){
return "Warning";
}

return "Good";

}
export default getHealthStatus;