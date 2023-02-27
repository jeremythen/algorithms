const signedNumberToHexStringLE = (number) => {
  let numberAsHex = numberToHexString(number);

  // Prepends '0' to hex string if it's odd
  if (numberAsHex.length % 2 === 1) {
    numberAsHex = `0${numberAsHex}`;
  }

  // Breaks the hex string in groups of 2 characters, which make up a byte
  const numberAsHexArray = numberAsHex.match(/.{1,2}/g);
  const msbPosition = numberAsHexArray.length * 8 - 1;
  const mostSignificantBitIsOn =
    (number & (1 << msbPosition)) >> msbPosition === 1;

  // Adds extra empty byte to indicate that the MSB was on
  if (mostSignificantBitIsOn) {
    numberAsHexArray.unshift("00");
  }

  // Returns the hex string in Little Endian (LE) format.
  return numberAsHexArray.reverse().join("");
};

/**
 *
 * @param {*} number to convert to a hex string representation in LE format
 * @returns {string} returns the hex representation of the number in LE format
 * This function is expecting `number` to be at most 2 bytes long.
 * If it's 1 byte long, no need to reverse the byte since there's only one.
 * If there are 2 bytes, then reverse them to be in LE.
 */
const numberToHexStringLEV3 = (number) => {
  let byteLength = parseInt(Math.log2(number) / 8 + 1);
  const oneByteMask = 0xff;

  const byteArray = [];

  const firstByte = number & oneByteMask;
  byteArray.push(firstByte);

  if (byteLength === 2) {
    // Copies the second byte of `number` and push it in the array
    const secondByte = (number & (oneByteMask << 8)) >> 8;
    byteArray.push(secondByte);
  }

  const mostSignificantBitPosition = byteLength * 8 - 1;
  const mostSignificantBitIsOn =
    (number & (1 << mostSignificantBitPosition)) > 0;

  if (mostSignificantBitIsOn) {
    byteArray.push(0);
  }
  return Buffer.from(byteArray).toString("hex");
};

const numberToHexString = (number) => number.toString(16);

const numberToHexStringLEV0 = (number) => {
  let numberAsHex = numberToHexString(number);

  // Prepends '0' to hex string if it's odd
  if (numberAsHex.length % 2 === 1) {
    numberAsHex = `0${numberAsHex}`;
  }

  // Breaks the hex string in groups of 2 characters, which make up a byte
  const numberAsHexArray = numberAsHex.match(/.{1,2}/g);
  const msbPosition = numberAsHexArray.length * 8 - 1;
  const mostSignificantBitIsOn =
    (number & (1 << msbPosition)) >> msbPosition === 1;

  // Adds extra empty byte to indicate that the MSB was on
  if (mostSignificantBitIsOn) {
    numberAsHexArray.unshift("00");
  }

  // Returns the hex string in Little Endian (LE) format.
  return numberAsHexArray.reverse().join("");
};

console.log(
  "58766 should be 8ee500: ",
  numberToHexStringLEV3(58766) === "8ee500"
);
console.log(
  "51138 should be c2c700: ",
  numberToHexStringLEV3(51138) === "c2c700"
);
console.log("14907 should be 3b3a: ", numberToHexStringLEV3(14907) === "3b3a");
console.log("2149 should be 6508: ", numberToHexStringLEV3(2149) === "6508");
console.log(
  "44175 should be 8fac00: ",
  numberToHexStringLEV3(44175) === "8fac00"
);
console.log("28796 should be 7c70: ", numberToHexStringLEV3(28796) === "7c70");
console.log(
  "34121 should be 498500: ",
  numberToHexStringLEV3(34121) === "498500"
);
console.log("28002 should be 626d: ", numberToHexStringLEV3(28002) === "626d");
console.log("17576 should be a844: ", numberToHexStringLEV3(17576) === "a844");
console.log("28998 should be 4671: ", numberToHexStringLEV3(28998) === "4671");
console.log("17453 should be 2d44: ", numberToHexStringLEV3(17453) === "2d44");
console.log("26163 should be 3366: ", numberToHexStringLEV3(26163) === "3366");
console.log("18606 should be ae48: ", numberToHexStringLEV3(18606) === "ae48");
console.log("16630 should be f640: ", numberToHexStringLEV3(16630) === "f640");
console.log("31278 should be 2e7a: ", numberToHexStringLEV3(31278) === "2e7a");
console.log("27227 should be 5b6a: ", numberToHexStringLEV3(27227) === "5b6a");
console.log("24785 should be d160: ", numberToHexStringLEV3(24785) === "d160");

