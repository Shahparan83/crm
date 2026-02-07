import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types/navigation';
// UI Components from base library resources\js\components\base\input\input.tsx
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

interface ProductForm {
  name: string;
  description: string;
  price: string;
}
import { Button } from '@/components/ui/button';
export default function Create() {
  const { data, setData, post, processing, errors } =
    useForm<ProductForm>({
      name: '',
      description: '',
      price: '',
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/products');
  };
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Create New Product',
      href: '/products/create',
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
            <Label>Description:</Label>
            <Input
              value={data.description}
              onChange={e => setData('description', e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className='gap-1.5'>
            <Label>Price:</Label>
            <Input
              value={data.price}
              onChange={e => setData('price', e.target.value)}
              placeholder="Price"
            />
          </div>
          <Button disabled={processing}>Save</Button>
        </form>
      </div>
    </AppLayout>
  );
}
