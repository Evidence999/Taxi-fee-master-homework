
const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('returns 1 yuan given 0 km and 5 min', function(){
        var result = main(0, 5);
        expect(result).toEqual(1);
    });
    it('returns 6 yuan given 1 km and 0 min', function(){
        var result = main(1, 0);
        expect(result).toEqual(6);
    });
    it('returns 9 yuan given 6 km and 0 min', function(){
        var result = main(6, 0);
        expect(result).toEqual(9);
    });
    it('returns 12 yuan given 9 km and 0 min', function(){
        var result = main(9, 0);
        expect(result).toEqual(12);
    });
    it('returns 7 yuan given 1 km and 5 min', function(){
        var result = main(1, 5);
        expect(result).toEqual(7);
    });
    it('returns 10 yuan given 6 km and 5 min', function(){
        var result = main(6, 5);
        expect(result).toEqual(10);
    });
    it('returns 13 yuan given 9 km and 5 min', function(){
        var result = main(9, 5);
        expect(result).toEqual(13);
    });

});
