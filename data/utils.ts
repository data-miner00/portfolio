import stackDetails from './stackDetails.json'

export type StackDetails = {
  [handle: string]: {
    name: string
    imgSrc: string
  }
}

export const stackDetailsMapper = (stacks: Array<string>) =>
  stacks.map((stack) => (stackDetails as StackDetails)[stack])
