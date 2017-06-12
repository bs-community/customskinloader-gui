declare module 'react-inline-grid' {
  import React from 'react'

  export class Grid extends React.Component<{ children?: React.ReactNode }, null> { }

  export class Row extends React.Component<{ is?: string, children?: React.ReactNode }, null> { }

  export class Cell extends React.Component<{ is: string }, null> { }
}
