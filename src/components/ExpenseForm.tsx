import { useState } from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// * components
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog';

// * icons
import { IconPlus } from '@tabler/icons-react';
import FormInput from './FormInput';

// * schemas
const FormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

// * types
type FormSchemaType = z.infer<typeof FormSchema>;

const ExpenseForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormSchema), defaultValues: { title: '' } });

  const openChangeHandler = (open: boolean) => {
    if (open) reset();
    setOpen(open);
  };

  const onSubmit = async (data: FormSchemaType) => {};

  return (
    <Dialog open={open} onOpenChange={openChangeHandler}>
      <DialogTrigger asChild>
        <Button variant='secondary'>
          <IconPlus className='size-3.5' />
          New Transaction
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>New Transaction</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-2 space-y-6'>
          <FormInput
            label='Title'
            placeholder='Title'
            error={errors.title?.message}
            {...register('title')}
          />
        </form>

        <DialogFooter className='sm:justify-start'>
          <Button type='button' className='w-full'>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseForm;
