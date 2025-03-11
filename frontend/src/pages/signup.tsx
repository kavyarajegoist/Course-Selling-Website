
import { zodResolver } from '@hookform/resolvers/zod';

import {SubmitHandler, useForm} from 'react-hook-form'
import {z} from 'zod';

const schema = z.object({
  email:z.string().email(),
  password: z.string().min(8)
});

type FormFields = z.infer<typeof schema>

const SignUp = () => {
  const {register,handleSubmit,formState:{errors,isSubmitting},} = useForm<FormFields>({resolver:zodResolver(schema)});

  const onSubmit:SubmitHandler<FormFields> = async(data)=>{
  
 
    console.log(data);
  }
  return (
    <>
        <div className="h-screen flex justify-center items-center font-[DM_Sans] " onSubmit={handleSubmit(onSubmit)}>
        <form className='flex flex-col justify-center items-center bg-gray-200 p-8 rounded-lg w-64 gap-4'>
          <input type="text" {...register('email')} placeholder='email' />
          {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
          <input type="password" {...register('password')} placeholder='password' />
          
          {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}
          <button className='bg-purple-500 hover:bg-purple-400 rounded-lg px-2 py-1 font-semibold' type='submit' disabled={isSubmitting} >{isSubmitting?'Loading...':'Submit'}</button>
        </form>
    </div>
    
    </>
  );
};

export default SignUp;
