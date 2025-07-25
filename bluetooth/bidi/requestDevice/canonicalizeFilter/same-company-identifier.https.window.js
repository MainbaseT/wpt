// META: script=/resources/testdriver.js?feature=bidi
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// META: timeout=long
'use strict';
const test_desc = 'Manufacturer data company identifier must be unique.';
const expected = new TypeError();

let filters = [{
  manufacturerData: [
    {
      companyIdentifier: 0x0001,
    },
    {
      companyIdentifier: 0x0001,
    }
  ]
}];

bluetooth_bidi_test(
    (t) => promise_rejects_js(
        t, TypeError, requestDeviceWithTrustedClick({filters})),
    test_desc);
