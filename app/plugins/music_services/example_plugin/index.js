module.exports = ExamplePlugin;

function ExamplePlugin(commandRouter) {
	var self = this;

}


/*
 * This method can be defined by every plugin which needs to be informed of the startup of Volumio.
 * The Core controller checks if the method is defined and executes it on startup if it exists.
 */
ExamplePlugin.prototype.onVolumioStart = function() {
	//Perform startup tasks here
}

ExamplePlugin.prototype.onStart = function() {
    //Perform startup tasks here
}

ExamplePlugin.prototype.onStop = function() {
    //Perform startup tasks here
}

ExamplePlugin.prototype.onRestart = function() {
    //Perform startup tasks here
}

ExamplePlugin.prototype.onInstall = function()
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.onUninstall = function()
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.getUIConfig = function()
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.setUIConfig = function(data)
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.getConf = function(varName)
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.setConf = function(varName, varValue)
{
    //Perform your installation tasks here
}


//Optional functions exposed for making development easier and more clear
ExamplePlugin.prototype.getSystemConf = function(pluginName,varName)
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.setSystemConf = function(pluginName,varName)
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.getAdditionalConf = function()
{
    //Perform your installation tasks here
}

ExamplePlugin.prototype.setAdditionalConf = function()
{
    //Perform your installation tasks here
}
