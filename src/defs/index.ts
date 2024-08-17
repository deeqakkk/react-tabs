export interface IHeadingType {
    value: string
    label: keyof IHeaderDescription
}

export interface IHeaderDescription {
    whyReact: string[]
    coreFeatures: string[]
    relatedResources: string[]
    reactVsJs: string[]
}

export type HeadingLabel = keyof IHeaderDescription;

