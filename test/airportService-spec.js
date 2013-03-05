(function (root) {
	'use strict';

    // I want to be able to add and retrieve airports with 3 letter codes.

	describe('airportService', function () {

		it('should expose an airportService object on the global name space', function () {
			expect(typeof root.airportService).toBe('object');
		});

        it('should allow us to add and get an airport object', function() {
            expect(typeof root.airportService.getAirport(1)).toBe('object');
        });

        it('should expose an airportService object on the global name space that has data', function(){
            expect(root.airportService.getAirport(1).code.length === 3).toBe(true);
        });

    });

})(this);