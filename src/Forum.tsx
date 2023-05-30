import React, { useState, useEffect } from 'react';
import { db } from './config';
import { addDoc, collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';

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

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const fetchedPosts: Post[] = [];
      snapshot.forEach((postDoc) => {
        const post = { ...postDoc.data(), id: postDoc.id } as Post;
        fetchedPosts.push(post);
      });
      setPosts(fetchedPosts);
    });
  
    return () => unsubscribe();
  }, []);
  
  


  const fetchPosts = async () => {
    try {
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      const fetchedPosts: Post[] = [];
      postsSnapshot.forEach((postDoc) => {
        const post = { ...postDoc.data(), id: postDoc.id } as Post;
        fetchedPosts.push(post);
      });
      setPosts(fetchedPosts);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };
  
  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
  
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
  };
  
  const addComment = async (postId: string) => {
    try {
      const postRef = doc(db, 'posts', postId);
      const commentDocRef = await addDoc(collection(postRef, 'comments'), {
        content: newCommentContent,
      });
      const newComment: Comment = {
        id: commentDocRef.id,
        content: newCommentContent,
      };
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, newComment],
            };
          }
          return post;
        })
      );
      setNewCommentContent('');
    } catch (error) {
      console.log('Error adding comment:', error);
    }
  };
  
  
  

  return (
    <div>
      <h2>Forum</h2>
      <div>
        <form onSubmit={createPost}>
          <input
            type="text"
            placeholder="Post Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Content"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          ></textarea>
          <button type="submit">Create Post</button>
        </form>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
            <form
                onSubmit={(e) => {
                e.preventDefault();
                addComment(post.id);
                }}>
            <input
            type="text"
            placeholder="Comment"
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}/>
            <button type="submit">Add Comment</button>
            </form>

            </div>
            <div>
  {post.comments && post.comments.map((comment) => (
    <p key={comment.id}>{(comment as Comment).content}</p>
  ))}
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
