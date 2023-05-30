# simple ts runner (for coding challenge alike)

__the convention:__

put the folder of the typescript module inside the src e.g in this case "day1"

```
mkdir src/day1
touch src/day1/index.ts
```

inside you could put the operation on top level, or you must put the default main function to be executed

```
// index.ts

export default function main() {
  console.log('hello world');
}
```

just execute it

```
yarn exe day1
```

and,
voila!

