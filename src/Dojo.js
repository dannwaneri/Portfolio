import { useState, useEffect} from "react";
import BlogList from './BlogList'

const Dojo = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name,setName] = useState('Emeka')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

useEffect(() =>{
  console.log('use Effect ran'); 
  console.log(name)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[name])
/* Whenever state is updated, Dojo re-renders and useEffect runs */

/*To avoid executing the effect callback after each render, 
we provide a second argument, an empty array.**/

/*With an empty array, our button doesn't work no matter how many times we click it... 
    The name is only set once, when the component first mounts.*/

/* 
    Let's add name to our dependencies array
    When name changes, useEffect will execute the effect function again
  */
  return (
    <div className="home">
      <BlogList blogs = {blogs} title="All blogs" handleDelete ={handleDelete}/>
      <BlogList blogs = {blogs.filter(blog => blog.author === 'mario')} title = "Mario's Blogs"/>
      <button onClick={() => setName('Tochi')} style ={{display: 'none'}}>Change Name</button>
      <p style ={{display: 'none'}}>{name}</p>
      </div>
  );
}
 
export default Dojo;
