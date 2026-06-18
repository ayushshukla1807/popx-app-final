import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Camera } from 'lucide-react';

export const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (!error && data) {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  if (loading) return <div className="p-6">Loading profile...</div>;

  const demoEmail = localStorage.getItem('demo_email');
  const demoName = localStorage.getItem('demo_name');

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full w-full bg-white"
    >
      {/* Top Header Layer */}
      <div className="bg-white px-6 py-5 z-10 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <h1 className="text-[17px] font-semibold text-[#1a1a1a]">Account Settings</h1>
        <button onClick={handleLogout} className="text-[13px] text-red-500 font-medium hover:opacity-80">Logout</button>
      </div>

      {/* Middle Gray Block */}
      <div className="bg-[#f7f8f9] px-6 py-8 border-b border-dashed border-[#cbcbcb]">
        <div className="flex gap-5 items-start mb-6">
          <div className="relative">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id || demoEmail || 'demo'}`} 
              alt="Profile avatar" 
              className="w-[72px] h-[72px] rounded-full border border-gray-200 bg-white"
            />
            <button className="absolute bottom-0 right-0 bg-brand text-white p-1.5 rounded-full border-2 border-[#f7f8f9]">
              <Camera size={14} />
            </button>
          </div>
          <div className="pt-2 flex-1">
            <h2 className="text-[15px] font-bold text-[#1a1a1a] mb-0.5">
              {profile?.full_name || user?.user_metadata?.full_name || demoName || 'Marry Doe'}
            </h2>
            <p className="text-[13px] text-[#2c2c2c] opacity-80">{user?.email || demoEmail || 'Marry@Gmail.Com'}</p>
          </div>
        </div>

        <div className="text-[14px] text-[#2c2c2c] leading-[1.6]">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
      
      {/* Empty White Space Below */}
      <div className="flex-1 bg-white"></div>
    </motion.div>
  );
};
