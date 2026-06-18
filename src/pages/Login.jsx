import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/authSchema';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../hooks/useAuth';
import { ChevronLeft } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [authError, setAuthError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    setAuthError('');
    const { error } = await signIn({ email: data.email, password: data.password });
    
    if (error) {
      setAuthError(error.message);
    } else {
      navigate('/profile');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full w-full px-6 pt-6 bg-white"
    >
      {/* Back to Home Navigation */}
      <button 
        onClick={() => navigate('/')} 
        className="w-fit mb-4 flex items-center text-[#8c8c8c] hover:text-[#1a1a1a] transition-colors -ml-2 p-2 rounded-full"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#1a1a1a] mb-3 leading-tight">Signin to your<br/>PopX account</h1>
        <p className="text-[#8c8c8c] text-[15px] leading-[1.6]">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-10">
        <div className="space-y-2">
          <Input 
            label="Email Address" 
            type="email" 
            {...register('email')} 
            error={errors.email?.message} 
          />
          <Input 
            label="Password" 
            type="password" 
            {...register('password')} 
            error={errors.password?.message} 
          />
        </div>

        {authError && <p className="text-sm text-red-500 mt-2">{authError}</p>}

        <div className="mt-6">
          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#CBCBCB] text-white hover:bg-[#b8b8b8]">
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
