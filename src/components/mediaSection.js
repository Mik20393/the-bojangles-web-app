import styles from "./mediaSection.module.css";

import Instagram from "instagram-web-api";

export default function MediaSection({ posts }) {
    console.log({posts})
    return(
        <div className={styles.mediaSectionContainer}>
            
        </div>
    )
}

export async function getInstagramFeed(context) {

    const username = 'bojangles_music'
    const password = 'Bojanglesglasgow2024.' 
    
    const client = new Instagram({username: username, password: password})
    
    await client.login();
    
    const response = await client.getPhotosByUsername({
        username: username,
    });
    
        return {
            props: {
                posts: response.user.edge_owner_to_timeline_media.edges,
            }, // will be passed to the page component as props
      };
}