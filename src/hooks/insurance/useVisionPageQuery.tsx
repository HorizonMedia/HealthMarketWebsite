import { useStaticQuery, graphql } from "gatsby";

export const useVisionPageQuery = () => {
    const data = useStaticQuery(graphql`
        query VisionQuery {
            page: wpPage(databaseId: {eq: 10223}) {
                id
                slug
                seo {
                    fullHead
                    title
                    metaDesc
                }
                visionPageCustomFields {
                    visionSection2 {
                        sectionColor
                        visionCtaColumns {
                            column1 {
                            col1Button {
                                button1 {
                                link
                                text
                                }
                                button2 {
                                link
                                text
                                }
                                buttonStyle
                            }
                            col1Heading
                            col1Image {
                                sourceUrl
                            }
                            }
                            column2 {
                            col2Button {
                                button1 {
                                link
                                text
                                }
                                button2 {
                                link
                                text
                                }
                                buttonStyle
                            }
                            col2Heading
                            col2Image {
                                sourceUrl
                            }
                            }
                            column3 {
                            col3Button {
                                button1 {
                                link
                                text
                                }
                                button2 {
                                link
                                text
                                }
                                buttonStyle
                            }
                            col3Heading
                            col3Image {
                                sourceUrl
                            }
                            }
                        }
                        visionCtaStyle
                    }
                    visionSection3 {
                        sectionHeading
                        sectionColor
                        resources {
                            resource1 {
                                content
                                heading
                                image {
                                    sourceUrl
                                }
                                link
                            }
                            resource2 {
                                content
                                heading
                                link
                                image {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    visionSection4 {
                        cta {
                            link
                            text
                        }
                        relatedContent {
                            visionRelatedContent1 {
                            content
                            heading
                            link
                            image {
                                sourceUrl
                            }
                            }
                            visionRelatedContent2 {
                            content
                            heading
                            link
                            image {
                                sourceUrl
                            }
                            }
                            visionRelatedContent3 {
                            content
                            heading
                            link
                            image {
                                sourceUrl
                            }
                            }
                        }
                        sectionColor
                        sectionHeading
                    }
                    visionSection1 {
                    sectionColor
                    sectionHeading
                    sectionSubheading
                    section1List {
                        listHeading
                        listItem1 {
                            text
                        }
                        listItem2 {
                            text
                        }
                        listItem3 {
                            text
                        }
                    }
                    }
                }
                pageHeroFields {
                    callUs
                    headline
                    subheadline
                    heroButtons {
                        heroButton1 {
                            text
                        }
                        heroButton2 {
                            text
                        }
                        heroButton3 {
                            text
                        }
                    }
                    heroImage {
                        sourceUrl
                    }
                    mobileHeroImage {
                        sourceUrl
                    }
                }
                disclaimers {
                    disclaimer
                }
                calloutsCustomField {
                    isActive
                    callouts {
                      callout1 {
                        number
                        tagline
                        title
                        description
                        disclaimer
                      }
                      callout2 {
                        number
                        tagline
                        title
                        description
                        disclaimer
                      }
                      callout3 {
                        number
                        tagline
                        title
                        description
                        disclaimer
                      }
                    }
                }
            }
        }
    `)
    return data
}