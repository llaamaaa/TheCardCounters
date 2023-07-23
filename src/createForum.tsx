import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from './config';
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

interface Post {
    id: string;
    title: string;
    content: string;
    comments: Comment[];
  }
  
  interface Comment {
    id: string;
    content: string;
  }


const CreatePostPage: React.FC<{}> = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    // type NewCommentContent = { [postId: string]: string };

    // const [newCommentContent, setNewCommentContent] = useState<NewCommentContent>({});

    const navigate = useNavigate();
    
    const createPost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPostContent) {
            return; // Exit early if the post content is empty
          }
      
        try {
          const postDocRef = await addDoc(collection(db, 'posts'), {
            title: newPostTitle,
            content: newPostContent,
            comments: [],
          });
          const newPost: Post = {
            id: postDocRef.id,
            title: newPostTitle,
            content: newPostContent,
            comments: [],
          };
          setPosts((prevPosts) => [...prevPosts, newPost]);
          setNewPostTitle('');
          setNewPostContent('');
        } catch (error) {
          console.log('Error creating post:', error);
        }
        navigate('/Forum', { state: { posts: posts} });
      };


    return <div>
        <div className="navButton backButton" onClick={(() => navigate("/Forum"))}>
                    <ImCross/>
                </div>
        <h2>Create a New Post</h2>
          <input
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            placeholder="Post Title"
            className="inputText"
          />
          <div></div>
          <input
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Post Content"
            className="inputText"
          ></input>
          <button onClick={createPost}>Add Post</button>
    </div>
}

export default CreatePostPage;



// newPostTitle, setNewPostTitle(e.target.value), newPostContent, setNewPostContent(e.target.value), createPost