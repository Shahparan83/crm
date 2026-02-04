import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types/navigation';
// UI Components from base library resources\js\components\base\input\input.tsx
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

interface ClientForm {
  name: string;
  email: string;
  phone: string;
}
import { Button } from '@/components/ui/button';
export default function Create() {
  const { data, setData, post, processing, errors } =
    useForm<ClientForm>({
      name: '',
      email: '',
      phone: '',
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/clients');
  };
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Create New Client',
    href: '/clients/create',
  },
];
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className='w-8/12 mx-auto py-6'>
    <form onSubmit={submit}>
      <div className='gap-1.5'>
        <Label>Name:</Label>
      <Input
        value={data.name}
        onChange={e => setData('name', e.target.value)}
        placeholder="Name"
      
      />
      {errors.name && <div className="text-red-500">{errors.name}</div>}
      </div>
      <div className='gap-1.5'>
        <Label>Email:</Label>
      <Input
        value={data.email}
        onChange={e => setData('email', e.target.value)}
        placeholder="Email"
      />
      </div>
      <div className='gap-1.5'>
        <Label>Phone:</Label>
      <Input
        value={data.phone}
        onChange={e => setData('phone', e.target.value)}
        placeholder="Phone"
      />
</div>
      <Button disabled={processing}>Save</Button>
    </form>
    </div>
    </AppLayout>
  );
}
