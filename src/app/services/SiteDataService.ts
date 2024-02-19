import { request, gql } from 'graphql-request';
import { SiteData } from "../redux/Store";

export const fetchSiteData = async (): Promise<SiteData> => {
    const endpoint = 'http://localhost:3001/'; // Adjust the endpoint URL

    const query = gql`
        query {
            aboutText {
                text
            }
            counter {
                icon
                title
                count
            }
            featureSkill {
                icon
                title
                text
            }
            contactText {
                text
            }
            contactDetail {
                icon
                title
                text
                link
            }
            homeText {
                text
                animationStrings
            }
            socialLink {
                key
                icon
                link
                title
            }
            recommendation {
                img
                name
                designation
                say
            }
            experience {
                title
                date
                description
            }
            education {
                title
                date
                description
            }
            certificate {
                title
                img
                type
            }
        }
    `;

    try {
        const data = await request(endpoint, query);
        return data as SiteData;
    } catch (error) {
        console.error('Error fetching site data:', error);
        throw error;
    }
};
