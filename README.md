# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue with React Native's `FlatList` component when handling large datasets and provides a solution to optimize rendering.

## Problem

The original `FlatList` implementation suffers from performance degradation due to inefficient re-rendering.  Even when data hasn't changed, items can be re-rendered, leading to lag and jank, especially on lower-end devices.

## Solution

The optimized version uses `keyExtractor` and `ItemSeparatorComponent` to improve rendering efficiency. `keyExtractor` ensures that React can correctly identify and reuse list items, while `ItemSeparatorComponent` adds a separator without affecting rendering performance.  Additionally, techniques like using `React.memo` for functional components can help reduce unnecessary re-renders.