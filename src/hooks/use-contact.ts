import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { post } from '@/lib/api-client';
import type { ContactMessage } from '@shared/types';
type ContactFormInput = Pick<ContactMessage, 'name' | 'email' | 'subject' | 'message'>;
const submitContactForm = (input: ContactFormInput) => post<{ id: string }>('/api/contact', input);
export const useContactForm = () => {
  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you within 1-2 business days.");
    },
    onError: () => {
      toast.error('Something went wrong sending your message. Please try again.');
    },
  });
  return {
    submit: mutation.mutate,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
