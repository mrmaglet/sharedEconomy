# Nextui table

The nextui table makes calculations on render to make sure the header cols match the body cols.
This function will break of you pass an empty array. Therefore, the best way to make sure you don't get any
errors - check for the table length before rendering.

```ts
if (tableData?.length === 0) return null
```
