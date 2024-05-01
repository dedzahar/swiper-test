import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

let swiper = new Swiper('.mySwiper', {
    modules: [ Navigation ],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
console.log(swiper);