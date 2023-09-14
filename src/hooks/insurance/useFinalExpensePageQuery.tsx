import { useStaticQuery, graphql } from "gatsby";

export const useFinalExpensePageQuery = () => {
  const data = useStaticQuery(graphql`
    query FinalExpenseQuery {
      page: wpPage(databaseId: {eq: 7517}) {
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
        disclaimers {
          disclaimer
        }
        finalExpensePageCustomFields {
          finalExpenseSection1 {
            heading
            subheading
            color
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
            button {
              text
              link
            }
          }
          finalExpenseSection2 {
            heading
            color
            accordions {
              accordion1 {
                title
                content
              }
            }
          }
          finalExpenseSection3 {
            color
            style
            columns {
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
          finalExpenseSection4 {
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
              text
              link
            }
          }
        }
      }
    }
  `)
  
  return data
}