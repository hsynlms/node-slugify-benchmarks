'use strict'

// sample list
const samples = [
  '"Ahmet Kaya"',
  'nobodY d0es_it bett€r',
  'Echo Dot (3rd generation) | Smart speaker with clock and Alexa, Sandstone fabric',
  'Mount & Blade II: Bannerlord',
  'Sass Grid System with sass-greedy',
  'A Little History of the World Paperback – Illustrated, 19 Aug. 2008',
  'Ueber die Elementarquanta der Materie und der Elektricität',
  'The Node.js Benchmarking Working Group: Measuring Performance for A Speedier Node.js',
  'Introducing Node.js Working Group Series: From Security to Performance — Learn How Node.js Innovates',
  'The Node.js Foundation and JS Foundation Announce an Intent to Merge (A Message from the Boards and a FAQ around the Announcement)'
]

// benchmark results
const results = [
  { name: '@sindresorhus/slugify', pkg: require('@sindresorhus/slugify'), average: 0 },
  { name: 'url-record', pkg: require('url-record'), average: 0 },
  { name: 'url-slug', pkg: require('url-slug'), average: 0 },
  { name: 'slugify', pkg: require('slugify'), average: 0 },
  { name: 'slug', pkg: require('slug'), average: 0 }
]

// perf
let hrstart = null
let hrend = null

// loop all examples and get benchmark results for each slug generator
for (let x = 0; x < results.length; x++) {
  for (let i = 0; i < 1000; i++) {
    for (let y = 0; y < samples.length; y++) {
      hrstart = process.hrtime()

      // generate!
      results[x].pkg(samples[y])

      hrend = process.hrtime(hrstart)

      // put the result into the list
      results[x].average += hrend[1] / 1000000
    }
  }
}

// print out results
console.log(
  require('chalk')
    .hex('b1b1b1')
    .bgHex('121212')
    .bold(` The benchmark results (${samples.length * 1000} samples) are listed below. Less is faster `)
)

console.table(
  results
    .sort((a, b) => a.average - b.average)
    .map(
      x => {
        return {
          'package name': x.name,
          'average (ms)': x.average / (samples.length * 1000)
        }
      }
    )
)
