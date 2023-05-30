import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

interface Post {
  id: string;
  content: string;
}

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().content,
      }));
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(event.target.value);
  };

  const handlePostSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Create a new post object
      const post = {
        content: newPost,
      };

      // Save the new post to Firebase
      const docRef = await addDoc(collection(db, 'posts'), post);

      // Add the new post to the posts array
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: docRef.id, content: post.content },
      ]);

      // Clear the new post input field
      setNewPost('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Blackjack Strategy Forum</h2>

      <div>
        <h3>Posts:</h3>
        {posts.map((post) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </div>

      <div>
        <h3>Create a New Post:</h3>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={handlePostChange}
            placeholder="Write your post..."
            rows={4}
            cols={50}
          />
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default ForumPage;
