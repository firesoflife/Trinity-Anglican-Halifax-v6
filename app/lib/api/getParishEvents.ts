import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getParishEvents(): Promise<ParishEvents[]> {
	return client.fetch(
		groq`*[_type == "parishEvents"] | order(sortOrder asc){ 
        ...,
        eventTitle,
        slug,
        description,
        body[]{
            ...,
            asset->{
                _id,
                url
            }
        },
        primaryImage {
            asset->{
                _id,
                url
            },
            crop,
            hotspot
        },
        eventDetails {
            eventType,
            date,
            recurrence {
                dayOfWeek,
                frequency,
                timeOfDay
            }
        },
        pageBannerImage {
            asset->{
                _id,
                url
            },
            crop,
            hotspot
        },
        sortOrder
    }`
	);
}
