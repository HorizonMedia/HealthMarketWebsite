import { useStaticQuery, graphql } from "gatsby";

export const useShortTermPageQuery = () => {
  const data = useStaticQuery(graphql`
    query ShortTermQuery {
      page: wpPage(databaseId: {eq: 9162}) {
        id
        slug
        seo {
          fullHead
          title
          metaDesc
        }
        pageHeroFields {
          headline
          subheadline
          heroImage {
            sourceUrl
          }
          mobileHeroImage {
            sourceUrl
          }
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
          callUs
        }
        shortTermPageCustomFields {
          shorttermSection1 {
            color
            heading
            subheading
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
              listItem4 {
                text
              }
            }
          }
          shorttermSection2 {
            color
            heading
            subheading
            shorttermAccordions {
              shorttermAccordion1 {
                title
                content
              }
              shorttermAccordion2 {
                title
                content
              }
              shorttermAccordion3 {
                title
                content
              }
            }
          }
          shorttermSection3 {
            color
            heading
            shorttermAccordions {
              shorttermAccordion1 {
                title
                content
              }
              shorttermAccordion2 {
                title
                content
              }
              shorttermAccordion3 {
                title
                content
              }
              shorttermAccordion4 {
                title
                content
              }
              shorttermAccordion5 {
                title
                content
              }
            }
          }
          shorttermSection4 {
            color
            cta {
              ctaStyle
              ctaBgColor
              ctaColumns {
                column1 {
                  contentType
                  heading
                }
                column2 {
                  contentType
                  button {
                    buttonStyle
                    button1 {
                      text
                      link
                    }
                    button2 {
                      text
                      link
                    }
                  }
                }
              }
            }
          }
          shorttermSection5 {
            color
            heading
            relatedContent {
              relatedContent1 {
                title
                content
                link
                image {
                  sourceUrl
                }
              }
              relatedContent2 {
                title
                link
                content
                image {
                  sourceUrl
                }
              }
              relatedContent3 {
                title
                link
                content
                image {
                  sourceUrl
                }
              }
            }
            cta {
              text
              link
            }
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