console.log("123 should be 7b: ", numberToHexStringLEV3(123) === "7b");
console.log("32 should be 20: ", numberToHexStringLEV3(32) === "20");
console.log("64 should be 40: ", numberToHexStringLEV3(64) === "40");
console.log("32 should be 2c: ", numberToHexStringLEV3(44) === "2c");
console.log("127 should be 7f: ", numberToHexStringLEV3(127) === "7f");
console.log("128 should be 8000: ", numberToHexStringLEV3(128) === "8000"); // Check this one. The MSB is on, so it was appended the '00'

// console.log("58766 should be 8ee500: ", numberToHexStringLEV3(58766));
// console.log("51138 should be c2c700: ", numberToHexStringLEV3(51138));
// console.log("14907 should be 3b3a: ", numberToHexStringLEV3(14907));
// console.log("2149 should be 6508: ", numberToHexStringLEV3(2149));
// console.log("44175 should be 8fac00: ", numberToHexStringLEV3(44175));
// console.log("28796 should be 7c70: ", numberToHexStringLEV3(28796));
// console.log("34121 should be 498500: ", numberToHexStringLEV3(34121));
// console.log("28002 should be 626d: ", numberToHexStringLEV3(28002));
// console.log("17576 should be a844: ", numberToHexStringLEV3(17576));
// console.log("28998 should be 4671: ", numberToHexStringLEV3(28998));
// console.log("17453 should be 2d44: ", numberToHexStringLEV3(17453));
// console.log("26163 should be 3366: ", numberToHexStringLEV3(26163));
// console.log("18606 should be ae48: ", numberToHexStringLEV3(18606));
// console.log("16630 should be f640: ", numberToHexStringLEV3(16630));
// console.log("31278 should be 2e7a: ", numberToHexStringLEV3(31278));
// console.log("27227 should be 5b6a: ", numberToHexStringLEV3(27227));
// console.log("24785 should be d160: ", numberToHexStringLEV3(24785));

// console.log("123 should be 7b: ", numberToHexStringLEV3(123));
// console.log("32 should be 20: ", numberToHexStringLEV3(32));
// console.log("64 should be 40: ", numberToHexStringLEV3(64));
// console.log("32 should be 2c: ", numberToHexStringLEV3(44));
// console.log("127 should be 7f: ", numberToHexStringLEV3(127));
// console.log("128 should be 8000: ", numberToHexStringLEV3(128)); // Check this one. The MSB is on, so it was appended the '00'

// 58766 should be 8ee500:  [ 142, 229, 0 ]
// 51138 should be c2c700:  [ 194, 199, 0 ]
// 14907 should be 3b3a:  [ 59, 58 ]
// 2149 should be 6508:  [ 101, 8 ]
// 44175 should be 8fac00:  [ 143, 172, 0 ]
// 28796 should be 7c70:  [ 124, 112 ]
// 34121 should be 498500:  [ 73, 133, 0 ]
// 28002 should be 626d:  [ 98, 109 ]
// 17576 should be a844:  [ 168, 68 ]
// 28998 should be 4671:  [ 70, 113 ]
// 17453 should be 2d44:  [ 45, 68 ]
// 26163 should be 3366:  [ 51, 102 ]
// 18606 should be ae48:  [ 174, 72 ]
// 16630 should be f640:  [ 246, 64 ]
// 31278 should be 2e7a:  [ 46, 122 ]
// 27227 should be 5b6a:  [ 91, 106 ]
// 24785 should be d160:  [ 209, 96 ]
// 123 should be 7b:  [ 123 ]
// 32 should be 20:  [ 32 ]
// 64 should be 40:  [ 64 ]
// 32 should be 2c:  [ 44 ]
// 127 should be 7f:  [ 127 ]
// 128 should be 8000:  [ 128, 0 ]
