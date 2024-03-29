# Namaste React

## Parcel

- Creates a Dev Build
- Creates a Local Server
- Does HMR = Hot Module Replacement
- Uses File Watching Algorithm - Written in C++ to do HMR
- Every time we save a file it recreates the builds    and shows how much time it took it is mostly in milliseconds or seconds.
- Because it is caching the code that is why it takes so less time to rebuild it.
- Caching - for Faster Builds (it caches in parcel-cache folder which is available in your folder structure on local machine).
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing (Read on Google)
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- Also gives us a way to host app on HTTPs
- Tree Shaking (algo) - remove unused code
- Different dev and prod builds

## Two types of Export/Import

- Default Export/Import
  - Export: export default ComponentName/VariableName
  - Import: import ComponentName/VariableName from "path"
  - Used for exporting and importing only one thing from the file
- Named Export/Import
  - Export: export ComponentName/VariableName
  - Import: import {ComponentName/VariableName} from "path"
  - Used for exporting and importing multiple thing from the file

## React Hooks

    - They are normal JS utility Functions - (written by react developers)
    - They have written this inside react library

- They are two very important hooks
  - useState() - used to generate super powerful variables in react
  - useEffect()
