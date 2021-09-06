# Slug generators benchmarks
## Machine specs

**OS:** Windows 10 Pro

**CPU:** Intel Core i7 6600U (Skylake)

**RAM:** 16GB DDR3

## Benchmarks

The benchmark results are listed below. Less is faster.

### 1K samples:

| package name            | average (ms)           |
|-------------------------|------------------------|
| [`url-record`](https://www.npmjs.com/package/url-record) | `0.011908920299999884` |
| [`slugify`](https://www.npmjs.com/package/slugify) | `0.012712733400000188` |
| [`slug`](https://www.npmjs.com/package/slug) | `0.028851625300000378` |
| [`url-slug`](https://www.npmjs.com/package/url-slug) | `0.039040824200000095` |
| [`@sindresorhus/slugify`](https://www.npmjs.com/package/@sindresorhus/slugify) | `0.7996945617000023`   |

### 10K samples:

| package name            | average (ms)           |
|-------------------------|------------------------|
| [`url-slug`](https://www.npmjs.com/package/url-slug) | `0.03163327500000678`  |
| [`url-record`](https://www.npmjs.com/package/url-record) | `0.07328641479998559`  |
| [`slugify`](https://www.npmjs.com/package/slugify) | `0.16352523729999396`  |
| [`slug`](https://www.npmjs.com/package/slug) | `0.2637068009999969`   |
| [`@sindresorhus/slugify`](https://www.npmjs.com/package/@sindresorhus/slugify) | `6.189630190599934`    |
