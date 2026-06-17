import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full w-full justify-end px-6 pb-10 bg-white"
    >
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#1a1a1a] mb-2 leading-tight">Welcome to PopX</h1>
        <p className="text-[#8c8c8c] text-[15px] leading-[1.6]">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
      </div>
      
      <div className="space-y-3">
        <Button onClick={() => navigate('/register')} variant="primary">
          Create Account
        </Button>
        <Button onClick={() => navigate('/login')} className="bg-[#e4dcf5] text-[#5a1fd1] hover:bg-[#d6c7f0]">
          Already Registered? Login
        </Button>
      </div>
    </motion.div>
  );
};
