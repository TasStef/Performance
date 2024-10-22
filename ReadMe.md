# Performance Report

This is a comparison between two web applications. The original application is a simple web application that displays a list of items. The optimized application is a modified version of the original application that has been optimized for performance.

The summary reports were created with Chrome lighthouse and can be found at:
- [Original App](./Original%20performance%20report.pdf)
- [Optimized App](./Optimized%20performance%20report.pdf)

```Note: the throttling was activated for emphasized perfromance.```

## Areas of Optimization:
1. Minimize text (.min.js files)
2. Minimize images (compress depending on purpose)
3. Media Queries (optimize for mobile and mid screens)
4. Minimize # of files (Combining CSS and JS files)

## Results:
The most outstanding differences were in:
- LCP (10.2 seconds vs 1.1 seconds)
- Speed Index (11.9 seconds vs 0.9 seconds)
- Performance (75% vs 90%)
