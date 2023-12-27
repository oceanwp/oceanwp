<?php
/**
 * OceanWP Customizer Class
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ocean_customizer_section_icons() {

    $icons = array(
        'header' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cchi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <path class="cchi-1" d="M27.0029296875,29.7006591101H4.9970703125c-1.4868164062,0-2.6967773438-1.2099609375-2.6967773438-2.697265625V4.9965575476c0-1.4873046875,1.2099609375-2.697265625,2.6967773438-2.697265625h22.005859375c1.4873046875,0,2.697265625,1.2099609375,2.697265625,2.697265625v22.0068359375c0,1.4873046875-1.2099609375,2.697265625-2.697265625,2.697265625ZM4.9970703125,4.1000731726c-.4946289062,0-.8969726562.40234375-.8969726562.896484375v22.0068359375c0,.494140625.40234375.896484375.8969726562.896484375h22.005859375c.494140625,0,.896484375-.40234375.896484375-.896484375V4.9965575476c0-.494140625-.40234375-.896484375-.896484375-.896484375H4.9970703125Z"/>
                <path class="cchi-1" d="M28.7998046875,8.0864012976H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="cchi-1" d="M28.7998046875,12.0727294226H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <rect class="cchi-1" x="3.2179539328" y="6.9203028391" width="25.5640921345" height="3.986044088"/>
            </svg>',

        'topbar' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cctbi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <path class="cctbi-1" d="M27.0029296875,29.7000805971H4.9970703125c-1.4868164062,0-2.6967773438-1.2099609375-2.6967773438-2.697265625V4.9969555971c0-1.4873046875,1.2099609375-2.697265625,2.6967773438-2.697265625h22.005859375c1.4873046875,0,2.697265625,1.2099609375,2.697265625,2.697265625v22.005859375c0,1.4873046875-1.2099609375,2.697265625-2.697265625,2.697265625ZM4.9970703125,4.1004712221c-.4946289062,0-.8969726562.40234375-.8969726562.896484375v22.005859375c0,.494140625.40234375.896484375.8969726562.896484375h22.005859375c.494140625,0,.896484375-.40234375.896484375-.896484375V4.9969555971c0-.494140625-.40234375-.896484375-.896484375-.896484375H4.9970703125Z"/>
                <path class="cctbi-1" d="M28.7998046875,8.0867993471H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="cctbi-1" d="M28.7998046875,12.0721509096H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <rect class="cctbi-1" x="3.2179539328" y="3.4286219622" width="25.5640921345" height="3.986044088"/>
            </svg>',

        'blog' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cbi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <g>
                <path class="cbi-1" d="M27.0029296875,29.7000291617H4.9970703125c-1.4868164062,0-2.6967773438-1.2099609375-2.6967773438-2.697265625V4.9969041617c0-1.4873046875,1.2099609375-2.697265625,2.6967773438-2.697265625h22.005859375c1.4873046875,0,2.697265625,1.2099609375,2.697265625,2.697265625v22.005859375c0,1.4873046875-1.2099609375,2.697265625-2.697265625,2.697265625ZM4.9970703125,4.1004197867c-.4946289062,0-.8969726562.40234375-.8969726562.896484375v22.005859375c0,.494140625.40234375.896484375.8969726562.896484375h22.005859375c.494140625,0,.896484375-.40234375.896484375-.896484375V4.9969041617c0-.494140625-.40234375-.896484375-.896484375-.896484375H4.9970703125Z"/>
                <path class="cbi-1" d="M28.7998046875,7.3006150992H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <rect class="cbi-1" x="3.9265844537" y="3.9853366175" width="24.2944121393" height="2.3190331495"/>
                </g>
                <g>
                <g>
                    <path class="cbi-1" d="M10.11328125,23.4051072867c-.349609375,0-.689453125-.1376953125-.9467773438-.39453125-.3618164062-.3623046875-.4858398438-.888671875-.32421875-1.373046875l.5634765625-1.6904296875c.2329101562-.697265625.6303710938-1.341796875,1.150390625-1.861328125l8.4057617188-8.40625c.3515625-.3515625.921875-.3515625,1.2734375,0l2.2626953125,2.2626953125c.3515625.3515625.3515625.921875,0,1.2734375l-8.4067382812,8.40625c-.5190429688.51953125-1.1625976562.91796875-1.861328125,1.150390625l-1.689453125.5625c-.140625.046875-.2846679688.0703125-.4272460938.0703125ZM19.5986328125,11.5887010367l-7.7700195312,7.7705078125c-.3227539062.322265625-.5703125.7236328125-.71484375,1.1572265625l-.2744140625.822265625.822265625-.2734375c.43359375-.14453125.8334960938-.392578125,1.15625-.7158203125l7.7709960938-7.7705078125-.990234375-.990234375Z"/>
                    <path class="cbi-1" d="M21.8583984375,13.4822557242c-.23046875,0-.4609375-.0888671875-.63671875-.2646484375-.3515625-.3515625-.3505859375-.921875.0009765625-1.2724609375.1318359375-.1318359375.2041015625-.3076171875.2041015625-.494140625,0-.1875-.072265625-.36328125-.205078125-.4951171875-.2724609375-.2744140625-.7177734375-.2724609375-.990234375,0-.3515625.3515625-.9208984375.3505859375-1.2724609375-.0009765625s-.3505859375-.921875.0009765625-1.2724609375c.9736328125-.97265625,2.55859375-.9736328125,3.5341796875,0,.47265625.47265625.7333984375,1.1005859375.7333984375,1.7685546875s-.2607421875,1.2958984375-.7333984375,1.767578125c-.17578125.17578125-.4052734375.263671875-.6357421875.263671875Z"/>
                </g>
                <path class="cbi-1" d="M20.4736328125,26.3230760367h-12.4736328125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h12.4736328125c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <circle class="cbi-1" cx="24.0781357298" cy="25.4228742966" r=".9"/>
                </g>
            </svg>',

        'typo' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cctypoi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <g>
                <path class="cctypoi-1" d="M10.8134765625,28.5024742922c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625v-5.0498046875c0-.4970703125.4028320312-.900390625.8999023438-.900390625s.8999023438.4033203125.8999023438.900390625v5.0498046875c0,.4970703125-.4028320312.900390625-.8999023438.900390625Z"/>
                <path class="cctypoi-1" d="M7.4072265625,25.9770836672h-2.8647460938c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h2.8647460938c.4970703125,0,.8999023438.4033203125.8999023438.900390625s-.4028320312.900390625-.8999023438.900390625Z"/>
                <path class="cctypoi-1" d="M27.45703125,25.9770836672H10.8178710938c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h16.6391601562c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                </g>
                <g>
                <g>
                    <path class="cctypoi-1" d="M15.755859375,15.9380211672H5.5209960938c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h10.2348632812c.4970703125,0,.8999023438.4033203125.8999023438.900390625s-.4028320312.900390625-.8999023438.900390625Z"/>
                    <path class="cctypoi-1" d="M18.0732421875,21.3462242922c-.3486328125,0-.681640625-.205078125-.8271484375-.5458984375l-6.6455078125-15.525390625-6.5727539062,15.525390625c-.1962890625.4560546875-.724609375.669921875-1.181640625.47265625-.45703125-.1953125-.6689453125-.724609375-.4736328125-1.181640625l6.6450195312-15.525390625c.2778320312-.6484375.9130859375-1.0673828125,1.6186523438-1.0673828125h.0004882812c.7055664062,0,1.3408203125.4189453125,1.6186523438,1.0673828125l6.6450195312,15.525390625c.1962890625.45703125-.015625.986328125-.47265625,1.181640625-.1162109375.0498046875-.236328125.0732421875-.3544921875.0732421875Z"/>
                </g>
                <path class="cctypoi-1" d="M26.111328125,21.3501305422h-3.8134765625c-1.0126953125,0-1.8369140625-.830078125-1.8369140625-1.8505859375v-3.2841796875c0-.9833984375.7939453125-1.783203125,1.76953125-1.783203125h5.6689453125v-2.9140625l-5.6015625-.0498046875-.0361328125,1.2578125c0,.4970703125-.4033203125.900390625-.900390625.900390625s-.900390625-.4033203125-.900390625-.900390625v-1.2080078125c0-1.0205078125.82421875-1.8505859375,1.8369140625-1.8505859375h5.5654296875c1.0126953125,0,1.8369140625.830078125,1.8369140625,1.8505859375v3.814453125c0,.4970703125-.4033203125.900390625-.900390625.900390625h-6.5693359375l.03125,3.2666015625,3.849609375.0498046875c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="cctypoi-1" d="M28.7998046875,21.3501305422c-.4970703125,0-.900390625-.4033203125-.900390625-.900390625v-5.1171875c0-.4970703125.4033203125-.900390625.900390625-.900390625s.900390625.4033203125.900390625.900390625v5.1171875c0,.4970703125-.4033203125.900390625-.900390625.900390625Z"/>
                </g>
            </svg>',

        'color' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cci-1 {
                    fill: #fff;
                    font-family: MyriadPro-Regular, \'Myriad Pro\';
                    font-size: 3.5399999619px;
                    }

                    .cci-2 {
                    letter-spacing: -.0110346046em;
                    }

                    .cci-3 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <text class="cci-1" transform="translate(-.0034923553 -.814612295)"><tspan class="cci-2" x="0" y="0">C</tspan><tspan x="2.0141601562" y="0">olors</tspan></text>
                <g>
                <path class="cci-3" d="M18.91015625,19.5499278051c-.1376953125,0-.275390625-.0322265625-.4013671875-.0947265625-.2275390625-.11328125-.396484375-.318359375-.4658203125-.5634765625-.3525390625-1.263671875-1.0693359375-2.421875-2.0454101562-3.322265625-.970703125.8916015625-1.685546875,2.048828125-2.041015625,3.322265625-.068359375.2451171875-.2368164062.44921875-.4643554688.5625-.228515625.1142578125-.4931640625.1259765625-.7294921875.0341796875-2.5942382812-1.0126953125-4.5903320312-3.216796875-5.3393554688-5.896484375-.2143554688-.767578125-.3232421875-1.572265625-.3232421875-2.3916015625,0-4.9072265625,3.9921875-8.900390625,8.8999023438-8.900390625,4.9072265625,0,8.900390625,3.9931640625,8.900390625,8.900390625,0,.8212890625-.109375,1.6259765625-.32421875,2.392578125-.7470703125,2.673828125-2.7431640625,4.8779296875-5.337890625,5.89453125-.10546875.0419921875-.216796875.0625-.328125.0625ZM16,4.1007090551c-3.9150390625,0-7.1000976562,3.1845703125-7.1000976562,7.099609375,0,.6552734375.0864257812,1.296875.2568359375,1.9072265625.5131835938,1.833984375,1.7587890625,3.3896484375,3.41015625,4.3046875.6088867188-1.4736328125,1.6127929688-2.7744140625,2.8940429688-3.7333984375.3203125-.240234375.76171875-.23828125,1.08203125.0029296875,1.2802734375.9677734375,2.2822265625,2.267578125,2.888671875,3.7294921875,1.6533203125-.9169921875,2.8994140625-2.47265625,3.4111328125-4.3037109375.1708984375-.6083984375.2568359375-1.25.2568359375-1.9072265625,0-3.9150390625-3.1845703125-7.099609375-7.099609375-7.099609375Z"/>
                <path class="cci-3" d="M11.2001953125,29.7003184301c-4.9077148438,0-8.8999023438-3.9931640625-8.8999023438-8.900390625,0-3.638671875,2.2758789062-6.9697265625,5.6630859375-8.2890625,2.7290039062-1.087890625,6.1479492188-.65625,8.5776367188,1.1689453125.2260742188.1708984375.359375.4375.3588867188.720703125,0,.283203125-.1337890625.5498046875-.3608398438.7197265625-1.0170898438.7607421875-1.814453125,1.7919921875-2.3012695312,2.9599609375,1.41015625.3642578125,2.9907226562.2734375,4.3383789062-.2666015625.2373046875-.0947265625.501953125-.0849609375.7333984375.029296875.228515625.11328125.3994140625.3193359375.4677734375.5654296875.2138671875.76953125.3232421875,1.57421875.3232421875,2.3916015625,0,2.8232421875-1.2978515625,5.41796875-3.5595703125,7.119140625-1.52734375,1.1484375-3.423828125,1.78125-5.3408203125,1.78125ZM11.2001953125,13.7003184301c-.9028320312,0-1.76953125.1630859375-2.576171875.4853515625-2.708984375,1.0546875-4.5239257812,3.7109375-4.5239257812,6.6142578125,0,3.9150390625,3.1850585938,7.099609375,7.1000976562,7.099609375,1.5517578125,0,3.0244140625-.490234375,4.2587890625-1.4189453125,1.8056640625-1.3583984375,2.8408203125-3.4287109375,2.8408203125-5.6806640625,0-.3310546875-.021484375-.6591796875-.0654296875-.982421875-1.7836914062.466796875-3.7680664062.3525390625-5.4790039062-.33203125-.4262695312-.1708984375-.6557617188-.6357421875-.5322265625-1.078125.41015625-1.470703125,1.2036132812-2.8193359375,2.2783203125-3.896484375-1.0102539062-.533203125-2.1337890625-.810546875-3.3012695312-.810546875Z"/>
                <g>
                    <path class="cci-3" d="M18.9099731445,18.6500244141c-.8999633789.3599853516-1.8800048828.549987793-2.9099731445.549987793-1.0300292969,0-2.0100097656-.1900024414-2.9099731445-.549987793.4799804688-1.7200317383,1.5199584961-3.2100219727,2.9099731445-4.25,1.3900146484,1.049987793,2.4299926758,2.5299682617,2.9099731445,4.25Z"/>
                    <path class="cci-3" d="M16,20.1007090551c-1.1328125,0-2.224609375-.20703125-3.2446289062-.615234375-.4262695312-.1708984375-.6557617188-.6357421875-.5322265625-1.078125.5244140625-1.8798828125,1.6743164062-3.55859375,3.2377929688-4.728515625.3203125-.240234375.76171875-.23828125,1.08203125.0029296875,1.564453125,1.1826171875,2.712890625,2.861328125,3.234375,4.7255859375.123046875.4423828125-.1064453125.9072265625-.533203125,1.078125-1.01953125.408203125-2.111328125.615234375-3.244140625.615234375ZM14.2377929688,18.0802012426c1.1328125.29296875,2.3920898438.29296875,3.5229492188,0-.3955078125-.9453125-1-1.806640625-1.7631835938-2.5107421875-.759765625.6982421875-1.36328125,1.5595703125-1.759765625,2.5107421875Z"/>
                </g>
                <path class="cci-3" d="M20.7998046875,29.7003184301c-1.93359375,0-3.779296875-.615234375-5.337890625-1.7783203125-2.2651367188-1.705078125-3.5620117188-4.2998046875-3.5620117188-7.1220703125,0-.8193359375.1083984375-1.6240234375.3232421875-2.392578125.068359375-.24609375.2387695312-.451171875.4677734375-.564453125.2294921875-.1142578125.4965820312-.1240234375.7333984375-.029296875,1.3471679688.5400390625,2.9287109375.630859375,4.3364257812.2666015625-.4853515625-1.1591796875-1.2836914062-2.19140625-2.3037109375-2.962890625-.2255859375-.1708984375-.3579101562-.4375-.3569335938-.720703125s.134765625-.548828125.3618164062-.71875c1.55859375-1.1630859375,3.404296875-1.7783203125,5.337890625-1.7783203125,1.1318359375,0,2.22265625.20703125,3.244140625.6142578125,3.4326171875,1.3359375,5.65625,4.58984375,5.65625,8.2861328125,0,4.9072265625-3.9931640625,8.900390625-8.900390625,8.900390625ZM13.765625,19.8175059301c-.0434570312.322265625-.0659179688.650390625-.0659179688.982421875,0,2.251953125,1.0356445312,4.322265625,2.8413085938,5.681640625,1.2431640625.9267578125,2.716796875,1.41796875,4.2587890625,1.41796875,3.9150390625,0,7.099609375-3.1845703125,7.099609375-7.099609375,0-2.9033203125-1.814453125-5.5595703125-4.515625-6.611328125-1.86328125-.7431640625-4.08203125-.6240234375-5.88671875.326171875,1.0771484375,1.083984375,1.8720703125,2.431640625,2.2802734375,3.892578125.123046875.4423828125-.1064453125.9072265625-.533203125,1.078125-1.7099609375.68359375-3.6953125.7978515625-5.478515625.33203125Z"/>
                </g>
            </svg>',

        'custom_css' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .cccssi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <g>
                <path class="cccssi-1" d="M10.9301757812,19.3681640625c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625v-4.935546875c0-.4970703125.4028320312-.8999023438.8999023438-.8999023438s.8999023438.4028320312.8999023438.8999023438v4.935546875c0,.4970703125-.4028320312.900390625-.8999023438.900390625Z"/>
                <path class="cccssi-1" d="M7.6000976562,16.8999023438h-2.8002929688c-.4970703125,0-.8999023438-.4028320312-.8999023438-.8999023438s.4028320312-.8999023438.8999023438-.8999023438h2.8002929688c.4970703125,0,.8999023438.4028320312.8999023438.8999023438s-.4028320312.8999023438-.8999023438.8999023438Z"/>
                <path class="cccssi-1" d="M27.2001953125,16.8999023438H10.9340820312c-.4970703125,0-.8999023438-.4028320312-.8999023438-.8999023438s.4028320312-.8999023438.8999023438-.8999023438h16.2661132812c.4970703125,0,.900390625.4028320312.900390625.8999023438s-.4033203125.8999023438-.900390625.8999023438Z"/>
                </g>
                <g>
                <path class="cccssi-1" d="M13.1728515625,29.7001953125h-4.0942382812c-.87890625,0-1.5942382812-.7158203125-1.5942382812-1.5947265625v-2.2255859375c0-.4970703125.4028320312-.900390625.8999023438-.900390625h1.4711914062v1.80078125h-.5712890625v1.119140625h3.6831054688v-5.103515625h-.8344726562v-1.80078125h1.734375c.4970703125,0,.8999023438.4033203125.8999023438.900390625v6.2099609375c0,.87890625-.7153320312,1.5947265625-1.5942382812,1.5947265625Z"/>
                <path class="cccssi-1" d="M22.921875,29.7001953125h-4.0947265625c-.87890625,0-1.5947265625-.7158203125-1.5947265625-1.5947265625v-1.1611328125h1.80078125v.955078125h3.681640625v-1.6513671875h-3.8876953125c-.87890625,0-1.5947265625-.7158203125-1.5947265625-1.5947265625v-2.0634765625c0-.87890625.7158203125-1.5947265625,1.5947265625-1.5947265625h4.0947265625c.87890625,0,1.59375.7158203125,1.59375,1.5947265625v1.158203125h-1.80078125v-.9521484375h-3.681640625v1.6513671875h3.888671875c.87890625,0,1.59375.7158203125,1.59375,1.5947265625v2.0634765625c0,.87890625-.71484375,1.5947265625-1.59375,1.5947265625Z"/>
                </g>
                <g>
                <path class="cccssi-1" d="M27.7958984375,11.00390625h-4.0947265625c-.87890625,0-1.5947265625-.71484375-1.5947265625-1.59375v-1.162109375h1.80078125v.9560546875h3.681640625v-1.6518554688h-3.8876953125c-.87890625,0-1.5947265625-.7153320312-1.5947265625-1.5942382812v-2.0639648438c0-.87890625.7158203125-1.59375,1.5947265625-1.59375h4.0947265625c.87890625,0,1.59375.71484375,1.59375,1.59375v1.158203125h-1.80078125v-.9521484375h-3.681640625v1.65234375h3.888671875c.87890625,0,1.59375.71484375,1.59375,1.59375v2.0639648438c0,.87890625-.71484375,1.59375-1.59375,1.59375Z"/>
                <path class="cccssi-1" d="M18.046875,11.00390625h-4.0942382812c-.87890625,0-1.59375-.71484375-1.59375-1.59375v-1.162109375h1.7998046875v.9560546875h3.6821289062v-1.6518554688h-3.8881835938c-.87890625,0-1.59375-.7153320312-1.59375-1.5942382812v-2.0639648438c0-.87890625.71484375-1.59375,1.59375-1.59375h4.0942382812c.87890625,0,1.5947265625.71484375,1.5947265625,1.59375v1.158203125h-1.80078125v-.9521484375h-3.6821289062v1.65234375h3.8881835938c.87890625,0,1.5947265625.71484375,1.5947265625,1.59375v2.0639648438c0,.87890625-.7158203125,1.59375-1.5947265625,1.59375Z"/>
                <path class="cccssi-1" d="M8.298828125,11.00390625h-4.0942382812c-.87890625,0-1.5942382812-.71484375-1.5942382812-1.59375V3.8940429688c0-.87890625.7153320312-1.59375,1.5942382812-1.59375h4.0942382812c.87890625,0,1.5942382812.71484375,1.5942382812,1.59375v1.158203125h-1.7998046875v-.9521484375h-3.6831054688v5.1040039062h3.6831054688v-.9560546875h1.7998046875v1.162109375c0,.87890625-.7153320312,1.59375-1.5942382812,1.59375Z"/>
                </g>
            </svg>',

        'pageSetting' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .ccpsi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <g>
                <path class="ccpsi-1" d="M13.7963867188,16.9191772113c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625v-3.671875c0-.4970703125.4028320312-.900390625.8999023438-.900390625s.8999023438.4033203125.8999023438.900390625v3.671875c0,.4970703125-.4028320312.900390625-.8999023438.900390625Z"/>
                <path class="ccpsi-1" d="M10.947265625,15.0832397113h-1.5551757812c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h1.5551757812c.4970703125,0,.8999023438.4033203125.8999023438.900390625s-.4028320312.900390625-.8999023438.900390625Z"/>
                <path class="ccpsi-1" d="M22.607421875,15.0832397113h-8.8090820312c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h8.8090820312c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="ccpsi-1" d="M17.4267578125,22.3234740863c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625v-3.671875c0-.4970703125.4028320312-.900390625.8999023438-.900390625s.900390625.4033203125.900390625.900390625v3.671875c0,.4970703125-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="ccpsi-1" d="M22.607421875,20.4875365863h-2.3310546875c-.4970703125,0-.900390625-.4033203125-.900390625-.900390625s.4033203125-.900390625.900390625-.900390625h2.3310546875c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <path class="ccpsi-1" d="M17.4248046875,20.4875365863h-8.0327148438c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h8.0327148438c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                </g>
                <path class="ccpsi-1" d="M24.001953125,29.7004272113H7.9985351562c-1.591796875,0-2.88671875-1.294921875-2.88671875-2.88671875V8.7521850238c0-.4970703125.4028320312-.900390625.8999023438-.900390625s.8999023438.4033203125.8999023438.900390625v18.0615234375c0,.5986328125.4877929688,1.0859375,1.0869140625,1.0859375h16.0034179688c.5986328125,0,1.0859375-.4873046875,1.0859375-1.0859375V5.1867553363c0-.5986328125-.4873046875-1.0859375-1.0859375-1.0859375h-12.4384765625c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h12.4384765625c1.591796875,0,2.88671875,1.294921875,2.88671875,2.88671875v21.626953125c0,1.591796875-1.294921875,2.88671875-2.88671875,2.88671875Z"/>
                <g>
                <path class="ccpsi-1" d="M6.0117834828,8.751758132h4.1321822113c.7840101322,0,1.4195759207-.6355657885,1.4195759207-1.4195759207V3.2l-5.551758132,5.551758132Z"/>
                <path class="ccpsi-1" d="M10.1440429688,9.6525756488h-4.1323242188c-.3637695312,0-.6923828125-.2197265625-.8315429688-.5556640625-.1391601562-.3369140625-.0620117188-.7236328125.1953125-.9814453125l5.5517578125-5.5517578125c.2578125-.2568359375.64453125-.3359375.98046875-.1943359375.3364257812.138671875.5556640625.466796875.5556640625.8310546875v4.1318359375c0,1.279296875-1.0405273438,2.3203125-2.3193359375,2.3203125ZM8.1845703125,7.8517943988h1.9594726562c.2866210938,0,.51953125-.232421875.51953125-.51953125v-1.958984375l-2.4790039062,2.478515625Z"/>
                </g>
            </svg>',

        'siteSetting' => '<svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                <style>
                    .ccssi-1 {
                    stroke-width: 0px;
                    }
                </style>
                </defs>
                <g>
                <g>
                    <path class="ccssi-1" d="M11.654296875,17.6901404191c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625v-4.23046875c0-.4970703125.4028320312-.900390625.8999023438-.900390625s.8999023438.4033203125.8999023438.900390625v4.23046875c0,.4970703125-.4028320312.900390625-.8999023438.900390625Z"/>
                    <path class="ccssi-1" d="M8.7998046875,15.5749060441h-2.3999023438c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h2.3999023438c.4970703125,0,.8999023438.4033203125.8999023438.900390625s-.4028320312.900390625-.8999023438.900390625Z"/>
                    <path class="ccssi-1" d="M25.599609375,15.5749060441h-13.9418945312c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h13.9418945312c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                </g>
                <g>
                    <path class="ccssi-1" d="M20.345703125,23.3004919816c-.4970703125,0-.900390625-.4033203125-.900390625-.900390625v-4.23046875c0-.4970703125.4033203125-.900390625.900390625-.900390625s.900390625.4033203125.900390625.900390625v4.23046875c0,.4970703125-.4033203125.900390625-.900390625.900390625Z"/>
                    <path class="ccssi-1" d="M25.599609375,21.1852576066h-2.3994140625c-.4970703125,0-.900390625-.4033203125-.900390625-.900390625s.4033203125-.900390625.900390625-.900390625h2.3994140625c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                    <path class="ccssi-1" d="M20.341796875,21.1852576066H6.3999023438c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h13.9418945312c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                </g>
                </g>
                <g>
                <path class="ccssi-1" d="M27.0029296875,29.6999060441H4.9970703125c-1.4868164062,0-2.6967773438-1.2099609375-2.6967773438-2.697265625V4.9967810441c0-1.4873046875,1.2099609375-2.697265625,2.6967773438-2.697265625h22.005859375c1.4873046875,0,2.697265625,1.2099609375,2.697265625,2.697265625v22.005859375c0,1.4873046875-1.2099609375,2.697265625-2.697265625,2.697265625ZM4.9970703125,4.1002966691c-.4946289062,0-.8969726562.40234375-.8969726562.896484375v22.005859375c0,.494140625.40234375.896484375.8969726562.896484375h22.005859375c.494140625,0,.896484375-.40234375.896484375-.896484375V4.9967810441c0-.494140625-.40234375-.896484375-.896484375-.896484375H4.9970703125Z"/>
                <path class="ccssi-1" d="M28.7998046875,7.3004919816H3.2001953125c-.4970703125,0-.8999023438-.4033203125-.8999023438-.900390625s.4028320312-.900390625.8999023438-.900390625h25.599609375c.4970703125,0,.900390625.4033203125.900390625.900390625s-.4033203125.900390625-.900390625.900390625Z"/>
                <rect class="ccssi-1" x="3.9265844537" y="3.9853366175" width="24.2944121393" height="2.3190331495"/>
                </g>
            </svg>'
    );


    return $icons;

}