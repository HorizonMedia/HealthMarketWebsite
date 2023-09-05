import { useStaticQuery, graphql } from "gatsby";

export const useMedicareAdvantagePageQuery = () => {
  const data = useStaticQuery(graphql`
    query MedicareAdvantageQuery {
      page: wpPage(databaseId: {eq: 7960}) {
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
        medicareAdvantagePageCustomFields {
          medicareAdvPostHeroDisclaimer
          medicareAdvSection1 {
            color
            heading
            medicareAdvAccordions {
              medicareAdvAccordion1 {
                heading
                content
              }
              medicareAdvAccordion2 {
                heading
                content
              }
              medicareAdvAccordion3 {
                heading
                content
              }
            }
            medicareAdvPostAccordionText
          }
          medicareAdvSection2 {
            color
            heading
            medicareAdvCards {
              medicareAdvCard1 {
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
              medicareAdvCard2 {
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
              medicareAdvCard3 {
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
          }
          medicareAdvSection3 {
            color
            medicareAdvCtaStyle
            medicareAdvColumns {
              medicareAdvColumn1 {
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
              medicareAdvColumn2 {
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
          medicareAdvSection4 {
            heading
            color
            relatedContent {
              relatedContent1 {
                image {
                  sourceUrl
                }
                title
                link
                content
              }
              relatedContent2 {
                image {
                  sourceUrl
                }
                title
                link
                content
              }
              relatedContent3 {
                image {
                  sourceUrl
                }
                title
                link
                content
              }
            }
            cta {
              link
              text
            }
          }
          guideCta {
            button {
              text
              link
            }
            headline
            headlineMobile
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