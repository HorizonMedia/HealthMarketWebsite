import { useStaticQuery, graphql } from "gatsby";

export const useVisionPageQuery = () => {
    const data = useStaticQuery(graphql`
        query VisionQuery {
            page: wpPage(databaseId: {eq: 10223}) {
                visionPageCustomFields {
                    visionSection2 {
                        sectionColor
                        visionCtaColumns {
                            column1 {
                            button {
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
                            contentType
                            image {
                                sourceUrl
                            }
                            }
                            column2 {
                            button {
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
                            contentType
                            image {
                                sourceUrl
                            }
                            }
                            column3 {
                            button {
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
                            image {
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
                            relatedContent1 {
                            content
                            heading
                            link
                            image {
                                sourceUrl
                            }
                            }
                            relatedContent2 {
                            content
                            heading
                            link
                            image {
                                sourceUrl
                            }
                            }
                            relatedContent3 {
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
                    list {
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
                            link
                            text
                        }
                        heroButton3 {
                            link
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
            }
        }
    `)
    return data
}