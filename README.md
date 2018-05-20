# INANGLES Clock Angler

## Special Links

1. Analog Clock https://enlight.nyc/clock
2. Clock Angle
https://sites.google.com/site/mymathclassroom/geometry/how-to-solve-clock-angle-problems-geometrically
3. Clock Angle
https://www.glassdoor.com.au/Interview/what-is-angle-between-hour-hand-and-minute-hand-in-clock-at-4-20-what-is-biggest-conflict-management-you-have-handled-in-QTN_497599.htm

## Formulas

### Rotate from pivot point
```
rad = angle * Math.PI / 180
transformX(Math.cos(angle) * dx - Math.sin(angle) * dy)
transformY(Math.sin(angle) * dx + Math.cos(angle) * dy)
rotate(angle+"deg")
```

### Clock angle formula
```
m * 6 - (h * 30 + m * 0.5)
```

#### Coterminal
```
360 - (m * 6 - (h * 30 + m * 0.5))
```

### Degrees to Radians

