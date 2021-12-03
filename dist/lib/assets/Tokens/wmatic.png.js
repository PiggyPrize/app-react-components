'use strict';

var WMATIC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACr1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8nkPcpu/UpbO4puvUnkfcpuPUnkvcqbe74+/8nlffy+P8oo/YoqPbp+P79/v8nh/UoefEnmPcpbu8pcO98vvonifb1+v/x+v8pt/X8/v/I5v0ofPIpdfAorvVhzfgsb+4tlvcooPYoq/X1+f6Wy/snnPcwvfU0dO8wce/n8P674vy14fye4fuSx/uR3PqF2fksvPUpjfEpd/Ds+f7k9/6+5PyIw/tetflfzfhUyfcptPZsm/RgkvP6/P+w3fys5fuOxvuCwPoopfY8fPDt8/7L5/215/yt2vyj4vuZzvu70fp+1vl41fm4z/msxvlmuPkosPUpkfI5eO/1/P/D5/2w5vun4/vD2Pun2Puf0/uX3vpz0/lNx/cni/ZDgPH4/f/Y8v3U7P3C7PyL2/q/0/pu0fhmz/iCuvg3nPhay/dFxPY4wPZ3pPVml/NbjvJPhvFKg/Hj7v7d6v276vzB5fyp5Pu0zPlIrPgymfc1v/aNsfZ3sfZ1q/Z/q/Upl/NVjPIxc/Df9f3N7f3R5/3S4vzK2/tqvvqlwvhHpPg9wvYplPI0g/LZ5fx2w/lpvPlr0PhUsPievffO4fyf2vu+2PqF0vp0w/mJwfigvvebuvdZpfZEiPLwoW1LAAAASHRSTlMA/exgnNN5AcrDJLxN1iIf7pYPEgXPJp+OUkc8JxgD6A3x8Ofbuq90cGhXVSoK8y324ce/iFk6HJnj3cW3sK6kbjQH4saJ9S/swAl9AAALbElEQVR42uzYS27aYBQF4PPb2NhgXg4YQjECDCQpkIdICImiJsroTLuCbiBr6UIy6iLaWRfRpXQYdQI2fvw3ar4dnME5urr48H8YXXhP16W5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";

module.exports = WMATIC;
//# sourceMappingURL=wmatic.png.js.map
