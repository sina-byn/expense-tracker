import { useId } from 'react';

// * components
import { Label } from './ui/label';
import { Input } from './ui/input';

// * types
import type { UseFormRegisterReturn } from 'react-hook-form';
import { Textarea } from './ui/textarea';

type FormInputProps<T extends string> = UseFormRegisterReturn<T> & {
  label: string;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
  className?: string;
};

const FormInput = <T extends string>({ label, error, textarea, ...props }: FormInputProps<T>) => {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id} className='mb-2'>
        {label}
      </Label>

      {textarea ? <Textarea id={id} {...props} /> : <Input id={id} {...props} />}

      {error && error.length > 0 && <p className='text-destructive mt-1 text-sm'>{error}</p>}
    </div>
  );
};

export default FormInput;
