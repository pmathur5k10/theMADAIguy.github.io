//
//  Portfolio
//  Skills.JS
//
//  Created By Ryan Maugin on 04/05/17
//

$(document).ready(function () {

    // Containers
    var webContainer = $('#web-container');
    var appContainer = $('#app-container');
    var softwareContainer = $('#software-container');

    // Content of containers
    var webContent = $('#web-content');
    var appContent = $('#app-content');
    var softwareContent = $('#software-content');
    
    // Hide all container content by default
    webContent.hide();
    appContent.hide();
    softwareContent.hide();

    webContainer.click(function () { webContent.show(1000); });

    appContainer.click(function () { appContent.show(1000); });

    softwareContainer.click(function () { softwareContent.show(1000); });

});