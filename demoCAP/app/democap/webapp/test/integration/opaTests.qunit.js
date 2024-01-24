sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'democap/test/integration/FirstJourney',
		'democap/test/integration/pages/PersonsList',
		'democap/test/integration/pages/PersonsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PersonsList, PersonsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('democap') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePersonsList: PersonsList,
					onThePersonsObjectPage: PersonsObjectPage
                }
            },
            opaJourney.run
        );
    }
);