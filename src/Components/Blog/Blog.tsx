import { sanityClient } from '@utils/configSanity'
import { PortableText } from 'next-sanity';

interface IBlog{
    _id: string;
    title: string;
    description: any;
    _createdAt: string;
}

async function getData() {
    const query = `*[_type == "blog"]`
    const data = sanityClient.fetch(query);
    return data as unknown as IBlog[];
}

const Blog = async () => {
    const data = (await getData()) as IBlog[];
    return (
        <div className="container">
            <h1>Blog</h1>
            {/* Blog Items */}
            <div>
                {data?.map((item) => (
                    <div key={item?._id}>
                        <div>
                            <span>{item?.title}</span>
                        </div>
                        <div>
                            <span>  
                                <PortableText value={item?.description} />
                            </span>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Blog;