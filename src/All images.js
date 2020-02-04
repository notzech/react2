// import React from 'react';
import logo from './assets/images/logo-walker.png';
import worded from './assets/images/WCC-worded-logo.png';
import hc1 from './assets/images/hc1.JPG';
import cosmo2 from './assets/images/cosmo2.JPG';
import mo1 from './assets/images/mo1.JPG';
import facebooklogo from './assets/images/facebook-logo.png';
import twitterlogo from './assets/images/twitter-logo.png';
import wcc2 from './assets/images/WCC_logo.png';
import wcclogo2 from './assets/images/WCC_logo.png';
import mLaw from './assets/images/Law.png';
import mEspich from './assets/images/Espich.png';
import placeholder from './assets/images/placeholder.png';
const e = [];

export function wordedLogo() {
return worded;
}
export function image(index) {

    e[0] = logo;
    e[1] = worded;
    e[2] = hc1;
    e[3] = cosmo2;
    e[4] = mo1;
    e[5] = facebooklogo;
    e[6] = twitterlogo;
    e[7] = wcc2;
    e[8] = wcclogo2;
    e[9] = mLaw;
    e[10] = mEspich;
    e[11] = placeholder;

    return e[index]
}




