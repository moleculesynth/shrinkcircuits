# Shrink Circuits

[Shrink Circuits](https://shrinkcircuits.org) is a mobile MakerLab and an
exploration of workshops, materials, circuits, and design for learning.

This site is a visual archive of the project in motion: portable electronics
kits, hands-on workshops, experiments in material play, and collaborative
learning environments. It preserves the original photography and keeps the
presentation deliberately direct so the work can speak for itself.

## Explore the work

- **S.T.E.P. Lab — STEAM Team Extended Play:** a mobile makerspace and design
  workshop.
- **WSU–DTC 338:** an undergraduate maker-culture course at Washington State
  University combining hands-on fabrication, physical computing, and creative
  programming. [View the course site](https://github.com/moleculesynth/maker-dtc338/blob/master/README.md).
- **Molecule Wall:** *Circuitree*, a tactile, collaborative electronics
  installation at Forest Park School. [View the project documentation](https://github.com/mplavcan/ForestParkSchoolWALL).

## Launch grant

Shrink Circuits received a 2014 grant from the Portland chapter of the Awesome
Foundation. [Read about the Shrink Circuits Nomad Lab grant](https://www.awesomefoundation.org/en/projects/30742-shrink-circuits-nomad-lab).

## About this site

The site pairs the original image archive with a lightweight, responsive
interface. It is built with Next.js and React, uses the open-source Roboto and
Roboto Condensed typefaces, and is published as a static site on GitHub Pages.

## GitHub Pages deployment

Run `npm run pages:build` to create the static export and synchronize the
Pages-ready files into the repository root. The generated output includes the
homepage, every project route, bundled styles and scripts, images, the custom
domain file, and `.nojekyll` so GitHub Pages serves Next.js assets correctly.

Run `npm test` before publishing. GitHub Pages serves the root of the
`gh-pages` branch at [shrinkcircuits.org](https://shrinkcircuits.org).
