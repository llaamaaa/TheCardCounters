import React, { useState, useEffect } from 'react';
import { db } from './config';
import { collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Forum.css'
// import CreatePostPage from './createForum';

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
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);
    // const [newPostTitle, setNewPostTitle] = useState('');
    // const [newPostContent, setNewPostContent] = useState('');
    // const [newCommentContent, setNewCommentContent] = useState<string>('');
    // const [commentContents, setCommentContents] = useState<{ [postId: string]: string }>({});
    type NewCommentContent = { [postId: string]: string };

    const [newCommentContent, setNewCommentContent] = useState<NewCommentContent>({});
    
  
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const postsSnapshot = await getDocs(collection(db, 'posts'));
            const fetchedPosts: Post[] = [];
            postsSnapshot.forEach((postDoc) => {
              const post = {
                id: postDoc.id,
                ...postDoc.data(),
              } as Post;
              fetchedPosts.push(post);
            });
            setPosts(fetchedPosts);
          } catch (error) {
            console.log('Error fetching posts:', error);
          }
        };
      
        fetchPosts();
      }, []);
      

    // const fetchPosts = async () => {
    //     try {
    //       const postsSnapshot = await getDocs(collection(db, 'posts'));
    //       const fetchedPosts: Post[] = [];
    //       postsSnapshot.forEach((postDoc) => {
    //         const post = {
    //           id: postDoc.id,
    //           ...postDoc.data(),
    //         } as Post;
    //         fetchedPosts.push(post);
    //       });
    //       setPosts(fetchedPosts);
    //     } catch (error) {
    //       console.log('Error fetching posts:', error);
    //     }
    //   };
      
  
    // const createPost = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!newPostContent) {
    //         return; // Exit early if the post content is empty
    //       }
      
    //     try {
    //       const postDocRef = await addDoc(collection(db, 'posts'), {
    //         title: newPostTitle,
    //         content: newPostContent,
    //         comments: [],
    //       });
    //       const newPost: Post = {
    //         id: postDocRef.id,
    //         title: newPostTitle,
    //         content: newPostContent,
    //         comments: [],
    //       };
    //       setPosts((prevPosts) => [...prevPosts, newPost]);
    //       setNewPostTitle('');
    //       setNewPostContent('');
    //     } catch (error) {
    //       console.log('Error creating post:', error);
    //     }
    //   };
      
  
      const addComment = async (postId: string) => {
        const content = newCommentContent[postId];
        if (!content) {
          return; // Exit early if the comment content is empty
        }
      
        try {
          const postRef = doc(db, 'posts', postId);
          const commentsCollectionRef = collection(postRef, 'comments');
      
          const newComment: Comment = {
            id: '', // Initialize the id property
            content: newCommentContent[postId],
          };
      
          const commentDocRef = await addDoc(commentsCollectionRef, newComment);
          newComment.id = commentDocRef.id;
      
          const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                comments: [...post.comments, newComment],
              };
            }
            return post;
          });
      
          setPosts(updatedPosts);
          setNewCommentContent((prevContent) => ({
            ...prevContent,
            [postId]: '', // Clear the comment content for the specific post
          }));
      
          // Update the comments subcollection in Firebase
          await setDoc(postRef, { comments: updatedPosts.find((post) => post.id === postId)?.comments }, { merge: true });
        } catch (error) {
          console.log('Error adding comment:', error);
        }
      };
      
      
      
      
      
      
      
  
      const handleCommentChange = (postId: string, content: string) => {
        setNewCommentContent((prevContent) => ({
          ...prevContent,
          [postId]: content,
        }));
      };
      

      const renderPosts = (posts: Post[]) => {
        return posts.map((post) => (
          <div key={post.id} className='forum-card' >
            <h3 className='forum-text forum-title'>{post.title}</h3>
            <p className='forum-text'>{post.content}</p>
            <div>
              {post.comments.map((comment) => (
                <p  className='forum-text' key={comment.id}>{comment.content}</p>
              ))}
            </div>
            <input
              type="text"
             value={newCommentContent[post.id] || ''}
             className='inputText'
              onChange={(e) => handleCommentChange(post.id, e.target.value)}/>
            
            <button onClick={() => addComment(post.id)}>Add Comment</button>
          </div>
        ));
      };
      



      return (
        <div className='background'>
            <div className="navButton backButton" onClick={(() => navigate("/"))}>
                    Back
                </div>
          <h2 className='forumPageText'>Card Counting Forum</h2>
  
         <button onClick={() => {
          navigate('/CreatePost', { state: { posts: posts} });
         }} className='createPostButton'>Create Post</button>
          <div className='forum-list'>
            {posts.length === 0 ? (
              <p>No posts available.</p>
            ) : (
              renderPosts(posts)
            )}
          </div>
        </div>
      );
                    }
      
      
      

export default ForumPage;
