// META: title=test WebNN API element-wise add operation
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-binary
// Compute the element-wise binary addition of the two input tensors.
// MLOperand add(MLOperand a, MLOperand b);

const addTests = [
  {
    'name': 'add float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -59.749725341796875, -44.81494140625,    -87.93879699707031,
            1.8843363523483276,  84.89464569091797,  47.553653717041016,
            85.64292907714844,   43.02861404418945,  -60.25821304321289,
            15.60616683959961,   70.60614776611328,  -7.454866409301758,
            -30.20689582824707,  -97.69825744628906, -0.00984330102801323,
            -77.67960357666016,  30.196685791015625, -59.19007110595703,
            89.3588638305664,    28.6798095703125,   -29.72130584716797,
            -90.6352310180664,   28.2818546295166,   27.662540435791016
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.08303833007812, -112.71289825439453, -61.47605895996094,
            38.627098083496094,  19.717254638671875,  -40.15299606323242,
            150.9217529296875,   -31.02364730834961,  -74.08602142333984,
            22.58765411376953,   170.44366455078125,  48.34747314453125,
            -105.77885437011719, -86.19874572753906,  17.100265502929688,
            18.13207244873047,   87.64418029785156,   -116.3659439086914,
            117.07791900634766,  10.460599899291992,  22.931793212890625,
            -160.62979125976562, 68.10350799560547,   -2.3239879608154297
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-59.361572265625],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -102.69488525390625, -127.25952911376953, -32.898834228515625,
            -22.61880874633789,  -124.5389633178711,  -147.06822204589844,
            5.917243957519531,   -133.41383361816406, -73.18938446044922,
            -52.38008499145508,  40.47594451904297,   -3.559234619140625,
            -134.93353271484375, -47.862064361572266, -42.25146484375,
            36.450103759765625,  -1.9140739440917969, -116.53744506835938,
            -31.642518997192383, -77.58078002929688,  -6.708473205566406,
            -129.3561248779297,  -19.5399169921875,   -89.34809875488281
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -17.981124877929688, -70.45854187011719, -12.762019157409668,
            24.254032135009766, -68.12599182128906, 30.62627410888672
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -61.3144416809082,  -138.35650634765625, 13.70072078704834,
            60.996795654296875, -133.30337524414062, -57.08037567138672,
            47.297691345214844, -144.51080322265625, -26.589828491210938,
            31.235519409179688, 31.711524963378906,  86.4286117553711,
            -93.55308532714844, -58.95903396606445,  4.348090171813965,
            120.06570434570312, -10.67849349975586,  -26.549598693847656,
            9.73792839050293,   -88.67774963378906,  39.89107894897461,
            -45.74052047729492, -28.304336547851562, 0.6397457122802734
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -32.34067153930664, 43.12499237060547, 78.6887435913086,
            -54.49899673461914
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -75.67398834228516,  -100.23863220214844, -5.877931594848633,
            79.86775207519531,   -22.052398681640625, -44.58165740966797,
            143.96755981445312,  4.636482238769531,   64.86093139648438,
            -47.51750946044922,  45.33852005004883,   1.3033409118652344,
            -107.91262817382812, -20.841163635253906, -15.230562210083008,
            138.93667602539062,  100.57249450683594,  -14.050880432128906,
            106.40779876708984,  60.46953582763672,   131.3418426513672,
            -124.49354553222656, -14.67734146118164,  -84.48552703857422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-59.361572265625],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -43.333316802978516, -67.89795684814453,  26.462739944458008,
            36.74276351928711,   -65.1773910522461,   -87.70664978027344,
            65.27881622314453,   -74.05226135253906,  -13.827810287475586,
            6.981486797332764,   99.83751678466797,   55.802337646484375,
            -75.57196044921875,  11.499507904052734,  17.110109329223633,
            95.81167602539062,   57.4474983215332,    -57.175872802734375,
            27.719053268432617,  -18.219209671020508, 52.653099060058594,
            -69.99455261230469,  39.8216552734375,    -29.986528396606445
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -102.69488525390625, -127.25952911376953, -32.898834228515625,
            -22.61880874633789,  -124.5389633178711,  -147.06822204589844,
            5.917243957519531,   -133.41383361816406, -73.18938446044922,
            -52.38008499145508,  40.47594451904297,   -3.559234619140625,
            -134.93353271484375, -47.862064361572266, -42.25146484375,
            36.450103759765625,  -1.9140739440917969, -116.53744506835938,
            -31.642518997192383, -77.58078002929688,  -6.708473205566406,
            -129.3561248779297,  -19.5399169921875,   -89.34809875488281
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 large inputs',
    'graph': {
      'inputs': {
        'inputA': {
          'data': 89.32998657226562,
          'descriptor': {shape: [6000, 6000], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': 77.24720764160156,
          'descriptor': {shape: [6000, 6000], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': 166.5771942138672,
          'descriptor': {shape: [6000, 6000], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'add float32 with special character names',
    'graph': {
      'inputs': {
        '12-L#!.☺': {
          'data': [89.32998657226562],
          'descriptor': {shape: [1], dataType: 'float32'},
          'constant': true
        },
        '🤦🏼‍♂️124DS#!F': {
          'data': [77.24720764160156],
          'descriptor': {shape: [1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': '12-L#!.☺'}, {'b': '🤦🏼‍♂️124DS#!F'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [166.5771942138672],
          'descriptor': {shape: [1], dataType: 'float32'}
        }
      }
    }
  },

  // float16 tests
  {
    'name': 'add float16 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -59.75,    -44.8125,  -87.9375,   1.884765625, 84.875,
            47.5625,   85.625,    43.03125,   -60.25,      15.609375,
            70.625,    -7.453125, -30.203125, -97.6875,    -0.0098419189453125,
            -77.6875,  30.203125, -59.1875,   89.375,      28.6875,
            -29.71875, -90.625,   28.28125,   27.65625
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -103.125, -112.6875, -61.46875, 38.625,   19.6875, -40.125,
            150.875,  -31.03125, -74.0625,  22.59375, 170.5,   48.375,
            -105.75,  -86.1875,  17.09375,  18.125,   87.625,  -116.375,
            117.125,  10.46875,  22.9375,   -160.625, 68.125,  -2.328125
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-59.375],
          'descriptor': {shape: [1], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -102.75,   -127.25, -32.90625, -22.625,   -124.5625, -147,
            5.875,     -133.5,  -73.1875,  -52.40625, 40.4375,   -3.5625,
            -135,      -47.875, -42.25,    36.4375,   -1.9375,   -116.5625,
            -31.65625, -77.625, -6.71875,  -129.375,  -19.5625,  -89.375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [-17.984375, -70.4375, -12.765625, 24.25, -68.125, 30.625],
          'descriptor': {shape: [2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -61.3125, -138.25,  13.703125, 61,        -133.25,  -57.0625,
            47.25,    -144.5,   -26.59375, 31.234375, 31.6875,  86.4375,
            -93.5625, -58.9375, 4.34375,   120.0625,  -10.6875, -26.5625,
            9.734375, -88.625,  39.875,    -45.75,    -28.3125, 0.640625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        },
        'inputB': {
          'data': [-32.34375, 43.125, 78.6875, -54.5],
          'descriptor': {shape: [2, 2, 1], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -75.6875, -100.25,   -5.875,     79.875,    -22.0625, -44.5625,
            144,      4.625,     64.875,     -47.53125, 45.3125,  1.3125,
            -107.875, -20.84375, -15.234375, 139,       100.5625, -14.0625,
            106.375,  60.46875,  131.375,    -124.5,    -14.6875, -84.5
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-59.375],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float16'}
        },
        'inputB': {
          'data': [
            -43.34375, -67.875,   26.46875,   36.75,      -65.1875, -87.6875,
            65.25,     -74.0625,  -13.828125, 6.98046875, 99.8125,  55.8125,
            -75.5625,  11.5,      17.109375,  95.8125,    57.4375,  -57.1875,
            27.71875,  -18.21875, 52.65625,   -70,        39.8125,  -29.984375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            -102.75,   -127.25, -32.90625, -22.625,   -124.5625, -147,
            5.875,     -133.5,  -73.1875,  -52.40625, 40.4375,   -3.5625,
            -135,      -47.875, -42.25,    36.4375,   -1.9375,   -116.5625,
            -31.65625, -77.625, -6.71875,  -129.375,  -19.5625,  -89.375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'add float16 large inputs',
    'graph': {
      'inputs': {
        'inputA': {
          'data': 89.3125,
          'descriptor': {shape: [6000, 6000], dataType: 'float16'},
          'constant': true
        },
        'inputB': {
          'data': 77.25,
          'descriptor': {shape: [6000, 6000], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'add',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': 166.5,
          'descriptor': {shape: [6000, 6000], dataType: 'float16'}
        }
      }
    }
  }
];

if (navigator.ml) {
  addTests.filter(isTargetTest).forEach((test) => {
    webnn_conformance_test(buildAndExecuteGraph, getPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
