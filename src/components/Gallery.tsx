import Img from "./Image.tsx"
import type { ImgProps } from "./Interfaces.tsx"
export default function Gallery() {
    let pictures: ImgProps[] = [
        {
            src: "/0G3A0056-2.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '190mm'], ['Shutter Speed', '1/2000'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/0G3A0090.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '95mm'], ['Shutter Speed', '1/2000'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/0G3A0124-2.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '100mm'], ['Shutter Speed', '1/1000'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/0G3A0142.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '70mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/0G3A9854.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '35mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9857.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '35mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9859.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '48mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9864.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '70mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9882.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '70mm'], ['Shutter Speed', '1/250'], ['F-Stop', 'f4.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9885.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '50mm'], ['Shutter Speed', '1/320'], ['F-Stop', 'f4.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/0G3A9887.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R5'], ['Focal Length', '190mm'], ['Shutter Speed', '1/1250'], ['F-Stop', 'f4.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMGL2091.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '50mm'], ['Shutter Speed', '1/80'], ['F-Stop', 'f4.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL2126.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL2195.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/1000'], ['F-Stop', 'f4.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL2239.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f4.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL2538.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/125'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2545.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/80'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2546.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2553.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/320'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2780.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/1250'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2808.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f2.8'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL2853.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '40mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f1.4'], ['Lens', '40mm F1.4 DG HSM | Art 018']]
        },
        {
            src: "/IMGL3504.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '50mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3517.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/100'], ['F-Stop', 'f5.6'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3526.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '24mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f5.6'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3528.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '24mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3529.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3557.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '24mm'], ['Shutter Speed', '1/500'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3562.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/1000'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3579-2.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '41mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3585-2.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/160'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3616.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/125'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3649.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/160'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3654.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f7.1'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3658.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/40'], ['F-Stop', 'f7.1'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3701.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f11.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3723.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '31mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3744.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/2500'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3752.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '24mm'], ['Shutter Speed', '1/1000'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3758.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '24mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f5.6'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3774.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3793.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3800.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/30'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3807.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '35mm'], ['Shutter Speed', '1/2'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3838.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '48mm'], ['Shutter Speed', '1/30'], ['F-Stop', 'f3.2'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3976.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/5'], ['F-Stop', 'f10.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3987.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/3'], ['F-Stop', 'f11.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3989.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/3'], ['F-Stop', 'f11.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL3994.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '50mm'], ['Shutter Speed', '1/25'], ['F-Stop', 'f9.0'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMGL4012.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R6m2'], ['Focal Length', '70mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f2.8'], ['Lens', 'RF24-70mm F2.8 L IS USM']]
        },
        {
            src: "/IMG_0185.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '35mm'], ['Shutter Speed', '1/5'], ['F-Stop', 'f11.0'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_0265.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/80'], ['F-Stop', 'f6.3'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_0292.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '32mm'], ['Shutter Speed', '1/3'], ['F-Stop', 'f14.0'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_3216.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f32.0'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_3229.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f32.0'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_3934.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/4000'], ['F-Stop', 'f4.5'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4070.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/500'], ['F-Stop', 'f20.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4076.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f20.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4120.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '88mm'], ['Shutter Speed', '1/2000'], ['F-Stop', 'f16.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4161.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/500'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4282.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f22.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4511.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f3.2'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4532.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '100mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f10.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4586.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '190mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4670.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/2000'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4778.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/25'], ['F-Stop', 'f7.1'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_4889.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '190mm'], ['Shutter Speed', '1/2'], ['F-Stop', 'f5.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5117.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '80mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f9.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5206.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f3.5'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5246_1.jpg",
            alt: "TODO",
            details: [['Camera', 'EOS R8']]
        },
        {
            src: "/IMG_5271.jpg",
            alt: "TODO",
            details: [['Camera', 'EOS R8']]
        },
        {
            src: "/IMG_5274.jpg",
            alt: "TODO",
            details: [['Camera', 'EOS R8']]
        },
        {
            src: "/IMG_5501-2.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/3200'], ['F-Stop', 'f4.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5686.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '190mm'], ['Shutter Speed', '1/3200'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5780.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/1600'], ['F-Stop', 'f4.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_5784.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f7.1'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_6048.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f4.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_6911.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f13.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_6965.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '123mm'], ['Shutter Speed', '1/250'], ['F-Stop', 'f5.6'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_6992.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '102mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f11.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7193.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/0'], ['F-Stop', 'f5.6'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7194.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/0'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7694.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/800'], ['F-Stop', 'f10.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7700.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '35mm'], ['Shutter Speed', '1/640'], ['F-Stop', 'f6.3'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/IMG_7739.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '100mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f20.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7763.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/60'], ['F-Stop', 'f32.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_7766.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '70mm'], ['Shutter Speed', '1/50'], ['F-Stop', 'f32.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8235.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/320'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8256.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '135mm'], ['Shutter Speed', '1/200'], ['F-Stop', 'f9.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8298.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '168mm'], ['Shutter Speed', '1/250'], ['F-Stop', 'f9.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8301.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '180mm'], ['Shutter Speed', '1/250'], ['F-Stop', 'f9.0'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8323.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/500'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/IMG_8389.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '200mm'], ['Shutter Speed', '1/25'], ['F-Stop', 'f2.8'], ['Lens', 'EF70-200mm f/2.8L IS II USM']]
        },
        {
            src: "/_MG_0441.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f6.3'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/_MG_0500.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/400'], ['F-Stop', 'f6.3'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },
        {
            src: "/_MG_1433.jpg",
            alt: "TODO",
            details: [['Camera', 'Canon EOS R8'], ['Focal Length', '50mm'], ['Shutter Speed', '1/100'], ['F-Stop', 'f6.3'], ['Lens', 'RF24-50mm F4.5-6.3 IS STM']]
        },

    ]
    function shuffle(array: any[]) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }
    shuffle(pictures)
    let picturesElement = pictures.map(x => (
        <div className="flex">
            <Img src={x.src} alt="" details={x.details} />
        </div>
    ))
    return (
        <div id="gallery" className="flex flex-wrap justify-center gap-5 w-[90vw]">
            {picturesElement}
        </div>
    )
}