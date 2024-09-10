/**
 * Copyright (C) 2024 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement 
 * under which you licensed this source code.  
 *
 * This code was automatically generated by Crestron's code generation tool.
*/
/*jslint es6 */
/*global serviceModule, CrComLib */

const powerdowndisplayInstanceModule = (id, elementIds) => {
    'use strict';    

    // BEGIN::CHANGEAREA - your initialization code for each instance of widget goes here  
    // console.log(`powerdowndisplay-widget powerdowndisplayInstanceModule("${id}", [${elementIds}])`);

    // choose one of the below 
    // -- id is container element added around template content
    // -- elementIds[0] is the first element found in the template content
    // -- in shell template, elementIds[0] is usually the right choice
    // const instance = document.getElementById(id);
    const instance = document.getElementById(elementIds[0]);

    // Your code for when widget instance removed from DOM here
    const cleanup = () => {
        // console.log(`powerdowndisplay-widget powerdowndisplayInstanceModule cleanup("${id}")`);
    };

    // Your code changing public interface to instance module here 
    return {
        id,
        elementIds,
        instance,
        cleanup
    };

    // END::CHANGEAREA  
} 

const powerdowndisplayModule = (() => {
    'use strict';

    // BEGIN::CHANGEAREA - your initialization code for each instance of widget goes here  
   
    const widgetInstances = {};

    /**
     * Initialize Method
     */
    function onInit() {
       serviceModule.addEmulatorScenarioNoControlSystem("./app/project/components/widgets/powerdowndisplay/powerdowndisplay-emulator.json");
       // Uncomment the below line and comment the above to load the emulator all the time.
       // serviceModule.addEmulatorScenario("./app/project/components/widgets/powerdowndisplay/powerdowndisplay-emulator.json");
    }

    /**
     * private method for widget class creation
     */
    let loadedSubId = CrComLib.subscribeState('o', 'ch5-import-htmlsnippet:powerdowndisplay-import-widget', (value) => {
        if (value['loaded']) {
            onInit();
            setTimeout(() => {
                CrComLib.unsubscribeState('o', 'ch5-import-htmlsnippet:powerdowndisplay-import-page', loadedSubId);
                loadedSubId = '';
            });
        }
    });

    /**
     * private method for widget instance addition and removal
     */
    CrComLib.subscribeState('o', 'ch5-template:powerdowndisplay-widget', (value) => {
        if (value['loaded'] !== undefined && value['id'] !== undefined) {
            if (value.loaded) {
                widgetInstances[value.id] = powerdowndisplayInstanceModule(value.id, value['elementIds']);
            }
            else {
                const removedInstance = widgetInstances[value.id];
                if (removedInstance) {
                    removedInstance.cleanup();
                    delete widgetInstances[value.id];
                }
            }
        }
    });
    /**
     * All public method and properties are exported here
     */
    return {
        widgetInstances
    };

    // END::CHANGEAREA   

})();