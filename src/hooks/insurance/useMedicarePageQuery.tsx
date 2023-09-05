import { useStaticQuery, graphql } from "gatsby";

export const useMedicarePageQuery = () => {
  const data = useStaticQuery(graphql`
    query MedicareQuery {
      page: wpPage(databaseId: {eq: 1340}) {
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
          heroDisclaimer
        }
        medicarePageCustomFields {
          medicareSection1 {
            color
            heading
            medicareCards {
              medicareCard1 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              medicareCard2 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
              medicareCard3 {
                icon {
                  sourceUrl
                }
                mobile {
                  sourceUrl
                }
                link
                title
                content
              }
            }
            disclaimer
          }
          medicareSection2 {
            color
            heading
            medicareAccordions {
              medicareAccordion1 {
                heading
                content
              }
              medicareAccordion2 {
                heading
                content
              }
              medicareAccordion3 {
                heading
                content
              }
              medicareAccordion4 {
                heading
                content
              }
              medicareAccordion5 {
                heading
                content
              }
              medicareAccordion6 {
                heading
                content
              }
            }
          }
          medicareSection3 {
            color
            medicareCtaStyle
            medicareColumns {
              medicareColumn1 {
                heading
                button {
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
              medicareColumn2 {
                heading
                button {
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