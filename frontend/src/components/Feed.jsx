import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Repeat2, 
  Heart, 
  Share, 
  MoreHorizontal, 
  ArrowBigUp, 
  ArrowBigDown, 
  Link as LinkIcon,
  CheckCircle2,
  Clock,
  Send,
  Plus
} from 'lucide-react';
import toast from 'react-hot-toast';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Rajesh Kumar",
      handle: "@rajesh_delivery",
      role: "Zomato Partner",
      avatar: "RK",
      content: "Has anyone else noticed the payout delay on the Friday night shift? It took almost 4 hours for my earnings to reflect. This is why we need protocols like ShiftTokens! 🚀",
      timestamp: "2h ago",
      likes: 24,
      reposts: 5,
      upvotes: 142,
      comments: [
        { id: 101, author: "Amit S.", content: "Same here. Polygon settlement is usually instant, must be a platform API issue." },
        { id: 102, author: "Zomato Support (Unofficial)", content: "We are looking into the node congestion issues." }
      ],
      liked: false,
      upvoted: false,
      downvoted: false
    },
    {
      id: 2,
      author: "Sarah Chen",
      handle: "@sarah_gig_lead",
      role: "Top Investor",
      avatar: "SC",
      content: "Just funded 50 extra shifts in the Bangalore region. The risk engine is showing great stability today. Helping workers unlock liquidity while earning solid returns. Win-win! 💎",
      timestamp: "5h ago",
      likes: 89,
      reposts: 12,
      upvotes: 456,
      comments: [
        { id: 201, author: "Worker 77", content: "Thanks for the support! Just cashed out for my fuel costs." }
      ],
      liked: true,
      upvoted: true,
      downvoted: false
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const handleVote = (id, type) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        if (type === 'up') {
          return { 
            ...post, 
            upvotes: post.upvoted ? post.upvotes - 1 : post.upvotes + 1, 
            upvoted: !post.upvoted,
            downvoted: false
          };
        } else {
          return { 
            ...post, 
            upvotes: post.downvoted ? post.upvotes + 1 : post.upvotes - 1, 
            downvoted: !post.downvoted,
            upvoted: false
          };
        }
      }
      return post;
    }));
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { 
          ...post, 
          likes: post.liked ? post.likes - 1 : post.likes + 1, 
          liked: !post.liked 
        };
      }
      return post;
    }));
  };

  const copyToClipboard = (id) => {
    const url = `${window.location.origin}/feed/post/${id}`;
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const createPost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      author: "You",
      handle: "@current_user",
      role: "Protocol Member",
      avatar: "U",
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      reposts: 0,
      upvotes: 1,
      comments: [],
      liked: false,
      upvoted: true,
      downvoted: false
    };
    setPosts([post, ...posts]);
    setNewPost("");
    toast.success("Post published to the protocol!");
  };

  return (
    <div className="max-w-2xl mx-auto pt-28 pb-20 px-4">
      {/* Feed Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-space font-bold text-white mb-2">Community Feed</h1>
          <p className="text-text-muted">A global advocacy portal for the gig economy.</p>
        </div>
        <div className="hidden sm:flex gap-2 text-xs font-bold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-4 py-2 rounded-full border border-accent-blue/20">
          <Clock size={14} /> Real-time Updates
        </div>
      </div>

      {/* Post Creation */}
      <div className="glass-card p-6 mb-8 border-accent-blue/20">
        <textarea
          placeholder="Share an update or report a problem..."
          className="w-full bg-transparent text-white placeholder:text-text-muted/50 resize-none outline-none text-lg min-h-[100px]"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
          <div className="flex gap-4 text-accent-blue opacity-70">
            <button className="hover:text-white transition-colors"><MessageSquare size={20} /></button>
            <button className="hover:text-white transition-colors"><Plus size={20} /></button>
          </div>
          <button 
            onClick={createPost}
            disabled={!newPost.trim()}
            className="btn-premium btn-glow-blue !py-2 !px-6 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post <Send size={16} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-6">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="flex">
                {/* Voting Sidebar (Reddit style) */}
                <div className="w-12 bg-white/2 flex flex-col items-center py-4 gap-1 border-r border-white/5">
                  <button 
                    onClick={() => handleVote(post.id, 'up')}
                    className={`p-1 rounded-md transition-colors ${post.upvoted ? 'text-accent-blue bg-accent-blue/10' : 'text-text-muted hover:text-accent-blue hover:bg-white/5'}`}
                  >
                    <ArrowBigUp size={24} />
                  </button>
                  <span className={`text-xs font-bold ${post.upvoted ? 'text-accent-blue' : post.downvoted ? 'text-accent-red' : 'text-white'}`}>
                    {post.upvotes}
                  </span>
                  <button 
                    onClick={() => handleVote(post.id, 'down')}
                    className={`p-1 rounded-md transition-colors ${post.downvoted ? 'text-accent-red bg-accent-red/10' : 'text-text-muted hover:text-accent-red hover:bg-white/5'}`}
                  >
                    <ArrowBigDown size={24} />
                  </button>
                </div>

                {/* Main Post Content (Twitter style) */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-accent-blue font-bold shadow-glow-blue border border-accent-blue/10">
                        {post.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white leading-none">{post.author}</h4>
                          <CheckCircle2 size={14} className="text-accent-blue" />
                          <span className="text-xs text-text-muted">{post.handle}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-accent-blue font-bold mt-1 opacity-70">
                          {post.role}
                        </p>
                      </div>
                    </div>
                    <button className="text-text-muted hover:text-white transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <p className="text-text-light text-lg mb-6 leading-relaxed">
                    {post.content}
                  </p>

                  <div className="flex justify-between items-center text-text-muted">
                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 hover:text-accent-blue transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-accent-blue/10"><MessageSquare size={18} /></div>
                        <span className="text-sm font-semibold">{post.comments.length}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-accent-green transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-accent-green/10"><Repeat2 size={18} /></div>
                        <span className="text-sm font-semibold">{post.reposts}</span>
                      </button>
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-2 transition-colors group ${post.liked ? 'text-accent-red' : 'hover:text-accent-red'}`}
                      >
                        <div className={`p-2 rounded-full ${post.liked ? 'bg-accent-red/10' : 'group-hover:bg-accent-red/10'}`}>
                          <Heart size={18} fill={post.liked ? "currentColor" : "none"} />
                        </div>
                        <span className="text-sm font-semibold">{post.likes}</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(post.id)}
                      className="flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <div className="p-2 rounded-full group-hover:bg-white/5"><Share size={18} /></div>
                      <span className="text-xs font-bold uppercase tracking-tighter">Share</span>
                    </button>
                  </div>

                  {/* Dummy Comments Section */}
                  {post.comments.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                      {post.comments.map(comment => (
                        <div key={comment.id} className="flex gap-3 bg-white/2 p-3 rounded-xl border border-white/5">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-text-muted">
                            {comment.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white mb-1">{comment.author}</p>
                            <p className="text-sm text-text-muted">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Feed;
