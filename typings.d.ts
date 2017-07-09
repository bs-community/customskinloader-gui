declare module 'react-inline-grid' {
  import React from 'react'

  export class Grid extends React.Component<{ children?: React.ReactNode }, null> { }

  export class Row extends React.Component<{ is?: string, children?: React.ReactNode }, null> { }

  export class Cell extends React.Component<{ is: string }, null> { }
}

declare module 'gulp-zip' {
  export default function (fileName: string)
}

declare module 'execa' {
  export default function (file: string, arguments?: string[], options?: Object)

  export function stdout (file: string, arguments?: string[], options?: Object)

  export function stderr (file: string, arguments?: string[], options?: Object)

  export function shell (command: string, options?: Object)

  export function sync (file: string, arguments?: string[], options?: Object)

  export function shellSync (command: string, options?: Object)
}
