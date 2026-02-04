import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import * as React from 'react';
import { BreadcrumbItem } from '@/types/navigation';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Client } from '@/types/client';
import clientRoutes from '@/routes/clients';

interface Props {
  client: Client;
}

interface ClientForm {
  name: string;
  email: string;
  phone: string;
}

export default function Edit({ client }: Props) {
  const { data, setData, put, processing, errors } =
    useForm<ClientForm>({
      name: client.name,
      email: client.email,
      phone: client.phone ?? '',
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    put(clientRoutes.update.url(client.id));
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Clients', href: '/clients' },
    { title: 'Edit Client', href: `/clients/${client.id}/edit` },
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={data.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('email', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={data.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('phone', e.target.value)}
            />
          </div>

          <Button disabled={processing}>
            Update Client
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
function route(arg0: string, id: number): string {
    throw new Error('Function not implemented.');
}

