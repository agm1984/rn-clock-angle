# INANGLES Clock Angler

[![clock_Angle_Example.png](https://s9.postimg.cc/vfgyaz0sv/clock_Angle_Example.png)](https://postimg.cc/image/44vn31xvv/)

> This React Native application allows you to view the angles between the hour and minute hands on a clock. It was built using test-driven development, and it serves minimal utility other than acting as a base for forensic analysis.

## Install
``` bash
$ git clone https://github.com/agm1984/rn-clock-angle.git
$ cd rn-clock-angle
$ npm install
$ npm run android
```

## Test
> This reop uses Jest `verbose: true` mode. See the package.json file to disable it.

#### Standard
``` bash
$ npm test
```

#### Coverage Test
`Latest:` _90.63%_ coverage
``` bash
$ npm test -- --coverage
```

## Formulas

#### Rotate from pivot point
```
rad = angle * Math.PI / 180
transformX(Math.cos(angle) * dx - Math.sin(angle) * dy)
transformY(Math.sin(angle) * dx + Math.cos(angle) * dy)
rotate(angle+"deg")
```

#### Clock Angle Formula
```
((m * 6) - ((h * 30) + (m * 0.5)))
```

#### Clock Angle Coterminal Formula
```
(360 - ((m * 6) - ((h * 30) + (m * 0.5))))
```

## Research Links

1. Analog Clock https://enlight.nyc/clock
2. Clock Angle
https://sites.google.com/site/mymathclassroom/geometry/how-to-solve-clock-angle-problems-geometrically
3. Clock Angle
https://www.glassdoor.com.au/Interview/what-is-angle-between-hour-hand-and-minute-hand-in-clock-at-4-20-what-is-biggest-conflict-management-you-have-handled-in-QTN_497599.htm

## Contact

#### Email

adam@adammackintosh.net

#### GitHub

Submit any questions as issues on GitHub: https://github.com/agm1984/rn-clock-angle/issues