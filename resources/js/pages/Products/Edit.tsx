import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import * as React from 'react';
import { BreadcrumbItem } from '@/types/navigation';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import clientRoutes from '@/routes/clients';

interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

interface ProductForm {
  name: string;
  description: string;
  price: string;
}

export default function Edit({ product }: Props) {
  const { data, setData, put, processing, errors } =
    useForm<ProductForm>({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/products/${product.id}`);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Products', href: '/products' },
    { title: 'Edit Product', href: `/products/${product.id}/edit` },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="w-8/12 mx-auto py-6">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('name', e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={data.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('description', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={data.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('price', e.target.value)}
            />
          </div>

          <Button disabled={processing}>
            Update Product
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
function route(arg0: string, id: number): string {
  throw new Error('Function not implemented.');
}

