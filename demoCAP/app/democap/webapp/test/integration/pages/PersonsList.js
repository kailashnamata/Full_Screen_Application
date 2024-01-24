sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'democap',
            componentId: 'PersonsList',
            contextPath: '/Persons'
        },
        CustomPageDefinitions
    );
});