import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      home: wpPage(isFrontPage: {eq: true}) {
        id
        metadataCustomFields {
          metaTitle
          metaDescription
          metaKeywords
        }
        pageHeroFields {
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
          headline
          subheadline
        }
        homePageCustomFields {
          homeSection1 {
            color
            heading
            subheading
            tiles {
              tile1 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile2 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile3 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile4 {
                image {
                  sourceUrl
                }
                title
                link
              }
              tile5 {
                image {
                  sourceUrl
                }
                title
                link
              }
            }
          }
          homeSection2 {
            color
            columns {
              column1 {
                image {
                  sourceUrl
                }
              }
              column2 {
                heading
              }
              column3 {
                button {
                  text
                  link
                }
              }
            }
          }
          homeSection3 {
            color
            heading
            homeListItems {
              homeListItem1 {
                heading
                content
              }
              homeListItem2 {
                heading
                content
              }
              homeListItem3 {
                heading
                content
              }
            }
            sectionCta {
              link
              text
            }
          }
        }
        disclaimers {
          disclaimer
        }
      }
    }
  `)

  return data
}
