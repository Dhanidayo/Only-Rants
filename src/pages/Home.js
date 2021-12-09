import useFetch from '../Hooks/useFetch';
import BlogList from '../components/BlogList';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //data is a global name for the resource value which in this context is 'blogs'.

    return (
        <div className="home">
            {/* outputting error on the webpage */}
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;











// const handleDelete = (id) => {
    //     const newBlogs =  blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }