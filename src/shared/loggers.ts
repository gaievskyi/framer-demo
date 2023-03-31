// Tool for tracking and labeling animation/component state

export const framerLogger = (label: string) =>
  console.log(`%c${label}: animation complete`, 'color: red')

export const stateLogger = (label: string, mounted: boolean) => {
  mounted
    ? console.log(`%c${label}: mounted`, 'color: green')
    : console.log(`%c${label}: unmounted`, 'color: orange')
}
