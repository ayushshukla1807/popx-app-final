import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { signupSchema } from '../schemas/authSchema';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../hooks/useAuth';
import { ChevronLeft } from 'lucide-react';

export const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data) => {
    const { error } = await signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          phone: data.phone,
          company: data.company,
          is_agency: data.isAgency === 'yes',
        }
      }
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Account created successfully!');
      navigate('/profile');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full w-full px-6 pt-6 overflow-y-auto bg-white"
    >
      {/* Back to Home Navigation */}
      <button 
        onClick={() => navigate('/')} 
        className="w-fit mb-2 flex items-center text-[#8c8c8c] hover:text-[#1a1a1a] transition-colors -ml-2 p-2 rounded-full"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-[#1a1a1a] leading-tight">Create your<br/>PopX account</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-10">
        <div className="space-y-1 mb-2">
          <Input label="Full Name" placeholder="Enter full name" required {...register('fullName')} error={errors.fullName?.message} />
          <Input label="Phone number" placeholder="Enter phone number" required {...register('phone')} error={errors.phone?.message} />
          <Input label="Email address" type="email" placeholder="Enter email address" required {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" placeholder="Enter password" required {...register('password')} error={errors.password?.message} />
          <Input label="Company name" placeholder="Enter company name" required {...register('company')} error={errors.company?.message} />
          
          <div className="pt-2">
            <p className="text-[13px] font-semibold text-[#1a1a1a] mb-2">Are you an Agency? <span className="text-red-500">*</span></p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-[14px] text-[#2c2c2c] cursor-pointer">
                <input type="radio" value="yes" {...register('isAgency')} className="w-5 h-5 accent-brand cursor-pointer" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-[14px] text-[#2c2c2c] cursor-pointer">
                <input type="radio" value="no" {...register('isAgency')} className="w-5 h-5 accent-brand cursor-pointer" />
                No
              </label>
            </div>
            {errors.isAgency && <p className="text-xs text-red-500 mt-2">{errors.isAgency.message}</p>}
          </div>
        </div>

        <div className="mt-8">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
